import React, { Component } from 'react';
import Header from '../Header/Header';
import AdminTable from '../AdminTable/AdminTable'

class AdminPage extends Component {


  
  render() {
    return (
      <div>
        <Header />
        <AdminTable/>


      </div>
    );
  }
}



export default AdminPage;