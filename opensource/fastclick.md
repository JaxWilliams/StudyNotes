# 用法
```javascript
// with javascript
document.addEventListener('DOMContentLoaded', function() {
    FastClick.attach(document.body);
}, false);

// with jQuery
$(function() {
    FastClick.attach(document.body);
});

// with modules
var attachFastClick = require('fastclick');
attachFastClick(document.body);
```
高级用法：
```javascript
// 忽略FastClick使用needsclick
<a class="needsclick">Ignored by FastClick</a>
```
# 构造函数
属性：
1. trackingClick
2. trackingClickStart
3. targetElement
4. touchStartX
5. touchStartY
6. lastTouchIdentifier -> 0
7. touchBoundary -> options.touchBoundary || 10
8. layer -> layer
9. tapDelay -> options.tapDelay || 200
10. tapTimeout -> options.tapTimeout || 700

onMouse,onClick,onTouchStart,onTouchMove,onTouchEnd,onTouchCancel 绑定执行环境

早期Android中不支持Event#stopImmediatePropagation,因此重写addEventListener,removeEventListener

onclick -> 如果原有已绑定，那么改为绑定事件，onclick置空

# 实例方法
1. FastClick.prototype.needsClick
Determine whether a given element requires a native click.
核心代码: `(/\bneedsclick\b/).test(target.className)`
检测className中是否存在needsclick

2. FastClick.prototype.needsFocus
Determine whether a given element requires a call to focus to simulate click into element.
核心代码: `(/\bneedsfocus\b/).test(target.className)`
检测className中是否存在needsFocus

3. FastClick.prototype.sendClick
Send a click event to the specified element.
核心代码:
```javascript
//创建一个鼠标事件
touch = event.changedTouches[0];
clickEvent = document.createEvent('MouseEvents');
//初始化鼠标事件
clickEvent.initMouseEvent(this.determineEventType(targetElement), true, true, window, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, false, false, false, false, 0, null);
clickEvent.forwardedTouchEvent = true;
//触发这个事件
targetElement.dispatchEvent(clickEvent);
```

4. FastClick.prototype.determineEventType
Determine eventType of targetElement

5. FastClick.prototype.focus
just focus
核心代码: `targetElement.focus()`

6. FastClick.prototype.updateScrollParent
Check whether the given target element is a child of a scrollable layer and if so, set a flag on it.
不理解有什么用

7. FastClick.prototype.getTargetElementFromEventTarget
On some older browsers (notably Safari on iOS 4.1) the event target may be a text node.

8. FastClick.prototype.onTouchStart
On touch start, record the position and scroll offset.
核心代码:
```javascript
this.trackingClick = true;
this.trackingClickStart = event.timeStamp;
this.targetElement = targetElement;

this.touchStartX = touch.pageX;
this.touchStartY = touch.pageY;

// tapDelay默认300毫秒，点击时间差小于300毫秒，则阻止事件再次触发，阻止短时间内双击的问题
if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
    event.preventDefault();
}
```

9. FastClick.prototype.touchHasMoved
Based on a touchmove event object, check whether the touch has moved past a boundary since it started.
核心代码:
```javascript
touch = event.changedTouches[0]
Math.abs(touch.pageX - this.touchStartX) > boundary || Math.abs(touch.pageY - this.touchStartY) > boundary
```

10. FastClick.prototype.onTouchMove
If is moving

11. FastClick.prototype.findControl
Attempt to find the labelled control for the given label element.

12. FastClick.prototype.onTouchEnd
On touch end, determine whether to send a click event at once.
核心代码:
```javascript
if (!this.needsClick(targetElement)) {
  event.preventDefault(); 
  // 触发一次模拟的click
  this.sendClick(targetElement, event);
}
```

13. FastClick.prototype.onTouchCancel
On touch cancel, stop tracking the click.
```javascript
this.trackingClick = false;
this.targetElement = null;
```

14. FastClick.prototype.onMouse
Determine mouse events which should be permitted.

15. FastClick.prototype.onClick
On actual clicks, determine whether this is a touch-generated click, a click action occurring naturally after a delay after a touch (which needs to be cancelled to avoid duplication), or an actual click which should be permitted.

16. FastClick.prototype.destroy
Remove all FastClick's event listeners.

# 类方法
1. FastClick.notNeeded
2. FastClick.attach
