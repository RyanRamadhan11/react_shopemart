// FormLogin.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/shopping.png';

import styles from './Style.module.css'; // Import modul CSS

function FormLogin() {
  const [isLoading, setIsLoading] = useState(false);

  const handleLoginClick = () => {
    // Simulasi proses login dengan mengatur isLoading menjadi true
    setIsLoading(true);
  
    // Simulasi waktu proses selama 2 detik
    setTimeout(() => {
      // Setelah waktu proses selesai, arahkan ke dashboard atau lakukan logika login sesungguhnya
      setIsLoading(false);
      // Tambahkan logika login sesungguhnya di sini
  
      // Contoh: Redirect ke dashboard
      window.location.href = "/dashboard";
    }, 2000);
  };
  

  return (
    <section className="nav" style={{ backgroundColor: '#FF6347' }}>
      <div className="container py-5 ">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-12">
            <div className="card" style={{ borderRadius: '1rem', marginLeft: '7em' }}>
              <div className="row container-fluid">
                <div className="col-md-6 col-lg-6 d-none d-md-block py-5 px-5">
                  <img src={logo} alt="login form" className="img-fluid" style={{ borderRadius: '1rem 0 0 1rem', paddingTop: '2em' }} />
                </div>
                <div className="col-md-6 col-lg-6 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">

                    <form>
                      <div className="d-flex align-items-center mb-3 pb-1">
                        <i className="fas fa-cubes fa-2x mx-5" style={{ color: '#ff6219' }}></i>
                        <span className="h1 fw-bold mb-3">Shopeymart</span>
                      </div>

                      <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>Sign into your account</h5>

                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="username">Username</label>
                        <input type="text" id="username" className="form-control form-control-lg" />
                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example27">Password</label>
                        <input type="password" id="form2Example27" className="form-control form-control-lg" />
                      </div>

                      <div className=" mb-4">
                        <Link to="" >
                          <button onClick={handleLoginClick} className={styles.link_login} type='button'>
                            {isLoading ? 'Logging in...' : 'Login'}
                          </button>
                        </Link>
                      </div>

                      <Link to="#!" className={`small text-muted ${styles.link}`} >Forgot password ? </Link>
                      <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>
                        Don't have an account ? 
                        <Link to="/register" className={styles.link_regis}>
                           Register here
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

export default FormLogin;
