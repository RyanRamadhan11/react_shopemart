import React from 'react';
import Navbar from '../components/Navbar/Navbar'; // Sesuaikan path sesuai dengan struktur proyek Anda

import Footer from '../components/Footer/Footer';
import ListCustomer from '../components/Category/DataCategory';


function PageCustomer() {
  return (
    <div>
      <Navbar />

      <ListCustomer/>

      <Footer/>
    </div>
  );
}

export default PageCustomer;
