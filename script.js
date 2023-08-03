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

  if (!name || isNaN(amount) || amount <= 0) {
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

  if (!name || isNaN(amount) || amount <= 0) {
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
    listItem.innerHTML = `
      ${income.name}: ${income.amount.toFixed(2)} PLN
      <button class="edit-button" onclick="editIncome(${index})">Edytuj</button>
      <button class="delete-button" onclick="deleteIncome(${index})">Usuń</button>
    `;
    incomeList.appendChild(listItem);
  });
}

function updateExpenseList() {
  expenseList.innerHTML = '';

  expenses.forEach((expense, index) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      ${expense.name}: ${expense.amount.toFixed(2)} PLN
      <button class="edit-button" onclick="editExpense(${index})">Edytuj</button>
      <button class="delete-button" onclick="deleteExpense(${index})">Usuń</button>
    `;
    expenseList.appendChild(listItem);
  });
}

function editIncome(index) {
  const editedIncome = incomes[index];
  const newName = prompt('Podaj nową nazwę przychodu:', editedIncome.name);
  const newAmount = parseFloat(prompt('Podaj nową kwotę przychodu:', editedIncome.amount));

  if (newName !== null && !isNaN(newAmount) && newAmount > 0) {
    editedIncome.name = newName;
    editedIncome.amount = newAmount;
    updateIncomeList();
    updateBalance();
  }
}

function editExpense(index) {
  const editedExpense = expenses[index];
  const newName = prompt('Podaj nową nazwę wydatku:', editedExpense.name);
  const newAmount = parseFloat(prompt('Podaj nową kwotę wydatku:', editedExpense.amount));

  if (newName !== null && !isNaN(newAmount) && newAmount > 0) {
    editedExpense.name = newName;
    editedExpense.amount = newAmount;
    updateExpenseList();
    updateBalance();
  }
}

// Obsługa formularzy poprzez zdarzenie "submit"
document.getElementById('income-form').addEventListener('submit', function (event) {
  event.preventDefault();
  addIncome();
});

document.getElementById('expense-form').addEventListener('submit', function (event) {
  event.preventDefault();
  addExpense();
});

// Inicjalizacja listy przychodów i wydatków
updateIncomeList();
updateExpenseList();
updateBalance();
