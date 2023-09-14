import { Transaction } from "./transaction";
export class Customer {
  private _name: string;
  private _id: string;
  private _transactions: Transaction[];

  constructor(name: string) {
    this._name = name;
    this._transactions = [];
    this._id = this.uid();
  }

  private uid(): string {
    return Date.now().toString(36) + Math.random().toString(36).slice(2);
  }

  get name(): string {
    return this._name;
  }

  get id(): string {
    return this._id;
  }

  get transactions(): Transaction[] {
    return this._transactions;
  }

  get balance(): number {
    const balance = this._transactions.reduce(
      (sum, transaction) => sum + transaction.amount,
      0
    );
    return balance;
  }

  addTransaction(transactionAmount: number): boolean {
    const newBalance = this.balance + transactionAmount;
    if (newBalance >= 0) {
      const newTransaction: Transaction = {
        amount: transactionAmount,
        date: new Date(),
      };
      this._transactions.push(newTransaction);
      return true;
    }
    return false; // Transaction is negative; balance would be negative.
  }
}
