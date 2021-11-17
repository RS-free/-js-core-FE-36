// задача 1
// Выполни рефакторинг методов объекта pizzaPalace, расставив отсутствующие this
// в местах обращения к свойствам и методам объекта.

const pizzaPalace = {
  pizzas: ["Supercheese", "Smoked", "Four meats"],
  checkPizza(pizzaName) {
    return this.pizzas.includes(pizzaName);
  },
  order(pizzaName) {
    const isPizzaAvailable = this.checkPizza(pizzaName);
    if (!isPizzaAvailable) {
      return `Sorry, there is no pizza named «${pizzaName}»`;
    }
    return `Order accepted, preparing «${pizzaName}» pizza`;
  },
};

// задача 2
// Перед увольнением разработчик сломал исходный код управления аккаунтами пользователей нашего сервиса доставки еды.
// Выполни рефакторинг методов объекта customer, расставив отсутствующие this при обращении к свойствам объекта.
// После объявления объекта мы добавили вызовы методов в той последовательности, в которой твой код будут проверять
// тесты.Пожалуйста ничего там не меняй.

const customer = {
  username: "Mango",
  balance: 24000,
  discount: 0.1,
  orders: ["Burger", "Pizza", "Salad"],
  // Change code below this line
  getBalance() {
    return this.balance;
  },
  getDiscount() {
    return this.discount;
  },
  setDiscount(value) {
    this.discount = value;
  },
  getOrders() {
    return this.orders;
  },
  addOrder(cost, order) {
    this.balance -= cost - cost * this.discount;
    this.orders.push(order);
  },
  // Change code above this line
};

customer.setDiscount(0.15);
console.log(customer.getDiscount()); // 0.15
customer.addOrder(5000, "Steak");
console.log(customer.getBalance()); // 19750
console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]

// задача 3
// Тестировщики нашли баги в коде сервиса хранения истории заказов еды.Тебе необходимо исправить их,
// правильно расставив this в методах объекта historyService, чтобы методы начали работать правильно.

const historyService = {
  orders: [
    { email: "jacob@hotmail.com", dish: "Burrito" },
    { email: "solomon@topmail.net", dish: "Burger" },
    { email: "artemis@coldmail.net", dish: "Pizza" },
    { email: "solomon@topmail.net", dish: "Apple pie" },
    { email: "jacob@hotmail.com", dish: "Taco" },
  ],
  getOrdersLog() {
    return this.orders
      .map((order) => `email: ${order.email} dish: ${order.dish}`)
      .join(" - ");
  },
  getEmails() {
    const emails = this.orders.map((order) => order.email);
    const uniqueEmails = new Set(emails);
    return [...uniqueEmails];
  },
  getOrdersByEmail(email) {
    return this.orders.filter((order) => order.email === email);
  },
};

// задача 4

// задача 5

// задача 6

// задача 7

// задача 8

// задача 9

// задача 10

// задача 11

// задача 12

// задача 13

// задача 14

// задача 15
// Выполни рефакторинг класса Car.Сделай свойства model и price приватными, также как #brand.
// Стандартизируй публичный интерфейс класса заменив уже объявленные методы на геттеры и сеттеры brand, model
// и price для взаимодействия с приватными свойствами.

class Car {
  #brand;
  #price;
  #model;
  constructor({ brand, model, price }) {
    this.#brand = brand;
    this.#model = model;
    this.#price = price;
  }
  get brand() {
    return this.#brand;
  }
  set brand(newBrand) {
    this.#brand = newBrand;
  }
  get model() {
    return this.#model;
  }
  set model(newModel) {
    this.#model = newModel;
  }
  get price() {
    return this.#price;
  }
  set price(newPrice) {
    this.#price = newPrice;
  }
}

// задача 16
// Выполни рефакторинг класса Car.Добавь публичное статическое свойство MAX_PRICE со значением 50000 -
// максимально допустимая цена автомобиля.
// Добавь сеттеру price проверку передаваемого значения параметра newPrice.Если оно больше чем MAX_PRICE,
// сеттер ничего не делает, а если меньше
// или равно, то перезаписывает цену автомобиля.

class Car {
  static MAX_PRICE = 50000;

  #price;

  constructor({ price }) {
    this.#price = price;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    if (Car.MAX_PRICE <= newPrice) {
      return;
    }
    this.#price = newPrice;
  }
}

// задача 17
// Добавь классу Car публичный статический метод checkPrice(price), принимающий цену автомобиля.
// Метод должен сравнить значения параметра price и приватного статического свойства MAX_PRICE.
// Если цена автомобиля превышает максимальную, метод должен вернуть строку "Error! Price exceeds the maximum".
// В противном случае метод должен вернуть строку "Success! Price is within acceptable limits".
// Под объявлением класса мы добавили инициализацию экземпляра и вызовы методов, чтобы показать как
// будет использоваться метод checkPrice(price).

class Car {
  static #MAX_PRICE = 50000;
  static checkPrice(price) {
    if (price > Car.#MAX_PRICE) {
      return "Error! Price exceeds the maximum";
    }
    return "Success! Price is within acceptable limits";
  }
  constructor({ price }) {
    this.price = price;
  }
}

// задача 18
// В приложении нужен администратор с возможностью добавлять почты пользователей в чёрный список.
// Объяви класс Admin, который наследует от класса User
// Добавь классу Admin публичное статическое свойство AccessLevel(уровень доступа), значение которого это объект

{
  BASIC: "basic";
  SUPERUSER: "superuser";
}
class User {
  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}

class Admin extends User {
  static AccessLevel = {
    BASIC: "basic",
    SUPERUSER: "superuser",
  };
}

// задача 19
// Добавь классу Admin метод constructor, который принимает один параметр - объект настроек
// с двумя свойствами email и accessLevel.Добавь классу Admin публичное свойство accessLevel,
// значение которого будет передаваться при вызове конструктора.
// Чтобы показать как будет использоваться класс Admin мы добавили инициализацию экземпляра
// под объявлением класса.

class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}

class Admin extends User {
  static AccessLevel = {
    BASIC: "basic",
    SUPERUSER: "superuser",
  };
  accessLevel;

  constructor({ email, accessLevel }) {
    super(email);
    this.accessLevel = accessLevel;
  }
}

// задача 20
// Добавь классу Admin следующие свойства и методы.
// Публичное свойство blacklistedEmails для хранения чёрного списка почтовых адресов пользователей.
// Значение по умолчанию это пустой массив.Публичный метод blacklist(email) для добавления почты в чёрный список.
// Метод должен добавлять значение параметра email в массив хранящийся в свойстве blacklistedEmails.
// Публичный метод isBlacklisted(email) для проверки почты в чёрном списке.Метод должен проверять наличие
// значения параметра email в массиве хранящемся в свойстве blacklistedEmails и возвращать true или false.
// После объявления класса мы добавили инициализацию экземпляра и вызовы методов в той последовательности,
// в которой твой код будут проверять тесты.Пожалуйста ничего там не меняй.

class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}
class Admin extends User {
  static AccessLevel = {
    BASIC: "basic",
    SUPERUSER: "superuser",
  };

  constructor({ email, accessLevel }) {
    super(email);
    this.accessLevel = accessLevel;
  }

  blacklistedEmails = [];

  blacklist(email) {
    return this.blacklistedEmails.push(email);
  }
  isBlacklisted(email) {
    return this.blacklistedEmails.includes(email);
  }
}
