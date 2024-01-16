// DetailProduct.js
import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from React Router
import styles from './style.module.css';
import Card3 from '../../assets/img/card3.jpg';
import Styling from '../hoc/HiegherComp';
import WrappedComp from '../hoc/WrappedComp';

function DetailProduct3() {
  const StyledWrappedComp = Styling(WrappedComp, { color: "black", fontWeight: "bold" });

  return (
    <div className={`container ${styles.container} d-flex`}>
      <div className={`row ${styles.row} d-flex`}>
        <div className={`col-xs-12 col-md-6 item-photo ${styles.itemPhoto}`} style={{paddingRight: '5em'}}>
          <img src={Card3} className="card-img-top mt-2 " style={{ maxWidth: '100%' }} alt="..." />
        </div>
        <div className={`col-xs-12 col-md-6 ${styles.colXs6}`}>
          <h3>Kopi Hitam</h3>
          <h5 style={{ color: '#337ab7' }}>Merk <a href="#">Robusta</a> · <small style={{ color: '#337ab7' }}>(5054 ventas)</small></h5>

          <h6 className={`title-price ${styles.titlePrice}`}><small>PRECIO OFERTA</small></h6>
          <h3 style={{ marginTop: '0px' }}>Rp. 10.000</h3>

          <div className={`section ${styles.section}`}>
            <h6 className={`title-attr ${styles.titleAttr}`} style={{ marginTop: '15px' }} ><small>COLOR</small></h6>
            <div>
              <div className={`attr ${styles.attr}`} style={{ width: '25px', background: '#5a5a5a' }}></div>
              <div className={`attr ${styles.attr}`} style={{ width: '25px', background: 'white' }}></div>
            </div>
          </div>
          <div className={`section ${styles.section}`} style={{ paddingBottom: '5px' }}>
            <h6 className={`title-attr ${styles.titleAttr}`}><small>Capacity Memori</small></h6>
            <div>
              <div className={`attr2 ${styles.attr2}`}>1 </div>
              <div className={`attr2 ${styles.attr2}`}>2</div>
            </div>
          </div>
          <div className={`section ${styles.section}`} style={{ paddingBottom: '20px' }}>
            <h6 className={`title-attr ${styles.titleAttr}`}><small>Quantity</small></h6>
            <div>
              <div className={`btn-minus ${styles.btnMinus}`}><span className="glyphicon glyphicon-minus"></span></div>
              <input value="1" />
              <div className={`btn-plus ${styles.btnPlus}`}><span className="glyphicon glyphicon-plus"></span></div>
            </div>
          </div>

          <div className={`section ${styles.section}`} style={{ paddingBottom: '20px' }}>
            <Link rel="stylesheet" to='/transaction'>
              <StyledWrappedComp style={{ marginRight: '20px' }} />
            </Link>
            <h6 style={{marginTop: '1em'}}><Link to="/dashboard" className={styles.link}><span className="glyphicon glyphicon-heart-empty " style={{ cursor: 'pointer' }}></span> Back To Dashboard</Link></h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailProduct3;
