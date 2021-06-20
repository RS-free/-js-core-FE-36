// Нужно написать скрипт, который проверяет, являются ли 
// две строки анаграммами, причем регистр букв не имеет значения.
//  Учитываются лишь символы; пробелы или знаки препинания в расчет не 
//  берутся.


 const word1 = 'pillap';
 const word2 = 'lippal';
 let message = '';

 if (word1.length === word2.length) {
     let wordMiddle = word2;
     for (let i = 0; i < word1.length; i += 1) {
         const index = wordMiddle.indexOf(word1[i]);
         if (index !== -1) {
            wordMiddle = wordMiddle.slice(0, index) + wordMiddle.slice(index + 1);
           console.log(wordMiddle);
           if (i === word1.length - 1) {
               message = 'This is Anagram';
           }
         } else {
            message = 'Not Anagram';
            break;
         }
        console.log(word1[i]);
    } 
 } else {
     message = 'Not Anagram';
 }

 console.log(message);
 