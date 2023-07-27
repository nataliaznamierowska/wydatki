const resultElement = document.getElementById('balance-text');
const incomeList = document.getElementById('income-list');
const expenseList = document.getElementById('expense-list');

let incomes = [];
let expenses = [];

function addIncome() {
  const nameInput = document.getElementById('income-name');
  const amountInput = document.getElementById('income-amount');
  const name = nameInput.value;
  const amount = parseFloat(amountInput.value);

  if (!name || amount < 0.01) {
    alert('Wprowadź poprawne dane (nazwa i kwota)!');
    return;
  }

  incomes.push({ name, amount });
  updateIncomeList();
  updateBalance();
  nameInput.value = '';
  amountInput.value = '';
}

function addExpense() {
  const nameInput = document.getElementById('expense-name');
  const amountInput = document.getElementById('expense-amount');
  const name = nameInput.value;
  const amount = parseFloat(amountInput.value);

  if (!name || amount < 0.01) {
    alert('Wprowadź poprawne dane (nazwa i kwota)!');
    return;
  }

  expenses.push({ name, amount });
  updateExpenseList();
  updateBalance();
  nameInput.value = '';
  amountInput.value = '';
}

function deleteIncome(index) {
  incomes.splice(index, 1);
  updateIncomeList();
  updateBalance();
}

function deleteExpense(index) {
  expenses.splice(index, 1);
  updateExpenseList();
  updateBalance();
}

function updateBalance() {
  const totalIncome = incomes.reduce((sum, income) => sum + income.amount, 0);
  const totalExpense = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  const balance = totalIncome - totalExpense;

  if (balance > 0) {
    resultElement.innerText = `Możesz jeszcze wydać ${balance.toFixed(2)} PLN`;
  } else if (balance === 0) {
    resultElement.innerText = 'Bilans wynosi zero';
  } else {
    resultElement.innerText = `Bilans jest ujemny. Jesteś na minusie ${Math.abs(balance).toFixed(2)} PLN`;
  }
}

function updateIncomeList() {
  incomeList.innerHTML = '';

  incomes.forEach((income, index) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `${income.name}: ${income.amount.toFixed(2)} PLN <button onclick="deleteIncome(${index})">Usuń</button>`;
    incomeList.appendChild(listItem);
  });
}

function updateExpenseList() {
  expenseList.innerHTML = '';

  expenses.forEach((expense, index) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `${expense.name}: ${expense.amount.toFixed(2)} PLN <button onclick="deleteExpense(${index})">Usuń</button>`;
    expenseList.appendChild(listItem);
  });
}
