export function updateCompaniesWithBudget(companies, companyId, newBudget) {
  const companyIndex = companies.findIndex((c) => c.id === companyId);
  const companyToEdit = companies[companyIndex];
  const updatedCompany = {
    ...companyToEdit,
    budget: newBudget,
    budgetLeft: newBudget - companyToEdit.budgetSpent
  };
  return [
    ...companies.slice(0, companyIndex),
    updatedCompany,
    ...companies.slice(companyIndex+1)
  ];
}
