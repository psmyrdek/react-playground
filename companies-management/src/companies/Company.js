import React from 'react';
import './Company.scss';

export class Company extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button className="company" onClick={() => this.props.onEdit()}>
        <h2 className="company-name">{this.props.name}</h2>
        <div className="company-details">
          <p className="company-date">
            First purchase: <strong>{this.props.dateOfFirstPurchase}</strong>
          </p>
          <div className="company-budget">
            <p>
              <strong>Budget summary</strong>
            </p>
            <p>Total: {this.props.budget}€</p>
            <p>Spent: {this.props.budgetSpent}€</p>
            <p>Left: {this.props.budgetLeft}€</p>
          </div>
        </div>
      </button>
    );
  }
}
