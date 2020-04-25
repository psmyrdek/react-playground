import React from 'react';
import { Company } from '../company/Company';
import { fetchCompanies } from './fetchCompanies';
import './CompaniesList.css';
import { Modal } from '../../generic/modal/Modal';
import { CompanyEditor } from '../company-editor/CompanyEditor';

export class CompaniesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      companies: [],
      companyToEdit: null,
      isModalVisible: false
    };

    this.closeModal = this.closeModal.bind(this);
    this.editCompany = this.editCompany.bind(this);
  }

  componentDidMount() {
    fetchCompanies().then((companies) => {
      this.setState({
        companies
      });
    });
  }

  editCompany(companyId) {
    this.setState((state) => ({
      companyToEdit: state.companies.find((c) => c.id === companyId),
      isModalVisible: true
    }));
  }

  closeModal() {
    this.setState({
      isModalVisible: false
    });
  }

  render() {
    return (
      <div>
        <ul className="companies-list">
          {this.state.companies.map((cmp) => (
            <li key={cmp.id}>
              <Company {...cmp} onEdit={() => this.editCompany(cmp.id)} />
            </li>
          ))}
        </ul>
        <Modal visible={this.state.isModalVisible} onClose={this.closeModal}>
          <CompanyEditor company={this.state.companyToEdit} />
        </Modal>
      </div>
    );
  }
}
