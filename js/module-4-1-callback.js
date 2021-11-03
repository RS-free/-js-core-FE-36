// // High-order function
// function highOrder(value, callback) {
//     console.log(`Hello, I am high Order function`)
//     callback(value)
//   }
//   // highOrder(`Hello, I am callback`, setMessage)
  
//   // Callback function
//   function setMessage(message) {
//     console.log(message)
//   }
  
//   // setMessage(`Hello, I am callback`)
  
//   // EXAMPLES
//   function getCourse(cb1, cb2, cb3, cb4) {
//     cb1()
//     cb2()
//     cb3()
//     cb4()
//   }
//   //getCourse(learnJs, learnReact, learnNodeJs, learnDB)
  
//   function learnJs() {
//     console.log(`I need to read Docs`)
//   }
//   function learnReact() {
//     console.log(`I need to use Redux`)
//   }
  
//   function learnNodeJs() {
//     console.log(`I need to use express`)
//   }
  
//   function learnDB() {
//     console.log(`I need to know MongoDB & NoSQL`)
//   }
//   // EXAMPLES
  
//   const toGetFibonacci = function (value, cb) {
//     let firstNumber = 0
//     let secondNumber = 1
//     const sequence = [firstNumber, secondNumber]
//     for (let i = 1; i <= value; i++) {
//       let number = firstNumber + secondNumber
//       firstNumber = secondNumber
//       secondNumber = number
//       sequence.push(number)
//     }
//     //   let result = cb(sequence)
//     //   return result
//     return cb(sequence)
//   }
//   // console.log('toGetFibonacci', toGetFibonacci(10, getSumm))
  
//   function getSumm(arr) {
//     let total = 0
//     for (let i = 0; i < arr.length; i++) {
//       total += arr[i]
//     }
//     return total
//   }
//   const numbers = [1, 2, 3, 4, 5]
  
//   function myFunc(arr, callback) {
//     return callback(arr)
//   }
  
//   // console.log('myFunc', myFunc(numbers, getSumm))
  
//   // Abstruction
//   function getFibonacciSequence(n, callback) {
//     const fibonacciSequence = []
//     let num1 = 0
//     let num2 = 1
//     for (let i = 0; i <= n; i++) {
//       let num = num1 + num2
//       num1 = num2
//       num2 = num
//       fibonacciSequence.push(num)
//     }
//     //   console.log('fibonacciSequence: ', ...fibonacciSequence)
//     let result = callback(fibonacciSequence)
//     //   console.log('result:', result)
//   }
//   // getFibonacciSequence(10, getSum)
  
//   function getSum(arr) {
//     let total = 0
//     for (let i = 0; i < arr.length; i++) {
//       total += arr[i]
//     }
//     return total
//   }
//   const array = [
//     { name: 'Alice', age: 18 },
//     { name: 'Dick', age: 19 },
//     { name: 'Alan', age: 17 },
//     { name: 'Bob', age: 20 },
//     { name: 'Fill', age: 21 },
//     { name: 'Barbra', age: 16 },
//     { name: 'Sarah', age: 17 },
//   ]
  
//   function getStudentByAge(arr) {
//     console.log(arr)
//     const filteredStudents = []
//     for (let i = 0; i < arr.length; i++) {
//       console.log(arr[i])
//       let condition = arr[i].age >= 18
//       console.log('condition', condition)
//       if (condition) {
//         filteredStudents.push(arr[i])
//       }
//     }
//     console.log(filteredStudents)
//   }
//   // getStudentByAge(array)
  
