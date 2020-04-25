import { updateCompaniesWithBudget } from './updateCompaniesWithBudget';

describe('updateCompaniesWithBudget', () => {
  let companies = [];

  beforeEach(() => {
    companies = [
      {
        id: 0,
        budget: 10,
        budgetSpent: 3,
        budgetLeft: 7
      },
      {
        id: 1,
        budget: 20,
        budgetSpent: 15,
        budgetLeft: 5
      },
      {
        id: 2,
        budget: 31,
        budgetSpent: 11,
        budgetLeft: 20
      },
      {
        id: 3,
        budget: 40,
        budgetSpent: 29,
        budgetLeft: 11
      }
    ];
  });

  test('should update first company', () => {
    const updatedCompanies = updateCompaniesWithBudget(companies, 0, 12);
    expect(updatedCompanies).toStrictEqual([
      {
        id: 0,
        budget: 12,
        budgetSpent: 3,
        budgetLeft: 9
      },
      ...companies.slice(1)
    ]);
  });

  test('should update middle element', () => {
    const updatedCompanies = updateCompaniesWithBudget(companies, 2, 12);
    expect(updatedCompanies).toStrictEqual([
      ...companies.slice(0, 2),
      {
        id: 2,
        budget: 12,
        budgetSpent: 11,
        budgetLeft: 1
      },
      ...companies.slice(3)
    ]);
  });

  test('should update last element', () => {
    const updatedCompanies = updateCompaniesWithBudget(companies, 3, 49);
    expect(updatedCompanies).toStrictEqual([
      ...companies.slice(0, 3),
      {
        id: 3,
        budget: 49,
        budgetSpent: 29,
        budgetLeft: 20
      }
    ]);
  });
});
