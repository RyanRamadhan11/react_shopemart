import React from 'react';
import Navbar from '../components/Navbar/Navbar'; // Sesuaikan path sesuai dengan struktur proyek Anda

import Footer from '../components/Footer/Footer';
import Product from '../components/Product/Product';


function PageCustomer() {
  return (
    <div>
      <Navbar />

      <Product/>

      <Footer/>
    </div>
  );
}

export default PageCustomer;
