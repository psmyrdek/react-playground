import React from 'react';
import './CompanyEditor.scss';
import { validateBudget } from './validateBudget';

export class CompanyEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFormValid: true,
      budget: props.company.budget
    };
    this.handleBudgetChange = this.handleBudgetChange.bind(this);
  }

  handleBudgetChange(e) {
    const newBudget = e.target.value;
    this.setState((state, props) => ({
      budget: newBudget,
      isFormValid: validateBudget(newBudget, props.company)
    }));
  }

  renderErrorMsg() {
    return (
      <small className='error-message'>
        Make sure that budget is a number and it is not less than already spent ({this.props.company.budgetSpent}€).
      </small>
    );
  }

  renderButtons() {
    return (
      <div className='buttons'>
        <button className='button button--secondary' type='button' onClick={this.props.onCancel}>
          Cancel
        </button>
        <button
          className={`button button--primary ${!this.state.isFormValid && 'button--disabled'}`}
          type='button'
          disabled={this.state.isFormValid}>
          Save
        </button>
      </div>
    );
  }

  render() {
    return (
      <>
        <h2>{this.props.company.name}</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}>
          <div className={`form-control ${!this.state.isFormValid && 'form-control--invalid'}`}>
            <label htmlFor='budget'>Edit budget</label>
            <input
              autoFocus='autofocus'
              autoComplete='none'
              name='budget'
              id='budget'
              type='text'
              value={this.state.budget}
              onChange={this.handleBudgetChange}
            />
            {!this.state.isFormValid && this.renderErrorMsg()}
          </div>
          {this.renderButtons()}
        </form>
      </>
    );
  }
}
