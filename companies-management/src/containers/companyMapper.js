export function companyMapper(company) {
  return {
    id: company.id,
    name: company.name,
    budget: company.budget,
    budgetSpent: company.budget_spent,
    budgetLeft: company.budget - company.budget_spent,
    dateOfFirstPurchase: company.date_of_first_purchase
  };
}
