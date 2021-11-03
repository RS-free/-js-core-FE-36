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

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11];

//1 переміна тотал
// let total = 0;

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

// for (const number of numbers) {
    
//     if (number % 2 !== 0) {
//         console.log('Дану ітерацію потрібно пропустити', number);
//         continue;
//     }

//     console.log(`${number} - ПАРНЕ`);
//     total += number;
// }
// console.log('Total: ', total); 

/////// ЗАДАЧА 3 /////////

/*
  * НАПИШИ СКРИПТ пошуку логіну
  *  - Якщо логіну немає, то введи повідомлення 'Користувач (логін) не знайдено.'
  *  - Якщо знайшли логін, то введіть повідомлення 'Користувач (логін) знайдений.'
  * 
  * - Спочатку через for
  * - Потім через for...of
  * - Логіка break
  * - Метод includes() з тернарним оператором
  * */

// const logins = ['m4ngoDoge', 'kiwidab3st', 'polyIscute', 'aj4xth3m4n'];
// const loginToFind = 'polyIscute';
// let message = `Користувача ${loginToFind} не знайдено`;

// for (let i = 0; i < logins.length; i += 1) {
//     const login = logins[i];

//     console.log('Login:', login);
//     console.log(`${login} === ${loginToFind}:`, login === loginToFind);

//     if (login === loginToFind) {
//         message = `Користувача ${loginToFind} знайдено.`;
//         break;
//     }   
// }

// console.log(message);

///////////////// for...of //////////////////

// for (const login of logins) {
//     console.log('Login:', login);
//     console.log(`${login} === ${loginToFind}: `, login === loginToFind);
//     if (login === loginToFind) {
//         console.log('Ура, рівні');
//         message = `Користувача ${loginToFind} знайдено.`;
//         break;
//     }
// }

// console.log(message);

///////// includes /////////

//  console.log(logins.includes(loginToFind));

//  const message = logins.includes(loginToFind) ? `Користувача ${loginToFind} знайдено.` :`Користувача ${loginToFind} знайдено`;

//  console.log(message);


/////////////////////////// ЗАДАЧА 4 ////////////////////////

/*
    * Напиши скрипт пошуку самого маленького числа в масиві, 
    * при умові, що числа унікальні (не повторюються).
*/

// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let smallestNumber = numbers[0];

// for (const number of numbers) {
//     console.log(number);

//     if (number < smallestNumber) {
//         smallestNumber = number;
//     }
// }

// console.log('smallestNumber: ', smallestNumber );  

/////////////// ЗАДАЧА 5 ////////////////

/*
  * Напиши скрипт, який об'єднує всі елементи масиву 
в однострокове значення 
  * Елементів може бути будь-яка кількість.
  * Нехай елементи масиву в строці будуть розділені комою.
  * - Спочатку через for
  * - Потім через join()
*/

// const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
// let string = '';

// for (const friend of friends) {
//     string += friend + ',';
// }
// string = string.slice(0, string.length - 1);
// console.log(string);


// const string = friends.join(', ');
// console.log(friends);
// console.log(string);
// Повино получитися 'Mango, Poly, Kiwi, Ajax'

/////////////// ЗАДАЧА 6 ////////////////

/*
    * Напиши скрипт, який заміняє регістр кожного символу
    в строкі на протилежний.
    * Наприклад, якщо строка "JavaScript", то на виході 
    повина бути строка "jAVAsCRIPT".
*/

// const string = 'JavaScript';
// const letters = string.split('');
// let invertedString = '';

// console.log(letters);

// for (const letter of letters) {
//     console.log(letter);

//     if (letter === letter.toLowerCase()) {
//         console.log('Ця буква в нижньому регістрі!!! - ', letter);
    
//         invertedString += letter.toUpperCase();
//     } else {
//         console.log('Ця буква у верхньому регістрі!!! - ', letter);
//         invertedString += letter.toLowerCase();
//     }
// }

// console.log(invertedString);

//////////////// тернарник ////////////////

// for (const letter of letters) {
//     console.log(letter);

//     invertedString += letter === letter.toLowerCase() ? letter.toUpperCase() : letter.toLowerCase();    
// }

// console.log('invertedString: ', invertedString); 

/////////////// ЗАДАЧА 7 ////////////////

