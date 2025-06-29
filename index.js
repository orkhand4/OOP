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
