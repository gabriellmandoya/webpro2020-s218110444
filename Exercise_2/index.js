/*
    Object: Account
    \\Account: Name, Expenses
    Funciton: addExpenses(description, amount)
    - Memasukan ke 2 agrument dengan push() ke object: account
    Function: getAccountSummary()
    - Use forEach to count totalExpenses in Expenses
*/

const account = {
    name: "Lucas",
    expenses: [],
}
// Later push 'description' and 'amount' to this object
// push this 'description' and 'amount' to 'expenses' property so that 'expenses' become new subobject
const addExpenses = function (desc, amnt) {
    account.expenses.push({description: desc, amount: amnt});
};

const getAccountSummary = function () {
    let totalExpenses = 0;
    account.expenses.forEach(function (el) {
        totalExpenses = totalExpenses + el.amount;
    });
    console.log("Total Pengeluaran " + account.name + " adalah Rp. " + totalExpenses);
};

addExpenses('Beli Makanan', 15000);
addExpenses('Ongkos', 50000);
getAccountSummary();