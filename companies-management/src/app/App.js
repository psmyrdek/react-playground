import React from 'react';
import './App.css';
import { CompaniesList } from '../companies/companies-list/CompaniesList';

function App() {
  return (
    <div className="app">
      <div className="app-wrapper">
        <h1>Companies Management</h1>
        <CompaniesList />
      </div>
    </div>
  );
}

export default App;
