const http = require('http'),
    url = require('url'),
    fs = require('fs'),
    path = require('path');

const config = JSON.parse(fs.readFileSync(argv[0], 'utf-8')),
      root = config.root || '.';

http.createServer(function(request,response){
    let req_url = url.parse(request.url),
        req_basepath = req_url.pathname,
        req_querystring = req_url.query;
    if(req_querystring.charAt(0) == '?') {
        req_querystring = req_url.query.substring(1);
        let filenameLists = req_querystring.split(','),
            fileLists = filenameLists.map(function(val){return path.join(root,req_basepath,val);});
        combineFile(fileLists,function(err, data) {
            response.writeHead(200, {
                'Content-Type': urlInfo.mime
            });
            response.end(data);
        });
    } else{
        response.writeHead(200, {
            'Content-Type': urlInfo.mime
        });
        response.end(fs.readFileSync(path.join(root,req_url)));
    }
}).listen(8888);

function combineFile(pathnames, callback) {
    var output = [];
    (function next(i,len) {
        if(i< len) {
            fs.readFile(pathname[i], function(err,data) {
                fs.readFile(pathnames[i], function(err,data) {
                    if(err) {
                        callback(err);
                    } else {
                        output.push(data);
                        next(i+1,len);
                    }
                })
            });
        }
    }(0, pathnames.length));
}