//   function getYoungStudents(arr) {
//     const array = []
  
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i].age < 18) {
//         array.push(arr[i])
//       }
//     }
//     return array
//   }
//   function getOldStudents(arr) {
//     const array = []
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i].age >= 18) {
//         array.push(arr[i])
//       }
//     }
//     return array
//   }
  
//   function getNames(arr) {
//     const names = []
//     for (let i = 0; i < arr.length; i++) {
//       // console.log(arr[i].name)
//       names.push(arr[i].name)
//     }
//     return names
//   }
  
//   function getStudents(cb, arr) {
//     return cb(arr)
//   }
//   const youngStudents = getStudents(getYoungStudents, array)
//   // console.log(youngStudents)
  
//   const oldStudents = getStudents(getOldStudents, array)
//   // console.log(oldStudents)
  
//   const studensNames = getStudents(getNames, array)
//   // console.log(studensNames)
  
//   const studentsGoIT = [
//     { name: 'Vitali', age: 18 },
//     { name: 'Alisa', age: 19 },
//     { name: 'Khristina', age: 17 },
//     { name: 'Andrii', age: 20 },
//     { name: 'Roman', age: 21 },
//     { name: 'Oleh', age: 16 },
//     { name: 'Ira', age: 17 },
//   ]
  
//   const studentsNamesGoIt = getStudents(getNames, studentsGoIT)
//   // console.log(studentsNamesGoIt)
  
//   // Отфильтровать элементы массива, прощедшие проверку условия
  
//   function filterArray(arr, cb) {
//     const filteredArray = []
//     for (let i = 0; i < arr.length; i++) {
//       let elem = cb(arr[i])
//       if (elem) {
//         filteredArray.push(elem)
//       }
//     }
//     return filteredArray
//   }
//   // console.log(filterArray(array, filterByAge))
  
//   function filterByAge(obj) {
//     if (obj.age >= 18) return obj
//   }



//////////////////// 10 задача 4 модуля //////////////

// const service = {
//   mailingList: ['mango@mail.com', 'poly@hotmail.de', 'ajax@jmail.net'],
//   subscribe(email) {
//     this.mailingList.push(email);
//     return `Почта ${email} добавлена в рассылку.`;
//   },
//   unsubscribe(email) {
//     this.mailingList = this.mailingList.filter((e) => e !== email);
//     return `Почта ${email} удалена из рассылки.`;
//   },
// };
// function logAndInvokeAction(email, action) {
//   console.log(`Выполняем действие с ${email}.`);
//    return action(email);
// }
// const firstInvoke = logAndInvokeAction('kiwi@mail.uk', service.subscribe.bind(service));
// console.log(firstInvoke);
// console.log(service.mailingList);
// const secondInvoke = logAndInvokeAction('poly@hotmail.de', service.unsubscribe.bind(service));
// console.log(secondInvoke);
// console.log(service.mailingList); 

//////// 6 task 5 module ///////////////

// function Storage(items) {
// 	this.items = items;
// };
// Storage.prototype.getItems = function(items){
// 	return this.items;
// };
// Storage.prototype.addItem = function(newItem){
// 	this.items.push(newItem);
// };
// Storage.prototype.removeItem = function(item){
// 	this.items.splice(1, 1);
// };
// // Пиши код выше этой строки
// const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Антигравитатор']);
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
// storage.addItem('Дроид');
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
// storage.removeItem('Пролонгер');
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]


////// 7 task 5 module ///////////////

// function StringBuilder(baseValue) {
// 	this.value = baseValue; 
// };
// StringBuilder.prototype.getValue = function () {
// 	return this.value;
// };
// StringBuilder.prototype.padEnd = function (str) {
// 	this.value = this.value + `${str}`;
// };
// StringBuilder.prototype.padStart = function (str) {
// 	this.value = `${str}` + this.value;
// };
// StringBuilder.prototype.padBoth = function (str) {
// 	this.value = `${str}` + this.value + `${str}`;
// };

// // Пиши код выше этой строки
// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // '.'
// builder.padStart('^');
// console.log(builder.getValue()); // '^.'
// builder.padEnd('^');
// console.log(builder.getValue()); // '^.^'
// builder.padBoth('=');
// console.log(builder.getValue()); // '=^.^='

//////////// 12 task 5 module ///////////////

// class Storage {
//     #items;
//     constructor(items) {
//         this.#items = items;
//     }
//     getItems() {
//         return this.#items;
//     }
//     addItem(newItem) {
//         this.#items.push(newItem);
//     }
//     removeItem(item) {
//         const itemIndex = this.#items.indexOf(item);
//         this.#items.splice(itemIndex, 1);
//     }
// }
//     // Пиши код выше этой строки
//   const storage = new Storage(["Нанитоиды", "Пролонгер", "Антигравитатор"]);
//   console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
//   storage.addItem("Дроид");
//   console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
//   storage.removeItem("Пролонгер");
//   console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]
  

