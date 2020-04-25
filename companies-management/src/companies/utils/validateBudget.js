export function validateBudget(newBudget, company) {
    if (isNaN(newBudget)) {
        return false;
    }
    if (newBudget < company.budgetSpent) {
        return false;
    }
    return true;
}