import React from 'react';
import { Company } from './Company';
import './CompaniesList.scss';

export function CompaniesList(props) {
  return (
    <ul className="companies-list">
      {props.companies.map((company) => (
        <li key={company.id}>
          <Company {...company} onEdit={() => props.onEdit(company.id)} />
        </li>
      ))}
    </ul>
  );
}
