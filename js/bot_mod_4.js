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

// задача 11

// задача 12

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

// задача 18

// задача 19

// задача 20

// задача 21

// задача 22

// задача 23

// задача 24

// задача 25

// задача 26

// задача 27

// задача 28

// задача 29

// задача 30

// задача 31

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
