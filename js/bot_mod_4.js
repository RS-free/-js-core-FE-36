// задача 1

function makePizza() {
  return "Your pizza is being prepared, please wait.";
}
const result = makePizza();
const pointer = makePizza;

// задача 2

function deliverPizza(pizzaName) {
  return `Delivering ${pizzaName} pizza.`;
}

function makePizza(pizzaName) {
  return `Pizza ${pizzaName} is being prepared, please wait...`;
}

function makeMessage(pizzaName, callback) {
  return callback(pizzaName);
}

// задача 3

function makePizza(pizzaName, callback) {
  console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
  callback(pizzaName);
}

makePizza("Royal Grand", function deliverPizza(pizzaName) {
  console.log(`Delivering pizza ${pizzaName}.`);
});
makePizza("Ultracheese", function eatPizza(pizzaName) {
  console.log(`Eating pizza ${pizzaName}`);
});

// задача 4
// Необходимо написать логику обработки заказа пиццы.Выполни рефакторинг метода order так,
// чтобы он принимал вторым и третим параметрами два колбэка onSuccess и onError.
// Если в свойстве pizzas нет пиццы с названием из параметра pizzaName, метод order должен
// возвращать результат вызова колбэка onError, передавая ему аргументом строку
// "There is no pizza with a name <имя пиццы> in the assortment."
// Если в свойстве pizzas есть пицца с названием из параметра pizzaName, метод order
// должен возвращать результат вызова колбэка onSuccess, передавая ему аргументом имя заказанной пиццы.

const pizzaPalace = {
  pizzas: ["Ultracheese", "Smoked", "Four meats"],
  order(pizzaName, onSuccess, onError) {
    for (const pizza of this.pizzas) {
      if (pizza === pizzaName) {
        return onSuccess(pizzaName);
      }
    }
    return onError(
      `There is no pizza with a name ${pizzaName} in the assortment.`
    );
  },
};
function makePizza(pizzaName) {
  return `Your order is accepted. Cooking pizza ${pizzaName}.`;
}
// Callback for onError
function onOrderError(error) {
  return `Error! ${error}`;
}
// Method calls with callbacks
pizzaPalace.order("Smoked", makePizza, onOrderError);
pizzaPalace.order("Four meats", makePizza, onOrderError);
pizzaPalace.order("Big Mike", makePizza, onOrderError);
pizzaPalace.order("Vienna", makePizza, onOrderError);

// задача 5
// Функция calculateTotalPrice(orderedItems) принимает один параметр orderedItems - массив чисел, и рассчитывает общую сумму его
// элементов, которая сохраняется в переменной totalPrice и возвращается как результат работы функции.

function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;
  orderedItems.forEach((iteam) => {
    totalPrice += iteam;
  });
  return totalPrice;
}

// задача 6
// Функция filterArray(numbers, value) принимает массив чисел numbers и возвращает новый массив,
// в котором будут только те элементы оригинального массива, которые больше чем значение параметра value.

function filterArray(numbers, value) {
  const filteredNumbers = [];

  numbers.forEach((item) => {
    if (item > value) {
      filteredNumbers.push(item);
    }
  });
  return filteredNumbers;
}

// задача 7
// Функция getCommonElements(firstArray, secondArray) принимает два массива произвольной длины в
// параметры firstArray и secondArray, и возвращает новый массив их общих элементов,
// то есть тех которые есть в обоих массивах.

function getCommonElements(firstArray, secondArray) {
  const commonElements = [];

  firstArray.forEach((item) => {
    if (secondArray.includes(item)) {
      commonElements.push(item);
    }
  });

  return commonElements;
}

// задача 8

const calculateTotalPrice = (quantity, pricePerItem) => {
  return quantity * pricePerItem;
};

// задача 9

const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;

// задача 10
// Выполни рефакторинг функции calculateTotalPrice(orderedItems) заменив её объявление на стрелочную
// функцию. Замени коллбек - функцию передаваемую в метод forEach() на стрелочную функцию.

const calculateTotalPrice = (orderedItems) => {
  let totalPrice = 0;

  orderedItems.forEach((item) => {
    totalPrice += item;
  });

  return totalPrice;
};

