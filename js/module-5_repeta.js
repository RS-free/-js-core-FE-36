const objC = {
  z: 5,
};

const objB = Object.create(objC);
objB.y = 2;

console.log(objC);
console.log(objB);
console.log(objB.y);
console.log(objB.z);

const objA = Object.create(objB);
objA.x = 1;

console.log("objA", objA);
