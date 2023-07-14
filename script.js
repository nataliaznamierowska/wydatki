let incomes = [];
let expenses = [];

function addIncome() {
  const nameInput = document.getElementById('income-name');
  const amountInput = document.getElementById('income-amount');
  const name = nameInput.value;
  const amount = parseFloat(amountInput.value);

  if (name && amount) {
    incomes.push({ name, amount });
    updateIncomeList();
    updateBalance();
    nameInput.value = '';
    amountInput.value = '';
  }
}

function addExpense() {
  const nameInput = document.getElementById('expense-name');
  const amountInput = document.getElementById('expense-amount');
  const name = nameInput.value;
  const amount = parseFloat(amountInput.value);

  if (name && amount) {
    expenses.push({ name, amount });
    updateExpenseList();
    updateBalance();
    nameInput.value = '';
    amountInput.value = '';
  }
}

function updateIncomeList() {
  const incomeList = document.getElementById('income-list');
  incomeList.innerHTML = '';

  incomes.forEach(income => {
    const listItem = document.createElement('li');
    listItem.innerText = `${income.name}: ${income.amount.toFixed(2)} PLN`;
    incomeList.appendChild(listItem);
  });
}

function updateExpenseList() {
  const expenseList = document.getElementById('expense-list');
  expenseList.innerHTML = '';

  expenses.forEach(expense => {
    const listItem = document.createElement('li');
    listItem.innerText = `${expense.name}: ${expense.amount.toFixed(2)} PLN`;
    expenseList.appendChild(listItem);
  });
}

function updateBalance() {
  const totalIncome = incomes.reduce((sum, income) => sum + income.amount, 0);
  const totalExpense = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  const balance = totalIncome - totalExpense;
  const balanceText = document.getElementById('balance-text');

  if (balance > 0) {
    balanceText.innerText = `Możesz jeszcze wydać ${balance.toFixed(2)} PLN`;
  } else if (balance === 0) {
    balanceText.innerText = 'Bilans wynosi zero';
  } else {
    balanceText.innerText = `Bilans jest ujemny. Jesteś na minusie ${Math.abs(balance).toFixed(2)} PLN`;
  }
}