// задача 11

const filterArray = (numbers, value) => {
  const filteredNumbers = [];

  numbers.forEach((number) => {
    if (number > value) {
      filteredNumbers.push(number);
    }
  });
  return filteredNumbers;
};

// задача 12

const getCommonElements = (firstArray, secondArray) => {
  const commonElements = [];

  firstArray.forEach((element) => {
    if (secondArray.includes(element)) {
      commonElements.push(element);
    }
  });
  return commonElements;
};

// задача 13
// Функция changeEven(numbers, value) принимает массив чисел numbers и обновляет каждый элемент,
// значение которого это чётное число, добавляя к нему значение параметра value.

function changeEven(numbers, value) {
  let newArray = [];
  numbers.forEach((number) => {
    number % 2 === 0 ? newArray.push(number + value) : newArray.push(number);
  });
  return newArray;
}

// задача 14
// Дополни код так, чтобы в переменной planetsLengths получился массив длин названий планет.
// Обязательно используй метод map().

const planets = ["Earth", "Mars", "Venus", "Jupiter"];
const planetsLengths = planets.map((planet) => planet.length);

// задача 15
// Используя метод map() сделай так, чтобы в переменной titles получился массив названий книг
// (свойство title) из всех объектов массива books.

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
];
// Change code below this line

const titles = books.map((book) => book.title);

// задача 16
// Используя метод flatMap() сделай так, чтобы в переменной genres получился массив
// всех жанров книг(свойство genres) из массива книг books.

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["adventure", "history"],
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    genres: ["fiction"],
  },
  {
    title: "Redder Than Blood",
    author: "Tanith Lee",
    genres: ["horror", "mysticism"],
  },
];

const genres = books.flatMap((book) => book.genres);

// задача 17

const getUserNames = (users) => {
  const names = users.map((user) => user.name);
  return names;
};

// задача 18

const getUserEmails = (users) => {
  const emails = users.map((user) => user.email);
  return emails;
};

// задача 19
// Дополни код так, чтобы в переменной evenNumbers получился массив чётных чисел из массива numbers,
// а в переменной oddNumbers массив нечётных.Обязательно используй метод filter().

const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
const evenNumbers = numbers.filter((number) => number % 2 === 0);
const oddNumbers = numbers.filter((number) => number % 2 === 1);

// задача 20
// Дополни код так, чтобы в переменной allGenres был массив всех жанров книг(свойство genres)
// из массива books, а в переменной uniqueGenres массив уникальных жанров - без повторений.

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["adventure", "history"],
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    genres: ["fiction", "mysticism"],
  },
  {
    title: "Redder Than Blood",
    author: "Tanith Lee",
    genres: ["horror", "mysticism", "adventure"],
  },
];

const allGenres = books.flatMap((book) => book.genres);
const uniqueGenres = allGenres.filter(
  (genres, index, array) => array.indexOf(genres) === index
);

// задача 21
// Используя метод filter() дополни код так, чтобы:
// В переменной topRatedBooks получился массив книг рейтинг
// которых(свойство rating) больше либо равно значению переменной MIN_RATING.
// В переменной booksByAuthor получился массив книг написанных автором с именем
// (свойство author) которое совпадает со значением в переменной AUTHOR.

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
];

const MIN_RATING = 8;
const AUTHOR = "Bernard Cornwell";

const topRatedBooks = books.filter((book) => book.rating >= MIN_RATING);
const booksByAuthor = books.filter((book) => book.author === AUTHOR);

// задача 22
// Дополни функцию getUsersWithEyeColor(users, color) так, чтобы она возвращала
// массив пользователей у которых цвет глаз(свойство eyeColor) совпадает со значением параметра color.

const getUsersWithEyeColor = (users, color) => {
  const eyeColor = users.filter((user) => user.eyeColor === color);
  return eyeColor;
};

// задача 23
// Дополни функцию getUsersWithAge(users, minAge, maxAge) так, чтобы она возвращала массив пользователей,
// возраст которых (свойство age) попадает в промежуток от minAge до maxAge.

