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

// задача 16

// задача 17

// задача 18

// задача 19

// задача 20
