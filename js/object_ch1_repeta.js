// const playlist = {
//     name: [1, 2, 3],
//     b: 5,
//     c:10,
// };

// console.log(playlist);

// const playlist = {
//     name: 'Мій супер трек',
//     rating: 5,
//     tracs: ['трек-1', 'трек-2', 'трек-3'],
//     trackCount: 3,
// };

// console.log(playlist);


//////////////// 3 рітерала //////////////

////// 1 //////
// const x = {};

// ////// 2 ////// 
// const fn = function (myObject) {
//     //myObject = {a: 1, b: 2}
//     console.log(myObject);
// };

// fn ({a: 1, b: 2});

// ////// 3 ///////
// const rtfm = function () {
//     return {a: 5};
// }

// console.log(rtfm());

const playlist = {
        name: 'Мій супер трек',
        rating: 5,
        tracks: ['трек-1', 'трек-2', 'трек-3'],
        trackCount: 3,
    };
    
    // console.log(playlist);
    // console.log(playlist.tracks);
    // console.log(playlist.name);
    // console.log(playlist.trackCount);
    

    const propertyName = 'tracks';

    // console.log(playlist.rating);
    // console.log(playlist['rating']);

    // console.log(playlist.propertyName);
    // console.log(playlist[propertyName]);


    //// короткий запис влвстивостей ///////
    const username = 'Mango';
    const email = 'mango@mail.com';

    const signupData = {
        username,
        email,
    }

    // console.log(signupData);


    //// вираховуємі властивості ///////
// <input name='color' value='tomato'>

const inputName = 'color';
const inputValue = 'tomato';

const colorPickerData = {
    // [inputName]: 5,
    [inputName]: inputValue,
}

// console.log(colorPickerData);

////// силочний тип {} === {} ///////////

const a = { x: 1, y: 2 };
const b = a;

// console.log(b === a);
// console.log({a:1} === {a:1});
// console.log([] === []);

////// масиви та функції це об'єкти /////

// const a = [1, 2, 3];
// a.hello = ':)';
// console.log(a);

const fn = function () {
    console.log('hello');
};

// fn.hello = ';)';
// console.dir(fn.hello);