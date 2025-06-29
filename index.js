// Encapsulation in JavaScript using private fields
/*
class Account {
  #username;
  #balance;
  #pass;

  constructor(username, pass, balance) {
    this.#username = username;
    this.#pass = pass;
    this.#balance = balance;
  }

  get username() {
    return this.#username;
  }
  get balance() {
    return this.#balance;
  }

  set username(newUsername) {
    this.#username = newUsername;
  }
  set balance(newBalance) {
    if (newBalance >= 0) {
      this.#balance = newBalance;
    } else {
      console.log("Balance cannot be negative.");
    }
  }
  showData() {
    return `Username: ${this.#username}`;
  }
}

const account1 = new Account("hakuna777", "matata333", 3000);
console.log(account1.balance);
*/

// Inheritance in JavaScript using classes
class Computer {
  constructor(vendor, model, ram, storage) {
    this.vendor = vendor;
    this.model = model;
    this.ram = ram;
    this.storage = storage;
  }
  showData() {
    return `Vendor: ${this.vendor}, Model: ${this.model}, RAM: ${this.ram}GB, Storage: ${this.storage}GB`;
  }
}

class Laptop extends Computer {
  constructor(vendor, model, ram, storage, screenSize, batteryLife, weight) {
    super(vendor, model, ram, storage);
    this.screenSize = screenSize; // in inches
    this.batteryLife = batteryLife; // in hours
    this.weight = weight; // in kg
  }
  showData() {
    return `${super.showData()}, Screen Size: ${
      this.screenSize
    } inches, Battery Life: ${this.batteryLife} hours, Weight: ${
      this.weight
    } kg`;
  }
}

class PC extends Computer {
  constructor(vendor, model, ram, storage, coolerCount, caseModel, powerSupply) {
    super(vendor, model, ram, storage);
    this.coolerCount = coolerCount; // number of coolers
    this.caseModel = caseModel; // model of the case
    this.powerSupply = powerSupply; // power supply in watts
  }
  showData() {
    return `${super.showData()}, Coolers: ${this.coolerCount}, Case Model: ${this.caseModel}, Power Supply: ${this.powerSupply}W`;
  }
}

const comp1 = new Computer("HP", "Pavilion", 16, 512);
const laptop1 = new Laptop("Dell", "XPS 13", 16, 256, 13.3, 12, 1.2);
const pc1 = new PC("Lenovo", "ThinkCentre", 32, 1024, 2, "Mid Tower", 650);
console.log(comp1.showData());
console.log(laptop1.showData());
console.log(pc1.showData());
