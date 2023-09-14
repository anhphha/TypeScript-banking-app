import { Customer } from "./customer";

export class Branch {
  private _name: string;
  private _customers: Customer[];

  constructor(name: string) {
    this._name = name;
    this._customers = [];
  }

  get name(): string {
    return this._name;
  }

  get customers(): Customer[] {
    return this._customers;
  }

  addCustomer(customer: Customer): boolean {
    const existingCustomer = this._customers.find((c) => c.id === customer.id);
    if (!existingCustomer) {
      this._customers.push(customer);
      return true;
    }
    return false;
  }

  findCustomer(customerId: string): Customer | null {
    return this._customers.find((c) => c.id === customerId) || null;
  }

  addCustomerTransaction(customerId: string, amount: number): boolean {
    const customer = this.findCustomer(customerId);
    if (customer) {
      customer.addTransaction(amount);
      return true;
    }
    return false;
  }
}
