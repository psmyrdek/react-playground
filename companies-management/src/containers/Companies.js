import React from 'react';
import { fetchCompanies } from './fetchCompanies';
import { CompaniesList } from '../companies/CompaniesList';
import { CompanyEditor } from '../companies/CompanyEditor';
import { Modal } from '../generic/modal/Modal';

export class Companies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
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
        isLoading: false,
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
        <h1>Companies Management</h1>
        {this.state.isLoading ? (
          <p>Fetching companies data...</p>
        ) : (
          <CompaniesList
            companies={this.state.companies}
            onEdit={this.editCompany}
          />
        )}
        <Modal visible={this.state.isModalVisible} onClose={this.closeModal}>
          <CompanyEditor company={this.state.companyToEdit} />
        </Modal>
      </div>
    );
  }
}
