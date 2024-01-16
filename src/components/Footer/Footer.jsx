import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/shopping.png';

function Footer() {
  return (
    <div className="footer">
      <div className="row bg-light" style={{ paddingTop: '2em' }}>
        <div className="col-sm-4 d-flex py-3 px-4">
          <img src={Logo} alt="Logo" style={{ width: '80px', height: '80px' }} />
          <div className="d-flex flex-column align-items-start">
            <h4 className="p-4" style={{ fontSize: '24px', fontWeight: 'bold', color: '#333', fontFamily: 'Lucida Bright'}}>
              SHOPEYMART
            </h4>
          </div>
        </div>
      </div>


      <div className="row bg-light footer-header">
        <div className="col-sm-4 footer-body">
          <div className="p-4 isi">
            <p style={{ textAlign: 'justify' }}>
              Shopeymart We are your premier destination for all your needs. Offering a wide range of high-quality products
              or services, we are committed to providing an unforgettable shopping experience.
              Each purchase you make contributes positively to enhancing your lifestyle and well-being.
            </p>
          </div>

          <div className="p-4 d-flex isi">
            <div className="about me-5 text-black">
              <h5>About Us</h5>
              <Link to="#faq">FAQ</Link>
              <Link to="/address">Our Address</Link>
              <Link to="/contact">Contact Us</Link>
            </div>
            <div className="program">
              <h5>Program</h5>
              <Link to="/talent-service">Talent as a Service</Link>
              <Link to="/training-service">Training as a Service</Link>
            </div>
          </div>
        </div>

        <div className="col-sm-4 footer-body">
          <div className="p-4 isi">
            <h5 className="fw-bold px-4 pb-2">Office</h5>
            <p className="px-4">
              <i className="bi bi-telephone-fill" style={{ paddingRight: '10px' }}></i>(+123) 456-7890
            </p>
            <p className="px-4">
              <i className="bi bi-geo-alt-fill" style={{ paddingRight: '10px' }}></i>
              Menara Tower 86 Pasar Minggu Ragunan - Jakarta Selatan 12940
            </p>
          </div>

          <div className="px-4 pb-2 service">
            <h5 className="fw-bold px-4">Service</h5>
            <Link to="/remote-development">Remote Development</Link>
            <Link to="/talent-service">Talent as a Service</Link>
            <Link to="/training-service">Training as a Service</Link>
            <Link to="/mentoring">Mentoring</Link>
          </div>
        </div>

        <div className="col-sm-4 boot">
          <div className="p-4">
            <h5 className="fw-bold px-4 pb-3">Bootcamp</h5>
            <p className="px-4">
              <i className="bi bi-geo-alt-fill" style={{ paddingRight: '10px' }}></i>
              Jl. H. Dahlan No.75, RT.8 / RW.4, Ragunan, Ps. Minggu, Kota
              Jakarta Selatan
            </p>
          </div>
          <div className="link">
            <h5 className="fw-bold px-5 pb-3">Connect with Us!</h5>
            <Link to="#"><i className="bi bi-instagram ms-5"></i></Link>
            <Link to="#"><i className="bi bi-linkedin ms-5"></i></Link>
            <Link to="#"><i className="bi bi-twitter ms-5"></i></Link>
            <Link to="#"><i className="bi bi-facebook ms-5"></i></Link>
            <Link to="#"><i className="bi bi-youtube ms-5"></i></Link>
            <Link to="#"><i className="bi bi-discord ms-5"></i></Link>
          </div>
        </div>

        <div className="text-center mt-4 mb-3 text-muted">
          Copyright &copy; 2024 &mdash; Ryan Ramadhan || Batch 14
        </div>
      </div>
    </div>
  );
}

export default Footer;
