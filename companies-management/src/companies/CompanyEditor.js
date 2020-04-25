import React from 'react';
import './CompanyEditor.scss';

export class CompanyEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      budget: props.company.budget
    };
  }

  render() {
    return (
      <>
        <h2>{this.props.company.name}</h2>
        <form>
          <div className="form-control">
            <label for="budget">Edit budget</label>
            <input autoFocus="autofocus" name="budget" id="budget" type="text" value={this.state.budget} />
          </div>
          <div className="buttons">
            <button className="button button--secondary" type="button">Cancel</button>
            <button className="button button--primary" type="button">Save</button>
          </div>
        </form>
      </>
    );
  }
}
