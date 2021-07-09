// №1
// Написати ф-ю яка приймає рік
// Повертає століття.


// const getCentury = function(year) {
//     const century = Math.floor(year / 100) + 1;
//     return century
// }
// console.log(getCentury(988));

// №2
// Запитуємо в користувача роки до тих пір поки він не натисне Cancel
// Всі роки які вводить користувач записується в масив years
// Коли зупинився цикл потрібно перебрати масив years
// і вивести в консоль запис 
// 1952 рік - 20 століття
// 1440 рік - 15 століття

// const writeYears = function() {
//     const years = [];
//     let input = '';
//     do {
//         input = prompt('Уведіть рік:');
//         if(input !== null){
//             years.push(input)
//         }
//     }
//      while (input !== null)
//      return years
// }
//     // console.log(writetYears());

//     const getString = function () {
//         const yearsArr = writeYears()
//         for (const year of yearsArr){
//             // console.log(year);
//             const century = getCentury(Number(year));
//             // console.log(century);
//             const message = `&{year} рік - &{century} століття`
//             console.log(message);
//         } 
//     }
//     getString()

// №3
// Написати ф-ю showYear що приймає рік і 
// перевіряє чи він є високосний
// Функція повертає true якщо рік
//  високосний і false якщо ні

// const showYear = function (year) {
//     if (years % 4 === 0) return true
//     return false;
// }

// const showYear = function (year) {
//     return year % 4 === 0 
// }
// console.log(showYear(2008));

// const showYear = (year) => year % 4 === 0 

// console.log(showYear(2008));

// const fn = (n) => n
// console.log(fn('wewew'));

// const fnA = (n) => { return n }
// console.log(fnA('wewew'));

// #4
// Напишите функцию f, которая будет 
// обёрткой вокруг другой функции g. 
// Функция f обрабатывает первый аргумент сама,
// а остальные аргументы передаёт в функцию g, 
// сколько бы их ни было.
// Например:
// function f() { /* ваш код */ }
// function g(a, b, c) {
//   alert( a + b + (c || 0) );
// }
// f("тест", 1, 2); // f выведет "тест", дальше g посчитает сумму "3"
// f("тест2", 1, 2, 3); // f выведет "тест2", дальше g посчитает сумму "6"
// Код функции f не должен зависеть от 
// количества аргументов.

// function f() {
//     const [firstEl, ...rest] = [...arguments];
//     console.log(rest);
//    g ( ...rest )
// }

// function g(a, b, c) {
//     alert(a + b + (c || 0) );
// }

// f("тест", 1, 2);
// f("тест2", 1, 2, 3);


// const f = (...args) => {
//     console.log(args);
//     const [firstEl, ...data] = args;
//     console.log(firstEl);
//     g ( ...data )
// }

// function g(a, b, c) {
//     alert(a + b + (c || 0) );
// }

// f("тест", 1, 2);
// f("тест2", 1, 2, 3);

// #5
// Напишите ф-цию которая принимает 
// массив чисел  и возвращает массив в котором 
// останутся только уникальные числа

// function getUniqNum(arr) {
//     const uniqArr = [];
//     for (const num of arr) {
        
//         if (!uniqArr.includes(num)) {
//             uniqArr.push(num)
//         } 
//     }
//     return uniqArr; 
// }
// const array = [1, 2, 3, 3, 4, 6, 5, 7, 4, 6, 2, 1];
// console.log(getUniqNum(array));


const arra = [4, 6, 7, 8, 9, 9, 10, 4];
function getUniqNum(arr) {
    const newArr = [];
    const notUniq = [];
    for (let i = 0; i < arr.length; i+=1) {
        if (!arr.includes(arr[i], i + 1 && !notUniq.includes(arr[i])) {
            newArr.push(arr[i]);
        }
     else {
        notUniq.push(arr[i]);
    }
         
        return uniqArr; 

    
