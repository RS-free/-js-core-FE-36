// Дано произвольное целое число n. Написать программу, которая
// разбивает число n на цифры и выводит их на экран;
// подсчитывает сколько цифр в числе n;
// находит сумму цифр числа n;
// меняет порядок цифр числа n на обратный.
// Пример: ввожу число 123
// цифр в числе = 3
// сумма = 6(это значение получили следующим образом 1+2+3)
// обратный порядок = 321
// */


const n = 79825;

const nStr = n.toString();
console.log(nStr, typeof nStr);
let total = 0;
let reversStr = '';

for (let i = 0; i < nStr.length; i += 1){
    console.log(nStr[i]);
    total += Number(nStr[i]);
    reversStr += nStr[(nStr.length - 1) - i]
    console.log(- 1 - i);
}

const nStrLength = nStr.length;
console.log(nStrLength, typeof nStrLength);
console.log(total);