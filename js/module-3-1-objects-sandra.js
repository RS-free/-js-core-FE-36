const obj = {
    // props (key: value;)
    name: 'Sandra',
    lastName: 'Hrevtsova',
    age: 30,
}

/////// отримати значення властивості в об'єкті //////
console.log(obj);
console.log('lastName:', obj.lastName);
console.log('name:', obj.name);
console.log('age:', obj.age);

console.log(obj['name']);
console.log(obj['lastName']);
console.log(obj['age']);

////// отримати зміни  властивості об'єкту ////
obj.age = 31
console.log(obj.age);

console.log(obj);

//// такої властивості покищо немає - чурез це undefined
console.log(obj.skills);

///// добавимо /////
obj.skills = []
console.log(obj.skills);
console.log(obj);

//// добавимо значення у властивість
obj.skills = ['HTML', 'CSS', 'JS']
console.log(obj.skills);
console.log(obj);

// видалити непотрібну властивість в об'єкті
delete obj.age
console.log(obj.age);

//// short props
let pet = 'cat'
const newObj = { pet };
console.log(newObj);

//// вираховуємі об'єкти

let key1 = 'name';
let key2 = 'lastName';
let key3 = 'skills'

// console.log('key1:', obj[key1]);
// console.log('key2:', obj[key2]);
// console.log('key3:', obj[key3]);

console.log(obj) 
/// for in
for (let key in obj) {
    console.log('key', key);
    console.log('value', obj[key]);
}
const object = {};
for (let key in object) {
    console.log('key', key);
}

console.dir(Object);

const newObject = Object.create(obj)
console.log(newObject);
newObject.pet = 'kitten'

//////obj.hasOwnProperty
console.log('pet', newObject.hasOwnProperty('pet'));
console.log('pet', newObject.hasOwnProperty('skills'));

for (let key in newObject) {
    if(newObject.hasOwnProperty(key))
    console.log('newObject key:', key);
}

//// Object.keys() - масив ключів
//// Object.values() - масив значень
//// Object.entries() - багатомірний масив у вигляді
//// [[key1, value1], [key2, value2], [key3, value3]]

const objKeys = Object.keys(obj)
console.log('objKeys', objKeys);

const objValues = Object.values(obj)
console.log('objValues', objValues);

const obj = Object.keys(obj)
console.log('objKeys', objKeys);

/// & - methods
/// this

const user = {
    name: 'Super User',

    /// ES6 method
    changeName() {
        console.log('userName before', this.userName)
        this.userName = value
        console.log('userName after', this.userName);

    }
}
user.changeName('Sandra')
// console.log(user.userName);

const { userName, changeName } = user
console.log(userName);
changeName('Bill')