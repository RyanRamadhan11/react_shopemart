import React from 'react';
import { Link } from 'react-router-dom';

// const Home = () => {
    function Button(){
  return (
    <div className='container-fluid d-flex align-items-center justify-content-center' style={{ marginTop: '10em' }}>
      <div style={{ backgroundColor: '#B0C4DE', width: '50%', textAlign: 'center', padding: '30px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        <h1 style={{ marginBottom: '1em', color: '#333' }}>Form Add Register</h1>
        <Link to="/register" style={{ textDecoration: 'none' }}>
          <button style={{ marginTop: '1em', padding: '10px 20px', fontSize: '16px', backgroundColor: 'black', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', transition: 'background-color 0.3s' }}>
            Go to Form
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Button;
