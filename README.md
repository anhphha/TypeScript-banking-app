# TypeScript Assignment

- Complete the challenge: banking application
- Check the scripts in `package.json` to run the suitable command for each challenge

## Technologies

- TypeScript

## Project Structure
````
┣ src/
┃ ┣ bank.ts
┃ ┣ branch.ts
┃ ┣ customer.ts
┃ ┣ index.html
┃ ┣ index.ts
┃ ┗ transaction.ts
┣ package.json
┣ README.md
┗ tsconfig.json
````

## Create a simple banking application

Implement the following classes, interface, and codes (you can decide which file to put each type, but do not write all the types in `index.ts` or `bank.ts`). All the properties must be kept private, while you can make the methods as public

1. Class Bank

   - It has two properties: `name` (string), `branches` (array of type `Branch[]``). Make these properties private.

   - A constructor that takes an argumment name (`string``). It initialises name and instantiates branches as empty array.

   - And the following methods:

     - `get branches()`: getter for `branches`

     - `get name()`, getter for name.

     - `addBranch()`, has one parameter of type `Branch` and returns a boolean. This function will add branch into array `branches`. It returns true if the branch was added successfully or false otherwise. Each branch is supposed to be added once only.

     - `addCustomer()`, has 2 parameters: branch and customer and returns a boolean. It returns true if the customer is added successfully to the branch of the bank or false otherwise. Each customer can be added only once to a branch.

     - `addCustomerTransaction()`, has three parameters: branch, customer id, amount of transaction and returns a boolean. It returns true if the customers transaction is added successfully or false otherwise.

     - `findBranchByName()`, has one parameter of type string (branch's name) and returns list of matched branches or null otherwise.

     - `checkBranch()`, has one parameter of type Branch and returns true if branch belongs to bank or false otherwise.

     - `listCustomers()`, has two parameters, branch and boolean and returns a boolean. Return true if the branch exists or false otherwise. This method prints out a list of customers with transaction details if second parameter is true.

2. Class Branch

   - It has two properties, a string called `name` and an array called `customers`. Array `customers` should hold objects of type Customer. Make these properties private

   - A constructor that takes a string (name of the branch). It initialises name and instantiates customers as an emty array.

   - And 5 methods, they are (their functions are in their names):

     - `get name()`, getter for name.

     - `get customers()`, getter for customers.

     - `addCustomer()`, has a parameter of type Customer and returns a boolean. Returns true if the customer was added successfully or false otherwise (each customer should be added once only).

     - `addCustomerTransaction()`, has a parameter of type string (id of customer), a number (for transaction) and returns a boolean. Returns true if the customers transaction is added successfully or false otherwise.

     - `findCustomer()`, has one parameter of type string (`id` of customer) and returns a customer. Return the customer if they exist, null otherwise.

3. Class Customer

   - It has 3 properties, string `name`, string `id`, and an array that holds objects of type Transaction called `transactions`. Make these properties private

   - A constructor that takes only a parameter of type string (name of customer). It initialises name and instantiates transactions as empty array. `id` should be initialized to be an unique string.

   - And 5 methods:

     - `get name()`, getter for name.

     - `get id()`, getter for id.

     - `get transactions()`, getter for transactions.

     - `get balance()`, return the current balance from the transactions.

     - `addTransaction()`, has one parameter of type number and return true if transaction is added sucessfully. You need to make sure that balance cannot be negative. This function should add the successful transaction into transactions array.

4. Interface Transaction

   - It has 2 properties, a number `amount`, and a Date called `date`. `date` refers to the time that transaction has been created.

Run the following codes in `index.ts`and share your results and findings in the Slack channel

```
const arizonaBank = new Bank("Arizona")
const westBranch = new Branch("West Branch")
const sunBranch = new Branch("Sun Branch")
const customer1 = new Customer("John")
const customer2 = new Customer("Anna")
const customer3 = new Customer("John")

arizonaBank.addBranch(westBranch)
arizonaBank.addBranch(sunBranch)
arizonaBank.addBranch(westBranch)

arizonaBank.findBranchByName("bank")
arizonaBank.findBranchByName("sun")

arizonaBank.addCustomer(westBranch, customer1)
arizonaBank.addCustomer(westBranch, customer3)
arizonaBank.addCustomer(sunBranch, customer1)
arizonaBank.addCustomer(sunBranch, customer2)

arizonaBank.addCustomerTransaction(westBranch, customer1.id, 3000)
arizonaBank.addCustomerTransaction(westBranch, customer1.id, 2000)
arizonaBank.addCustomerTransaction(westBranch, customer2.id, 3000)

customer1.addTransactions(-1000)
console.log(customer1.balance)
console.log(arizonaBank.listCustomers(westBranch, true))
console.log(arizonaBank.listCustomers(sunBranch,true))
```

You can add more codes to check the functionality and security of your banking system

## Installation

1. After clone the project from your forked repo, run `npm install`
2. Run `npm run watch` to see code running in watch mode, or check `package.json` for extra scripts


## Findings

1. **Customer3 Creation Issue**
   - Customer3 wasn't created because it had the same name as ```customer1```. Therefore, I changed the name from ```John``` to ```David```

2. **Duplicate Branch Name**
   - There were two attempts to add a branch called ```West Branch```. Only the first was successful. We can leave them like that or remove the duplicate. I decided to remove the duplicate code.

3. **Wrong Branch for Customer2**
   - ```Customer2``` were assigned to ```sunBranch``` but the transaction were added for ```westBranch```. That's why the result record was not correct. Therefore, I corrected the name branch for ```customer2```.

4. **Typo Correction**
   - There was a typo in the `addTransaction` method (from ```addTransactions```).

These modifications ensure that the code functions correctly as intended.

## Result

```
4000
Customer at branch West Branch
Customer name: John
Customer ID: lmije1lm23eib46e92l
Customer transaction: [{"amount":3000,"date":"2023-09-14T02:13:36.539Z"},{"amount":2000,"date":"2023-09-14T02:13:36.539Z"},{"amount":-1000,"date":"2023-09-14T02:13:36.539Z"}]
Balance: 4000

Customer name: David
Customer ID: lmije1lml72fzbgazqq
Customer transaction: []
Balance: 0

true
Customer at branch Sun Branch
Customer name: John
Customer ID: lmije1lm23eib46e92l
Customer transaction: [{"amount":3000,"date":"2023-09-14T02:13:36.539Z"},{"amount":2000,"date":"2023-09-14T02:13:36.539Z"},{"amount":-1000,"date":"2023-09-14T02:13:36.539Z"}]
Balance: 4000

Customer name: Anna
Customer ID: lmije1lmg1fos7xlu6n
Customer transaction: [{"amount":3000,"date":"2023-09-14T02:13:36.539Z"}]
Balance: 3000
```