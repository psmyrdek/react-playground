import React from 'react';
import './Company.scss';

export function Company(props) {
  return (
    <button className='company' onClick={() => props.onEdit()}>
      <h2 className='company-name'>{props.name}</h2>
      <div className='company-details'>
        <p className='company-date'>
          First purchase: <strong>{props.dateOfFirstPurchase}</strong>
        </p>
        <div className='company-budget'>
          <p>
            <strong>Budget summary</strong>
          </p>
          <p>Total: {props.budget}€</p>
          <p>Spent: {props.budgetSpent}€</p>
          <p>Left: {props.budgetLeft}€</p>
        </div>
      </div>
    </button>
  );
}
