// for..of 调用对象上的Symbol.iterator方法

// for..in可以操作任何对象；它提供了查看对象属性的一种方法。 但是 for..of关注于迭代对象的值。

let pets = new Set(["Cat", "Dog", "Hamster"]);
for(let pet of pets) {
    console.log(pet);
}
