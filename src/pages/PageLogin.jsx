import React from 'react';
import Navbar from '../components/Navbar/Navbar'; // Sesuaikan path sesuai dengan struktur proyek Anda

import Footer from '../components/Footer/Footer';
import FormLogin from '../components/Login/FormLogin';

function PageLogin() {
  return (
    <div>
      <Navbar />

      <FormLogin/>

      <Footer/>
    </div>
  );
}

export default PageLogin;
