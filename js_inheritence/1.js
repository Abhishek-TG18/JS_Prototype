class BankAccount {
    constructor(name, InitialAmount) {
        this.name = name;
        this._balance = InitialAmount;
    }

    checkBalance() {
        console.log(`Account balance for ${this.name}: Rs.${this._balance}`);
    }

    deposit(Amount) {
        if (typeof Amount === 'number' && Amount > 0) {
            this._balance += Amount;
            console.log(`Deposited Rs.${Amount}. New balance: Rs.${this._balance}`);
        } else {
            console.log("Invalid deposit amount. Please enter a positive amount.");
        }
    }

    withdraw(Amount) {
        if (this._balance < Amount) {
            console.log("Insufficient funds for withdrawal.");
        } else if (typeof Amount === 'number' && Amount > 0) {
            this._balance -= Amount;
            console.log(`Withdrew Rs.${Amount}. New balance: Rs.${this._balance}`);
        } else {
            console.log("Invalid withdrawal amount. Please enter a positive amount.");
        }
    }
}

const MyAcc = new BankAccount("Abhishek TG", 1000);

MyAcc.checkBalance();
MyAcc.deposit(500);
MyAcc.deposit(-20);
MyAcc.withdraw(200);
MyAcc.withdraw(1500);
MyAcc.withdraw(-500);
MyAcc.checkBalance();
