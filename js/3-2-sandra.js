// const obj = {
//     a: 1,
//     b: 2,
//     c: 3,
// }

// // console.log(Object.keys(obj));

// const newObj = Object.create(obj)
// // console.log(newObj);

// // console.log(Object.keys(newObj));

// ////////// TASK 1 //////////
// ///// створити об'єкт товару з властивостями 
// ///// name, price, quontity та методами, які 
// ///// показують їх поточне значення і методи
// ////// що змінюють їхні значення. 

// const product = {
//     /// PROPERTIES
//     name: '',
//     price: 0,
//     quantity: 0,

//     /// METHODS
//     showName(){
//         console.log('this.name:', this.name);
//     },
//     changeName(value){
//         this.name = value
//     },

//     showPrice(){
//         console.log('this.price:', this.price);
//     },
//     changePrice(){
//         // this.price = newPrice
//     },

//     showQuantity(){
//         console.log('this.quantity:', this.quantity);
//     },
//     changeQuantity(){
//         // this.quantity = count
//     },
// }
// // console.log(product);

// // product.showName()
// // product.changeName('Pear')
// // product.showName()

// product.changePrice(55)
// // product.showPrice()

// product.changeQuantity(3)
// // product.showQuantity()


// /////// TASK 2
// /// добав до об'єкту 


// product.getTotalPrice = function (){
//     return this.price * this.quantity

// }

// // console.log(product.getTotalPrice());


// /////// TASK 3


// const products = [
//     {name: 'Grape', price: 80, quantity: 2},
//     {name: 'Banana', price: 30, quantity: 5},
//     {name: 'Kiwi', price: 100, quantity: 1.5},
// ]

// let total





// function createObject() {
//     // console.log(arguments);
//     const [name, age, skills] = arguments
//     const obj = {name, age, skills}
//     return obj
// }

// const createObject1 = function () {
//     const [name, age, skills] = arguments
//     return {name, age, skills}
// }

// const createObject2 = (...params) => {
//     console.log(params);
//     const obj = {}
//     for (let i = 0; i < params.length; i++) {
//         obj[`key-${i+1}`]
//     } return obj
// }

// console.log(createObject2('dog', 30, ['HTML', 'CSS', 'Js'], {friends:` `}));


// const forecast = {
//     today: {
//       low: 28,
//       high: 32,
//       icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
//     },
//     tomorrow: {
//       low: 27,
//       high: 31,
//     },
//   };
//   // Change code below this line
//    const { 
//        today: {low: lowToday, high: highToday, icon: todayIcon = 
//         "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg"}, 
//        tomorrow:{low: lowTomorrow, high: highTomorrow, icon: tomorrowIcon = 
//         "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"}
//     } = forecast;

//   const highToday = forecast.today.high;
//   const lowToday = forecast.today.low;
//   const todayIcon = forecast.today.icon;

//   const highTomorrow = forecast.tomorrow.high;
//   const lowTomorrow = forecast.tomorrow.low;
//   const tomorrowIcon = forecast.tomorrow.icon;


// Change code below this line
// function calculateMeanTemperature(forecast) {

//     const { 
//         today: {low: todayLow, high: todayHigh}, 
//         tomorrow:{low: tomorrowLow, high: tomorrowHigh}
//      } = forecast;

//    // Change code above this line
//    return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
//  }
//  console.log(calculateMeanTemperature);


// function findMatches([...args], ...otherArgs) {
//   const matches = [];
//   for (const arg of otherArgs) {
//     for (const arg of args) {
//       if (otherArgs === args) {
//         matches += arg;
//       }
//     }
//   }
//   return matches;
// }