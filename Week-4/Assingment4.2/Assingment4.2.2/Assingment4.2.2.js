class Vehicle {
  constructor(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
  }

  drive() {
    console.log(`Driving ${this.make} ${this.model}.`);
  }
}

class Car extends Vehicle {
  constructor(make, model, year, color, numSeats) {
    super(make, model, year, color);
    this.numSeats = numSeats;
  }
}

class RideShareCar extends Car {
  constructor(make, model, year, color, numSeats, isAvailable) {
    super(make, model, year, color, numSeats);
    this.isAvailable = isAvailable;
  }
}

class Shape {
  calculateArea() {
    return 0;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  calculateArea() {
    return this.width * this.height;
  }
}

class Triangle extends Shape {
  constructor(base, height) {
    super();
    this.base = base;
    this.height = height;
  }

  calculateArea() {
    return (this.base * this.height) / 2;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  calculateArea() {
    return Math.PI * this.radius * this.radius;
  }
}

const rectangle = new Rectangle(5, 10);
const triangle = new Triangle(4, 6);
const circle = new Circle(3);

console.log("Rectangle Area:", rectangle.calculateArea());
console.log("Triangle Area:", triangle.calculateArea());
console.log("Circle Area:", circle.calculateArea());

class BankAccount {
  #accountNumber;
  #balance;
  #accountHolderName;

  constructor(accountNumber, balance, accountHolderName) {
    this.#accountNumber = accountNumber;
    this.#balance = balance;
    this.#accountHolderName = accountHolderName;
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`Deposited $${amount}. New balance: $${this.#balance}`);
    }
  }

  withdraw(amount) {}

  getBalance() {
    return this.balance;
  }
}

class CheckingAccount extends BankAccount {
  withdraw(amount) {
    if (amount > 0 && amount <= this.getBalance()) {
      this.balance -= amount;
      console.log(`Withdrawn $${amount}. New balance: $${this.getBalance()}`);
    } else {
      console.log("Withdrawal failed. Insufficient funds.");
    }
  }
}

class SavingsAccount extends BankAccount {
  withdraw(amount) {
    if (amount > 0 && amount <= this.getBalance()) {
      this.balance -= amount;
      console.log(`Withdrawn $${amount}. New balance: $${this.getBalance()}`);
    } else {
      console.log("Withdrawal failed. Insufficient funds.");
    }
  }
}

const checking = new CheckingAccount("12345", 1000, "John Doe");
const savings = new SavingsAccount("54321", 5000, "Jane Smith");

checking.deposit(200);
checking.withdraw(300);
checking.withdraw(1000);

savings.deposit(1000);
savings.withdraw(2000);
savings.withdraw(6000);
