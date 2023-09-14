import { Branch } from "./branch";
import { Customer } from "./customer";

export class Bank {
  private _name: string;
  private _branches: Branch[];

  constructor(name: string) {
    this._name = name;
    this._branches = [];
  }

  get branches(): Branch[] {
    return this._branches;
  }

  get name(): string {
    return this._name;
  }

  addBranch(branch: Branch): boolean {
    if (!this._branches.includes(branch)) {
      this._branches.push(branch);
      return true;
    }
    return false;
  }

  addCustomer(branch: Branch, customer: Customer): boolean {
    if (branch.addCustomer(customer)) {
      return true;
    }
    return false;
  }

  findBranchByName(branchName: string): Branch | null {
    const matchingBranch = this._branches.find(
      (branch) => branch.name === branchName
    );
    return matchingBranch || null;
  }

  checkBranch(branchToCheck: Branch): boolean {
    return this._branches.includes(branchToCheck);
  }

  listCustomers(branch: Branch, printDetails: boolean): boolean {
    const foundBranch = this.findBranchByName(branch.name);

    if (foundBranch) {
      if (printDetails) {
        console.log(`Customer at branch ${branch.name}`);

        foundBranch.customers.forEach((customer) => {
          console.log(`Customer name: ${customer.name}`);
          console.log(`Customer ID: ${customer.id}`);
          console.log(
            `Customer transaction: ${JSON.stringify(customer.transactions)}`
          );
          console.log(`Balance: ${customer.balance}`);
          console.log("");
        });
        return true;
      }
      return false;
    }
    return false;
  }

  addCustomerTransaction(
    branchName: Branch,
    customerId: string,
    transactionAmount: number
  ): boolean {
    const branch = this.findBranchByName(branchName.name);
    if (branch) {
      branch.addCustomerTransaction(customerId, transactionAmount);
      return true;
    }
    return false;
  }
}
