////// SPREAD - розпилювання

//// розпмлювання елементів масиву - Math.min(...arr)
const numbers = [1, 2, 3, 4, 5, 6, 7, 84]
console.log(Math.max(...numbers));
console.log(Math.min(...numbers));

//// створення нового масиву через розпилювання вихідного
const newNums = [...numbers]
console.log('newNums', newNums);
console.log(numbers === newNums);

///// +slice() || добавити любу к-ть ел.

const bestArray = [...numbers, 'Js', ...newNums.slice(-1)]
console.log(bestArray);

/// розпилення об'єкту {...obj1, ...obj2}

const user = { name: 'Bill' }
const newUser = { company: ['IBM']}

const superUser = {...user, gender: 'male', ...newUser }
console.log('superUser', superUser);

////REST - збір
let result = getTotalResult(23, 43, 52, 67, 89, 32)
console.log('result', result);
function getTotalResult(...scores) {
    console.log('scores', scores);

    let total = 0
    for(let i = 0; i < scores.length; i++ ) {
        console.log(scores[i]);
        total += scores[i]
    }
    return total
}