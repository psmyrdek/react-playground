import {companyMapper} from './companyMapper';

export function fetchCompanies() {
  return fetch('/data/companies.json')
    .then((res) => res.json())
    .then(({ companies }) => companies.map(companyMapper));
}
