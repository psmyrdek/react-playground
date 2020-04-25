import { companyMapper } from './companyMapper';

/* Returning raw promise to simulate network delay */
export function fetchCompanies() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch('/data/companies.json')
        .then((res) => res.json())
        .then(({ companies }) => {
          resolve(companies.map(companyMapper));
        })
        .catch((err) => {
          reject(err);
        });
    }, 1000);
  });
}
