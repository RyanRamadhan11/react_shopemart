import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Card1 from '../../assets/img/card1.jpeg';
import Card2 from '../../assets/img/card2.jpg';
import Card3 from '../../assets/img/card3.jpg';
import Card4 from '../../assets/img/card4.jpg';
import Card5 from '../../assets/img/card5.jpg';
import { Link } from 'react-router-dom';

function Card() {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

    return (
      <div className="row justify-content-between" style={{ marginBottom: '80px', marginTop: '8em', padding: '20px 150px' }}>
        <h5 className="card-title text-center mb-2" style={{fontFamily: 'sans-serif', fontSize: '24px', paddingBottom: '2em'}}>
          Our Product 
        </h5>
  
        <div className="card" style={{ width: '18rem' }}>
          <img src={Card1} className="card-img-top mt-2" alt="..." />
          <div className="card-body">
            <h3 className="card-title">Oreo</h3>
            <h5 style={{ marginTop: '20px' }}>Rp. 20.000</h5>
            <p className="card-text" style={{textAlign: 'justify'}}>
             Oreo adalah merek biskuit yang terkenal dan diproduksi oleh perusahaan makanan internasional, Mondelez International,
             Biskuit Oreo memiliki ciri khas dengan desain sandwichnya yang terdiri dari dua lapisan tipis biskuit cokelat yang diisi dengan lapisan krim putih 
            </p>
            <Link to="/detailProduct" className="btn btn-primary mt-2" style={{ textDecoration: 'none' }}>
              Detail Product
            </Link>
          </div>
        </div>
  
        <div className="card" style={{ width: '18rem' }}>
          <img src={Card2} className="card-img-top mt-2" style={{height: '15em'}} alt="..." />
          <div className="card-body">
            <h3 className="card-title mt-3">Smartphone</h3>
            <h5 style={{ marginTop: '20px' }}>Rp. 1.320.000</h5>
            <p className="card-text" style={{textAlign: 'justify'}}>
            Deskripsi: Smartphone adalah perangkat pintar yang berfungsi sebagai telepon seluler, namun juga menyediakan berbagai 
            fitur tambahan seperti akses internet, kamera, aplikasi, dan banyak lagi Dengan layar sentuh dan antarmuka yang intuitif</p>
            <Link to="/detailProduct" className="btn btn-primary mt-2" style={{ textDecoration: 'none' }} onClick={handleShowModal}>
              Detail Product
            </Link>
          </div>
        </div>
  
        <div className="card" style={{ width: '18rem' }}>
          <img src={Card3} className="card-img-top mt-2" style={{height: '15em'}} alt="..." />
          <div className="card-body">
            <h3 className="card-title mt-3">Kopi </h3>
            <h5 style={{ marginTop: '20px' }}>Rp. 40.000</h5>
            <p className="card-text" style={{textAlign: 'justify'}}>
             Deskripsi: Kopi instan adalah produk kopi yang telah diproses sebelumnya untuk mempermudah persiapan. 
             Biasanya berbentuk bubuk atau kristal, cukup dicampur dengan air panas untuk segera menikmati secangkir kopi tanpa perlu menyeduh dengan metode tradisional.</p>
             <Link to="/detailProduct" className="btn btn-primary mt-2" style={{ textDecoration: 'none' }} onClick={handleShowModal}>
              Detail Product
            </Link>
          </div>
        </div>
  
        <div className="card" style={{ width: '18rem' }}>
          <img src={Card4} className="card-img-top " alt="..." />
          <div className="card-body">
            <h3 className="card-title mt-2">Sneakers</h3>
            <h5 style={{ marginTop: '20px' }}>Rp. 80.000</h5>
            <p className="card-text" style={{textAlign: 'justify'}}>
            Deskripsi: Sneakers, atau sepatu olahraga, adalah alas kaki yang dirancang untuk aktivitas fisik atau gaya kasual.
             Dikenal dengan desain yang nyaman dan seringkali dilengkapi dengan teknologi khusus, sneakers menjadi populer di kalangan semua usia.</p>
             <Link to="/detailProduct" className="btn btn-primary mt-4" style={{ textDecoration: 'none' }} onClick={handleShowModal}>
              Detail Product
            </Link>
          </div>
        </div>
  
        <div className="card" style={{ width: '18rem' }}>
          <img src={Card5} className="card-img-top mt-2" style={{height: '15em'}} alt="..." />
          <div className="card-body">
            <h3 className="card-title mt-3">Laptop Ultrabook</h3>
            <h5 style={{ marginTop: '20px'}}>Rp. 1.212.000</h5>
            <p className="card-text" style={{textAlign: 'justify'}}>
            Deskripsi: Laptop ultrabook adalah varian laptop yang dirancang dengan fokus pada portabilitas, daya tahan baterai, 
            dan kinerja tinggi. Tipis, ringan, dan seringkali memiliki desain premium, ultrabook cocok untuk pengguna yang membutuhkan mobilitas tinggi.</p>
            <Link to="/detailProduct" className="btn btn-primary mt-4" style={{ textDecoration: 'none' }} onClick={handleShowModal}>
              Detail Product
            </Link>
          </div>
        </div>

        {/* Modal */}
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Detail Produk</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* Isi dengan informasi detail produk */}
            <p>Deskripsi detail produk...</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Tutup
            </Button>
          </Modal.Footer>
        </Modal>

      </div>
    );
  }
  
  export default Card;
  