import React, { useState } from 'react';
import './CompanyEditor.scss';
import { validateBudget } from './validateBudget';

export function CompanyEditor(props) {
  const [isFormValid, setFormValid] = useState(true);
  const [budget, setBudget] = useState(props.company.budget);

  function handleBudgetChange(e) {
    const newBudget = e.target.value;
    setBudget(newBudget);
    setFormValid(validateBudget(newBudget, props.company));
  }

  function renderErrorMsg() {
    return (
      <small className='error-message'>
        Make sure that budget is a number and it is not less than already spent ({props.company.budgetSpent}€).
      </small>
    );
  }

  function renderButtons() {
    return (
      <div className='buttons'>
        <button className='button button--secondary' type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button
          className={`button button--primary ${!isFormValid && 'button--disabled'}`}
          type='button'
          disabled={isFormValid}>
          Save
        </button>
      </div>
    );
  }

  return (
    <>
      <h2>{props.company.name}</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}>
        <div className={`form-control ${!isFormValid && 'form-control--invalid'}`}>
          <label htmlFor='budget'>Edit budget</label>
          <input
            autoFocus='autofocus'
            autoComplete='none'
            name='budget'
            id='budget'
            type='text'
            value={budget}
            onChange={handleBudgetChange}
          />
          {!isFormValid && renderErrorMsg()}
        </div>
        {renderButtons()}
      </form>
    </>
  );
}
