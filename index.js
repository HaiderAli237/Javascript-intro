let obj1 = { name: "Haider" };
let obj2 = obj1;

obj2.name = "Ali";

console.log(obj1.name); // Ali
console.log(obj2.name); // Ali