const getUsersWithAge = (users, minAge, maxAge) => {
  const age = users.filter((user) => user.age >= minAge && user.age <= maxAge);
  return age;
};

// задача 24
// Дополни функцию getUsersWithFriend(users, friendName) так, чтобы она возвращала массив пользователей
// у которых есть друг с именем в параметре friendName.Массив друзей пользователя хранится в свойстве friends.

const getUsersWithFriend = (users, friendName) =>
  users.filter((user) => user.friends.includes(friendName));

// задача 25
// Дополни функцию getFriends(users) так, чтобы она возвращала массив друзей всех пользователей
// (свойство friends).У нескольких пользователей могут быть одинаковые друзья, сделай так чтобы
// возвращаемый массив не содержал повторений.

const getFriends = (users) => {
  const myFriends = users.flatMap((user) => user.friends);
  const bestFriends = myFriends.filter(
    (friends, index, array) => array.indexOf(friends) === index
  );
  return bestFriends;
};

// задача 26
// Дополни функцию getActiveUsers(users) так, чтобы она возвращала массив активных пользователей,
// значение свойства isActive которых true.

const getActiveUsers = (users) => {
  const isActive = users.filter((user) => user.isActive === true);
  return isActive;
};

// задача 27
// Дополни функцию getInactiveUsers(users) так, чтобы она возвращала массив неактивных пользователей,
// значение свойства isActive которых false.

const getInactiveUsers = (users) => {
  const isActive = users.filter((user) => user.isActive !== true);
  return isActive;
};

// задача 28
// Используя метод find() дополни код так, чтобы:
// В переменной bookWithTitle получился объект книги название которой(свойство title)
// совпадает со значением переменной BOOK_TITLE.
// В переменной bookByAuthor получился объект книги автор который(свойство author)
// совпадает со значением переменной AUTHOR.

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
];
const BOOK_TITLE = "The Dream of a Ridiculous Man";
const AUTHOR = "Robert Sheckley";

const bookWithTitle = books.find((title) => title.title === BOOK_TITLE);
const bookByAuthor = books.find((author) => author.author === AUTHOR);

// задача 29
// Дополни функцию getUserWithEmail(users, email) так, чтобы она возвращала объект пользователя,
// почта которого(свойство email) совпадает со значением параметра email.

const getUserWithEmail = (users, email) => {
  const thisEmail = users.find((user) => user.email === email);
  return thisEmail;
};

// задача 30
// Используя метод every() дополни код так, чтобы:
// В переменной eachElementInFirstIsEven был результат проверки всех элементов массива firstArray на чётность.
// В переменной eachElementInFirstIsOdd был результат проверки всех элементов массива firstArray на нечётность.
// В переменной eachElementInSecondIsEven был результат проверки всех элементов массива secondArray на чётность.
// В переменной eachElementInSecondIsOdd был результат проверки всех элементов массива secondArray на нечётность.
// В переменной eachElementInThirdIsEven был результат проверки всех элементов массива thirdArray на чётность.
// В переменной eachElementInThirdIsOdd был результат проверки всех элементов массива thirdArray на нечётность.

const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];

const eachElementInFirstIsEven = firstArray.every((value) => value % 2 === 0);
const eachElementInFirstIsOdd = firstArray.every((value) => value % 2 === 1);

const eachElementInSecondIsEven = secondArray.every((value) => value % 2 === 0);
const eachElementInSecondIsOdd = secondArray.every((value) => value % 2 === 1);

const eachElementInThirdIsEven = thirdArray.every((value) => value % 2 === 0);
const eachElementInThirdIsOdd = thirdArray.every((value) => value % 2 === 1);

// задача 31
// Дополни функцию isEveryUserActive(users) так, чтобы она проверяла все ли пользователи сейчас
// активны(свойство isActive) и возвращала true или false.

const isEveryUserActive = (users) => {
  const isActive = users.every((user) => user.isActive);
  return isActive;
};

// задача 32

// задача 33

// задача 34

// задача 35

// задача 36

// задача 37

// задача 38

// задача 39

// задача 40

// задача 41

// задача 42

// задача 43

// задача 44

// задача 45

// задача 46

// задача 47

// задача 48
