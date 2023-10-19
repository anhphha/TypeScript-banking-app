import { Bank } from "./bank";
import { Branch } from "./branch";
import { Customer } from "./customer";

const arizonaBank = new Bank("Arizona");
const westBranch = new Branch("West Branch");
const sunBranch = new Branch("Sun Branch");
const customer1 = new Customer("John");
const customer2 = new Customer("Anna");
const customer3 = new Customer("David");

arizonaBank.addBranch(westBranch);
arizonaBank.addBranch(sunBranch);
// arizonaBank.addBranch(westBranch);

arizonaBank.findBranchByName("bank");
arizonaBank.findBranchByName("sun");

arizonaBank.addCustomer(westBranch, customer1);
arizonaBank.addCustomer(westBranch, customer3);
arizonaBank.addCustomer(sunBranch, customer1);
arizonaBank.addCustomer(sunBranch, customer2);

arizonaBank.addCustomerTransaction(westBranch, customer1.id, 3000);
arizonaBank.addCustomerTransaction(westBranch, customer1.id, 2000);
arizonaBank.addCustomerTransaction(sunBranch, customer2.id, 3000);

customer1.addTransaction(-1000);
console.log(customer1.balance);
console.log(arizonaBank.listCustomers(westBranch, true));
console.log(arizonaBank.listCustomers(sunBranch, true));
