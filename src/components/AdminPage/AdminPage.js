// Imports
import React, { Component } from 'react';
import Header from '../Header/Header';
import AdminTable from '../AdminTable/AdminTable'

// Create Admin page Component
class AdminPage extends Component {

  render() {
    return (
      <div>
        <Header />
        <AdminTable />
      </div>
    );
  }
}

// Export Component
export default AdminPage;