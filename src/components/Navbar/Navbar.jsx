import React from 'react';
import logo from '../../assets/img/shopping.png';
import { Link } from 'react-router-dom';

import styles from './Style.module.css'; // Import modul CSS

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fw-bold">
      <div className="container-fluid bg-light brand">
        <img
          src={logo}
          alt=""
          style={{ width: '60px', height: '60px' }}
        ></img>
        <Link to="/" className="navbar-brand" style={{ marginLeft: '1em', color: '#ff4500', fontSize: '32px', fontWeight: 'bold', fontFamily: 'Brush Script M, cursive' }}>
          Shopeymart
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-5" style={{ color: '#ff4500' }}>
            <Link to="/dashboard" className="nav-link" style={{ textDecoration: 'none', color: "black", fontWeight: 'bold' }}>
              Home
            </Link>
            <Link to="/" className="nav-link" style={{ textDecoration: 'none', color: "black", fontWeight: 'bold' }}>
              About Us
            </Link>
            <Link to="/category" className="nav-link" style={{ textDecoration: 'none', color: "black", fontWeight: 'bold' }}>
              Category
            </Link>
            <Link to="/transaction" className="nav-link" style={{ textDecoration: 'none', color: "black", fontWeight: 'bold' }}>
              Transaction
            </Link>
            <Link to="/category" className="nav-link" style={{ textDecoration: 'none', color: "black", fontWeight: 'bold' }}>
              Product
            </Link>
            <Link to="/category" className="nav-link" style={{ textDecoration: 'none', color: "black", fontWeight: 'bold' }}>
              Store
            </Link>
            <li className="nav-item dropdown" style={{ textDecoration: 'none', color: "black", fontWeight: 'bold' }}>
              <Link
                to="/"
                className="nav-link dropdown-toggle px-4"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ textDecoration: 'none', color: "black", fontWeight: 'bold' }}>
                Order
              </Link>
              <ul className="dropdown-menu p-3">
                <li><Link className="dropdown-item" to="#">Order</Link></li>
                <li><Link className="dropdown-item" to="#">Order Detail</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li>
                  <Link className="dropdown-item" to="#">Something else here</Link>
                </li>
              </ul>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            ></input>
            <button className="btn btn-outline-success" style={{ marginRight: '1em' }} type="submit">
              Search
            </button>
          </form>
          <Link to="/" className={`${styles.link_login}`}>
            <button className="btn" style={{color: 'white', fontWeight: 'bold'}} type="submit">
              LOGIN
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