/////////////// 13 task 5 module //////////////

// class StringBuilder {
//     #value;
//     constructor(baseValue) {
//         this.#value = baseValue;
//     }
//     getValue() {
//         return this.#value;
//     }
//     padEnd(str) {
//         this.#value += str;
//     }
//     padStart(str) {
//         this.#value = str + this.#value;
//     }
//     padBoth(str) {
//         this.padStart(str);
//         this.padEnd(str);
//     }
// }
//     // Пиши код выше этой строки
//   const builder = new StringBuilder('.');
//   console.log(builder.getValue()); // '.'
//   builder.padStart('^');
//   console.log(builder.getValue()); // '^.'
//   builder.padEnd('^');
//   console.log(builder.getValue()); // '^.^'
//   builder.padBoth('=');
//   console.log(builder.getValue()); // '=^.^='


///////////////// 14 task 5 module /////////////

// class Car {
//     #model;
//     #price;
//     #brand;
  //     constructor({ brand, model, price }) {
//       this.#brand = brand;
//       this.#model = model;
//       this.#price = price;
//     }
  //     get brand() {
//       return this.#brand;
//     }
  //     set brand(newBrand) {
//       this.#brand = newBrand;
//     }
  //     get model() {
//       return this.#model;
//     }
  //     set model(newModel) {
//       this.#model = newModel;
//     }
  //     get price() {
//       return this.#price;
//     }
  //     set price(newPrice) {
//       this.#price = newPrice;
//     }
//   }
  

///////// 15 task 5 module /////////////

// class Car {
//     // Пиши код ниже этой строки
//     static MAX_PRICE = 50000;
//     #price;
//     constructor({ price }) {
//       this.#price = price;
//     }
//     get price() {
//       return this.#price;
//     }
//     set price(newPrice) {
//         if(Car.MAX_PRICE <= newPrice) {
//             return;
//         }
//         this.#price = newPrice;
//       }
//     // Пиши код выше этой строки
//   }
//   const audi = new Car({price: 35000});
//   console.log(audi.price); // 35000
  
//   audi.price = 49000;
//   console.log(audi.price); // 49000
  
//   audi.price = 51000;
//   console.log(audi.price); // 49000

//////////////////// 16 task 5 module //////////

// class Car {
//     static #MAX_PRICE = 50000;
//     // Пиши код ниже этой строки
//     static checkPrice(price) {
//         if(price > Car.#MAX_PRICE) {
//           return 'Внимание! Цена превышает допустимую.';
//       }
//           return 'Всё хорошо, цена в порядке.';
//     }
//     // Пиши код выше этой строки
//     constructor({ price }) {
//       this.price = price;
//     }
//   }
//   const audi = new Car({ price: 36000 });
//   const bmw = new Car({ price: 64000 });
//   console.log(Car.checkPrice(audi.price)); // Всё хорошо, цена в порядке.
//   console.log(Car.checkPrice(bmw.price)); // Внимание! Цена превышает допустимую.

/////////////17 task 5 module ///////////

// class User {
//     email;
//       constructor(email) {
//       this.email = email;
//     }
//       get email() {
//       return this.email;
//     }
//       set email(newEmail) {
//       this.email = newEmail;
//     }
//   }
//   // Пиши код ниже этой строки
//   class Admin extends User {
//       static AccessLevel = {
//           BASIC: "basic",
//           SUPERUSER: "superuser",
//       };
//   }


// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Пиши код ниже этой строки

//   totalPrice.forEach(function(orderedItems, calculateTotalPrice) {
//     totalPrice += orderedItems[i];
  
//   // Пиши код выше этой строки
  // return totalPrice;
// } 

function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;
  // Пиши код ниже этой строки

  totalPrice.forEach(function(orderedItems, totalPrice){
    totalPrice += orderedItems[i];
  });

  // Пиши код выше этой строки
  return totalPrice;
}