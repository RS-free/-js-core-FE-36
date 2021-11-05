// задача 1
// Присвой переменной apartment объект описывающий квартиру со следующими характеристиками:

// imgUrl - фотография, значение "https://via.placeholder.com/640x480";
// descr - описание, значение "Spacious apartment in the city center";
// rating - рейтинг, значение 4;
// price - цена, значение 2153;
// tags - метаинформация, массив ["premium", "promoted", "top"].

const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
};
console.log(apartment);

// задача 2
// Дополни объект квартиры свойством owner, значением которого будет объект с информацией о владельце.
// Добавь ему следующие свойства:
// name - имя владельца, значение "Henry";
// phone - телефон, значение "982-126-1588";
// email - почта, значение "henry.carter@aptmail.com".

const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],

  owner: {
    name: "Henry",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};

// задача 3
// Дополни код присвоив объявленным переменным выражения обращения
// к соответствующим свойствам обьекта apartment.

// aptRating - рейтинг;
// aptDescr - описание;
// aptPrice - цена;
// aptTags - теги.

const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
};

const aptRating = apartment.rating;
const aptDescr = apartment.descr;
const aptPrice = apartment.price;
const aptTags = apartment.tags;

// задача 4

const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
  owner: {
    name: "Henry",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};
// Change code below this line
const ownerName = apartment.owner.name;
const ownerPhone = apartment.owner.phone;
const ownerEmail = apartment.owner.email;
const numberOfTags = apartment.tags.length;
const firstTag = apartment.tags[0];
const lastTag = apartment.tags[2];
// Change code above this line

// задача 5

const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
};

// Change code below this line
const aptRating = apartment["rating"];
const aptDescr = apartment["descr"];
const aptPrice = apartment["price"];
const aptTags = apartment["tags"];
// Change code above this line

// задача 6

const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
  owner: {
    name: "Henry",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};

apartment.price = 5000;
apartment.rating = 4.7;
apartment.owner.name = "Henry Sibola";
apartment.tags.push("trusted");

// задача 7
const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4.7,
  price: 5000,
  tags: ["premium", "promoted", "top", "trusted"],
  owner: {
    name: "Henry Sibola",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};

apartment.area = 60;
apartment.rooms = 3;
apartment.location = {
  country: "Jamaica",
  city: "Kingston",
};

// задача 8
const name = "Repair Droid";
const price = 2500;
const image = "https://via.placeholder.com/640x480";
const tags = ["on sale", "trending", "best buy"];

const product = {
  name,
  price,
  image,
  tags,
};

// задача 9

const emailInputName = "email";
const passwordInputName = "password";

const credentials = {
  [emailInputName]: "henry.carter@aptmail.com",
  [passwordInputName]: "jqueryismyjam",
};

// задача 10

const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
for (const key in apartment) {
  console.log(key);
  console.log(apartment[key]);
}
const keys = ["descr", "rating", "price"];
const values = ["Spacious apartment in the city center", 4, 2153];

// задача 11

const keys = [];
const values = [];
const advert = {
  service: "apt",
};
const apartment = Object.create(advert);
apartment.descr = "Spacious apartment in the city center";
apartment.rating = 4;
apartment.price = 2153;

for (const key in apartment) {
  if (apartment.hasOwnProperty(key)) {
    keys.push(key);
    values.push(apartment[key]);
  }
}

// задача 12

function countProps(object) {
  let propCount = 0;
  for (const key in object)
    if (object.hasOwnProperty(key)) {
      propCount += 1;
    }
  return propCount;
}

// задача 13

const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const values = [];
for (const key of Object.keys(apartment)) {
  values.push(apartment[key]);
}
const keys = Object.keys(apartment);

// задача 14

function countProps(object) {
  let propCount = 0;
  let keys = Object.keys(object);
  for (let key of keys) {
    propCount += 1;
  }
  return propCount;
}

// задача 15

const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};

const keys = Object.keys(apartment);
const values = Object.values(apartment);

// задача 16

// Напиши функцию countTotalSalary(salaries) которая принимает объект зарплат,
// где имя свойства это имя сотрудника, а значение свойства это зарплата.
// Функция должна рассчитать общую сумму зарплат сотрудников и вернуть её.
// Используй переменную totalSalary для хранения общей суммы зарплаты.

function countTotalSalary(salaries) {
  let totalSalary = 0;
  const values = Object.values(salaries);
  for (const value of values) {
    totalSalary += value;
  }
  return totalSalary;
}

// задача 17

const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];

const hexColors = [];
const rgbColors = ["244,67,54", "33,150,243", "76,175,80", "255,235,59"];
for (const color of colors) {
  hexColors.push(color.hex);
}

// задача 18

// Напиши функцию getProductPrice(productName) которая принимает один параметр
// productName - название продукта.
// Функция ищет объект продукта с таким именем(свойство name) в массиве
// products и возвращает его цену(свойство price).
// Если продукт с таким названием не найден, функция должна возвращать null.

const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
  for (const key of products) {
    if (key.name === productName) {
      return key.price;
    }
  }
  return null;
}

// задача 19

// Напиши функцию getAllPropValues(propName) которая принимает один параметр
// propName - имя(ключ) свойства.Функция должна вернуть массив всех значений
// свойства с таким именем из каждого объекта в массиве products.
// Если в объектах нет свойства с таким именем, функция должна вернуть пустой массив.

const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
  const value = [];
  for (const product of products) {
    value.push(product[propName]);
    if (!product[propName]) {
      return [];
    }
  }
  return value;
}

// задача 20

// Напиши функцию calculateTotalPrice(productName) которая принимает один параметр productName -
// название товара.Функция должна вернуть общую стоимость(цена * количество) товара с
// таким именем из массива products.

const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function calculateTotalPrice(productName) {
  let totalPrice = 0;
  for (const product of products) {
    if (product.name === productName) {
      totalPrice = product.price * product.quantity;
    }
  }
  return totalPrice;
}

// задача 21

const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
const { yesterday, today, tomorrow } = highTemperatures;
const meanTemperature = (yesterday + today + tomorrow) / 3;

// задача 22

const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
const {
  yesterday,
  today,
  tomorrow,
  icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
} = highTemperatures;
const meanTemperature = (yesterday + today + tomorrow) / 3;

// задача 23

const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
const {
  yesterday: highYesterday,
  today: highToday,
  tomorrow: highTomorrow,
  icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
} = highTemperatures;
const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

// задача 24

const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];

const hexColors = ["#f44336", "#2196f3", "#4caf50", "#ffeb3b"];
const rgbColors = ["244,67,54", "33,150,243", "76,175,80", "255,235,59"];
for (const { hexColors, rgbColors } of colors) {
}

// задача 25

const forecast = {
  today: {
    low: 28,
    high: 32,
    icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
  },
  tomorrow: {
    low: 27,
    high: 31,
  },
};
const {
  today: {
    low: lowToday,
    high: highToday,
    icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
  },
  tomorrow: {
    low: lowTomorrow,
    high: highTomorrow,
    icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
  },
} = forecast;

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
