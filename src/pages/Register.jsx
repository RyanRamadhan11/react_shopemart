import React from 'react';
import Navbar from '../components/Navbar/Navbar'; // Sesuaikan path sesuai dengan struktur proyek Anda

import Footer from '../components/Footer/Footer';
import FormRegister from '../components/Register/FormRegister';

function Register() {
  return (
    <div>
      <Navbar />

      <FormRegister/>

      <Footer/>
    </div>
  );
}

export default Register;
