import React from 'react';
import Navbar from '../components/Navbar/Navbar'; // Sesuaikan path sesuai dengan struktur proyek Anda
import Hero from '../components/Hero/Hero';
import Testimoni from '../components/Testimoni/Testimoni';
// import Card from '../components/Card/Card';
import Accordion from '../components/Accordion/Accordion';
import Footer from '../components/Footer/Footer';
import Service from '../components/Service/Service';
import Form from '../components/Register/FormRegister';
import Button from '../components/Button/Button';
import Product from '../components/Product/Product';

function Dashboard() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <Product/>
      {/* <Card/> */}
      <Testimoni/>
      <Button/>
      <Service/>
      <Accordion />
      <Footer/>
    </div>
  );
}

export default Dashboard;