/*
    * Робимо slug в URL із назви статі (наприклад dev.to)
    * Заголовок статі складається лише із букв та пробілів
    * 
    * - Нормалізуємо строку
    * - Розбиваємо по словам 
    * - Зшиваємо в строку з розділювачем 
*/

// Повино получитися top-10-benefits-of-react-framework

// const title = 'Top 10 benefits of React framework';

// const normalizedTitle = title.toLowerCase();
// console.log(normalizedTitle);

// const words = normalizedTitle.split(' ');
// console.log(words);

// const slug = words.join('-');
// console.log(slug);

/////////// декларативний код (абстракція) /////////////

// const slug1 = title.toLowerCase().split(' ').join('-');
// console.log(slug1);


/////////////// ЗАДАЧА 8 ////////////////

/*
    * Напиши скрип, який рахує суму елементів двох масивів
*/

// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];
// let total = 0;

// const numbers = array1.concat(array2) ;

// for (const number of numbers) {
//     total += number;
// }

// console.log(total);


/* 
     * задачі з Гері
*/

// const genres = ['Jazz', 'Blues'];
// genres.push('Рок-н-рол');

// console.log(genres[0]);
// console.log(genres[genres.length - 1]);
// console.log(genres.shift());
// genres.unshift('Country', 'Reggae');
// console.log(genres);

// задача 2 ///

// const values = '8 11';
// const strArr = values.split(' ');
// console.log(strArr);

// const a = parseFloat(strArr[0]);
// const b = parseFloat(strArr[1]);
// const s = a * b;
// console.log('S:', s);


// задача 3 ///

// const string = 'Welcome to the future';
// const strArr = string.split(' ');
// strArr.pop();
// strArr.shift();

// const result = strArr.join(' ');
// console.log(result);
// console.log(`'${result}'`);

/// задача 4 ///

// const string = 'Welcome to the future';
// const strArr = string.split('');
// strArr.reverse();

// const result = strArr.join('');
// console.log(result);

/// теж саме, але через for ... of

// const string = 'Welcome to the future';
// const strArr = string.split('');
// let result = '';
// for (let i = strArr.length - 1; i >= 0; i -= 1) {
//     result += strArr[i];
// }
// console.log(result);

/// або ///

// const string = 'Welcome to the future';
// const strArr = string.split('');
// console.log(string.split('').reverse().join(''));

/// ЗАДАЧА 5 ....

// const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];
// // langs.sort();

// for (let i = 0; i < langs.length; i += 1) {
//     for (let j = i + 1; j < langs.length; j += 1) {
//         if (langs[i][0] > langs[j][0]) {
//             const tmp = langs[i];
//             langs[i] = langs[j];
//             langs[j] = tmp;
//         }
//     }
// }
// console.log(langs);

/// задача 6 .... 
//напиши скрипт пошуку найменшого числа в масиві.
//Код повинен працювати для будь-якого масиву чиселю
//Використовуй цикл для вирішення задачі.

// const numbers = [2, 17, 94, 1, 23, 37];
// let min = numbers[0];
// let max = numbers[0];

// for (const number of numbers) {
//     if (number < min) {
//         min = number;
//     }
//     if (number > max) {
//         max = number;
//     }
// }

// console.log(min);
// console.log(max);

// const planets = ["Earth", "Mars", "Venus", "Jupiter", "Saturn"];

// console.log(planets.slice(0, 2)); // ['Earth', 'Mars']
// console.log(planets.slice(0, 4)); // ['Earth', 'Mars', 'Venus', 'Jupiter']
// console.log(planets.slice(1, 3)); // ['Mars', 'Venus']
// console.log(planets.slice(-2)); // ['Jupiter', 'Saturn']
// console.log(planets.slice()); // ['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn']


/// задача 41 3 модулю
const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    if (this.potions.includes(newPotion)) {
      return `Error! Potion ${newPotion} is already in your inventory!`;
    }
    this.potions.push(newPotion);
  },
  removePotion(potionName) {
    const { potions } = this;
    for(const potion of potions) {
      if(potion.name === potionName) {
        potions.splice(potions.indexOf(potion), 1);
        return potion;
      }
    }
    return `Potion ${potionName} is not in inventory!`;
  },
  updatePotionName(oldName, newName) {
    const { potions } = this;
    for(const potion of potions) {
      if(potion.name === oldName) {
        return potion.name = newName;
      }
    }
    return `Potion ${oldName} is not in inventory!`;
  },
  // Change code above this line
};



