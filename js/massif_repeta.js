// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
//  console.table(friends);

//  console.log(friends[3]);

// friends[1] = 'qwqwqwqw';
// friends[3] = 1212121212;
// console.table(friends);

//  const lastIndex = friends.length - 1;
//  console.log(lastIndex);

// let a = 10;
// let b = a;
// console.log(a);
// console.log(b);

// a=20;
// console.log(a);
// console.log(b);


// Передача по силці та по значенню
    // * - примітиви і важкі типи
    // * - силочна рівність (referential equality)

// const a = [1, 2, 3];
// const b = a;
// console.log('a', a);
// console.log('b', b);

// a[0] = 500;
// console.log('a', a);
// console.log('b', b);

// console.log(a === b);
// console.log([1, 2, 3] === [1, 2, 3]);

/*
* Перебір (ітерація) масиву
* - for - якщо потрібен індекс або потрібно змінити елемент масиву
* - for...of - якщо індекс не потрібен і в масиві нічого змінювати не потрібно
*/

//const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];

// console.log(friends[0]);
// console.log(friends[1]);
// console.log(friends[2]);
// console.log(friends[3]);

// console.table(friends);
// const lastIndex = friends.length - 1;

// for(let i=0; i <= lastIndex; i += 1){
//     // console.log(friends[i]);
//     friends[i] += '-1';
// } 

// console.table(friends);

// for (const friend of friends){
//     console.log(friend);
// }

/////////   ЗАДАЧІ ///////////

///////////// ЗАДАЧА 1 ////////////////
/* 
    * Порахувати загальну суму покупок в корзині
*/

// const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];

// 2 зробити переміну total до циклу
// let total = 0;

///////////////////// якщо робити через for //////////////////

// 1 перебрати масив
// for (let i = 0; i < cart.length; i += 1) {
//     // console.log(cart[i]);

// // 3 кожен елемент додати до total 
//     total += cart[i];
//     // total = total + cart[i];
// }
// console.log('Total:', total);


///////////////////// якщо робити через for....of  //////////////////

// for (const value of cart) {
//     total += value;
// }
// console.log('Total:', total);

/////// добавити відсотки ////////
///////////////////// якщо робити через for //////////////////

// for (let i = 0; i < cart.length; i += 1) {
//     cart[i] = Math.round(cart[i] * 1.1);
// }
// console.log(cart);


//////// ///////////////////// якщо робити через for....of  //////////////////

// for (let value of cart) {
//     value = Math.round(value * 1.1);
// }
// console.log(cart);


////////////////// ЗАДАЧА 2 /////////////////

/*
    *  Напиши скрипт, який підраховує суму всіх парних чисел в масиві
*/

const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11];

//1 переміна тотал
let total = 0;

// 2 перебрати масив 
// for(let i = 0; i < numbers.length; i +=1) {
//     const number = numbers[i]
    // console.log(number);

//   // 3 на кожній ітерації перевіряти елемент на парність
// if (number % 2 === 0){
//     console.log('ПАРНЕ');

//   // 4 якщо парне, то плюсуємо до тотал
//     total += number;
//   }
// }
// console.log('Total:', total);

//////// ///////////////////// якщо робити через for....of  //////////////////

// for (const number of numbers){
//     console.log(number);

//   // 3 на кожній ітерації перевіряти елемент на парність
//     if (number % 2 === 0){
//     console.log('ПАРНЕ');

//   // 4 якщо парне, то плюсуємо до тотал
//     total += number;
//   }
// }
// console.log('Total:', total);

/////////////// Застосоиуємо continue /////////////////

for (const number of numbers) {
    
    if (number % 2 !== 0) {
        console.log('Дану ітерацію потрібно пропустити', number);
        continue;
    }

    console.log(`${number} - ПАРНЕ`);
    total += number;
}
console.log('Total: ', total); 

/////// закінчив на 1 год. 13хв. 00сек. /////////