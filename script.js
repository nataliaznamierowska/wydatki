function editIncome(index) {
  const editedIncome = incomes[index];
  const newName = prompt("Podaj nową nazwę przychodu:", editedIncome.name);
  const newAmount = parseFloat(
    prompt("Podaj nową kwotę przychodu:", editedIncome.amount)
  );

  if (
    newName !== null &&
    newName.trim() !== "" &&
    !isNaN(newAmount) &&
    newAmount > 0
  ) {
    editedIncome.name = newName;
    editedIncome.amount = newAmount;
    updateIncomeList();
    updateBalance();
  }
}

function editExpense(index) {
  const editedExpense = expenses[index];
  const newName = prompt("Podaj nową nazwę wydatku:", editedExpense.name);
  const newAmount = parseFloat(
    prompt("Podaj nową kwotę wydatku:", editedExpense.amount)
  );

  if (
    newName !== null &&
    newName.trim() !== "" &&
    !isNaN(newAmount) &&
    newAmount > 0
  ) {
    editedExpense.name = newName;
    editedExpense.amount = newAmount;
    updateExpenseList();
    updateBalance();
  }
}
