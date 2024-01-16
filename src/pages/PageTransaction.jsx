import React from 'react';
import Navbar from '../components/Navbar/Navbar'; // Sesuaikan path sesuai dengan struktur proyek Anda

import Footer from '../components/Footer/Footer';
import Transaction from '../components/Transaction/Transaction';


function PageTransaction() {
  return (
    <div>
      <Navbar />

      <Transaction/>

      <Footer/>
    </div>
  );
}

export default PageTransaction;
