class BankAccount {
  constructor(accountNumber, accountHolderName, balance) {
    this.accountNumber = accountNumber;
    this.accountHolderName = accountHolderName;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
    console.log(`Deposit of ${amount} successful. New balance is ${this.balance}.`);
  }

  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      console.log(`Withdrawal of ${amount} successful. New balance is ${this.balance}.`);
    } else {
      console.log(`Insufficient balance. Current balance is ${this.balance}.`);
    }
  }

  transfer(amount, recipient) {
    if (amount <= this.balance) {
      this.balance -= amount;
      recipient.balance += amount;
      console.log(`Transfer of ${amount} successful. New balance is ${this.balance}.`);
    } else {
      console.log(`Insufficient balance. Current balance is ${this.balance}.`);
    }
  }
}

class Loan {
  constructor(loanAmount, interestRate, durationMonths) {
    this.loanAmount = loanAmount;
    this.interestRate = interestRate;
    this.durationMonths = durationMonths;
  }

  calculateMonthlyPayment() {
    const monthlyInterestRate = this.interestRate / 12;
    const numerator = this.loanAmount * monthlyInterestRate;
    const denominator = 1 - Math.pow(1 + monthlyInterestRate, -this.durationMonths);
    const monthlyPayment = numerator / denominator;
    console.log(`Monthly payment is ${monthlyPayment}.`);
  }

  calculateTotalInterest() {
    const monthlyInterestRate = this.interestRate / 12;
    const totalInterest = (this.loanAmount * monthlyInterestRate * this.durationMonths) - this.loanAmount;
    console.log(`Total interest paid is ${totalInterest}.`);
  }

  calculateLoanAmount() {
    const monthlyInterestRate = this.interestRate / 12;
    const numerator = monthlyInterestRate * Math.pow(1 + monthlyInterestRate, this.durationMonths);
    const denominator = Math.pow(1 + monthlyInterestRate, this.durationMonths) - 1;
    const loanAmount = numerator / denominator * this.monthlyPayment;
    console.log(`Loan amount is ${loanAmount}.`);
  }
}

const account1 = new BankAccount('123456', 'John Smith', 5000);
const account2 = new BankAccount('789012', 'Jane Doe', 2000);
account1.transfer(1000, account2);

const loan = new Loan(10000, 0.05, 60);
loan.calculateMonthlyPayment();
loan.calculateTotalInterest();
loan.calculateLoanAmount();
