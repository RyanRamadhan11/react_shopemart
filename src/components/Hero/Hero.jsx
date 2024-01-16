import React from 'react';
import '../../assets/css/style.css';
import { Link } from 'react-router-dom';

function Hero() {
    return(
      <section className="hero" id="hero">
        <div className="container">
          <div>
            <h1>Hello,</h1>
            <h1>Welcome to</h1>
            <h1>Shopey<span>Mart</span></h1>
            {/* <a href="/" type="button" className="register">Register Now</a> */}
            <Link to="/register" style={{ textDecoration: 'none' }}>
              <button className="btn btn-primary mt-3 shadow-sm  animate__animated animate__fadeIn">Register</button>
            </Link>
          </div>
        </div>
      </section>
    );
}


export default Hero;
