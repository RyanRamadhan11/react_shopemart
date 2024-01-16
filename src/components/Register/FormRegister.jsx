import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
// import logo from '../../assets/img/bg1.jpg';
import logo from '../../assets/img/shopping.png';

import { Link } from 'react-router-dom';

import styles from './Style.module.css'; // Import modul CSS

//import axios
import axios from 'axios';

function FormRegister() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    customerName: '',
    address: '',
    mobilePhone: '',
    email: '',
  });

  const [alertVisible, setAlertVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:8081/api/auth/register/customer', formData);
  
      console.log(response); // Tambahkan baris ini
  
      if (response.status === 201) {
        console.log('Data berhasil disimpan di database!');
        setFormData({
          username: '',
          password: '',
          customerName: '',
          address: '',
          mobilePhone: '',
          email: '',
        });
  
        // Menampilkan alert Bootstrap
        setAlertVisible(true);
  
        // Menyembunyikan alert setelah beberapa detik
        setTimeout(() => {
          setAlertVisible(false);
        }, 3000);
      } else {
        console.error('Gagal menyimpan data di database.');
      }
    } catch (error) {
      console.error('Terjadi kesalahan:', error);
    }
  };
  


  return (
    <section className="" style={{ backgroundColor: '#FF6347' }}>
    <div className="container py-5 ">
        <div className="row d-flex justify-content-center align-items-center">
        <div className="col col-xl-12" >
            <div className="card" style={{borderRadius: '1rem', marginLeft: '7em'}}>
            <div className="row g-0">
                <div className="col-md-6 col-lg-6 d-none d-md-block">
                <img src={logo}
                    alt="login form" className="img-fluid " style={{borderRadius: '1rem 0 0 1rem', marginTop: '15em', marginLeft: '5em'}} />
                </div>
                <div className="col-md-6 col-lg-6 d-flex align-items-center">
                <div className="card-body p-4 p-lg-5 text-black">

                    <div className=' container-fluid mb-5 w-50 text-center'>
                      {alertVisible && (
                        <Alert variant="success" onClose={() => setAlertVisible(false)} dismissible>
                          Data berhasil disimpan di database!
                        </Alert>
                      )}
                    </div>

                    <form onSubmit={handleSubmit}>
                    <div className="d-flex align-items-center mb-3 pb-1">
                        <i className="fas fa-cubes fa-2x " style={{color: '#ff6219'}}></i>
                        <span className="h1 fw-bold mb-0">Enigma Camp</span>
                    </div>

                    <h5 className="fw-normal mb-3 pb-3" style={{letterSpacing: '1px'}}>Register new customer account</h5>

                    <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="username">Username</label>
                    <input
                       style={{width: '35em'}}
                      type="text"
                      className="form-control  " 
                      id="username"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                    />
                    </div>

                    <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form2Example27">Password</label>
                    <input
                      style={{width: '35em'}}
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                    </div>

                    <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form2Example27">Customer Name</label>
                    <input
                      style={{width: '35em'}}
                      type="text"
                      className="form-control"
                      id="customerName"
                      name="customerName"
                      value={formData.customerName}
                      onChange={handleChange}
                    />
                    </div>

                    <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form2Example27">Alamat</label>
                    <input
                       style={{width: '35em'}}
                      type="text"
                      className="form-control"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                    />
                    </div>

                    <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form2Example27">Nomor Handphone</label>
                    <input
                      style={{width: '35em'}}
                      type="text"
                      className="form-control"
                      id="mobilePhone"
                      name="mobilePhone"
                      value={formData.mobilePhone}
                      onChange={handleChange}
                    />
                    </div>

                    <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form2Example27">Email Address</label>
                    <input
                       style={{width: '35em'}}
                        type="email"
                        className="form-control "
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="pt-1 mb-4">
                      <button className="btn btn-dark btn-lg btn-block" type="submit">Register</button>
                    </div>

                    <Link to="#!" className={`small text-muted ${styles.link}`} >Forgot password ? </Link>
                      <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>
                        have an account ? 
                        <Link to="/" className={styles.link_regis}>
                           Login here
                        </Link>
                      </p>
                      <Link to="#!" className={`small text-muted ${styles.link}`}>Terms of use. </Link>
                      <Link to="#!" className={`small text-muted ${styles.link}`}>Privacy policy</Link>
                    </form>

                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
    </section>

  );
}

export default FormRegister;
