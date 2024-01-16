

import React, { useState } from "react";
import { Link } from 'react-router-dom';

import image1 from "../../assets/img/card1.jpeg";
import image2 from "../../assets/img/card2.jpg";
import image3 from "../../assets/img/card3.jpg";

import { useDispatch, useSelector } from 'react-redux';
import { addToCart, increaseQuantity, decreaseQuantity , cancelTransaction, confirmTransaction, updateTotal } from './Reducers'; // Sesuaikan dengan path yang benar


const Transaction = () => {

  const dispatch = useDispatch();
  const cart = useSelector(state => state.shop.cart);
  const transaction = useSelector(state => state.shop.transaction);

  const [selectedProductId, setSelectedProductId] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const [quantity1, setQuantity1] = useState(1);
  const [totalPrice1, setTotalPrice1] = useState(50000);

  const [quantity2, setQuantity2] = useState(1);
  const [totalPrice2, setTotalPrice2] = useState(1500000);

  const [quantity3, setQuantity3] = useState(1);
  const [totalPrice3, setTotalPrice3] = useState(10000);

  const openModal = (productId) => {
    setSelectedProductId(productId);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedProductId(null);
    setShowModal(false);
  };

  const handleAddToCart = () => {
    const selectedQuantity = getSelectedQuantity();
    dispatch(addToCart({ productId: selectedProductId, quantity: selectedQuantity }));
    alert(`Anda telah membeli ${selectedQuantity} produk.`);
    closeModal();
  };

  const handleBuyButtonClick = () => {
    const selectedQuantity = getSelectedQuantity();

    const confirmation = window.confirm(
      `Apakah Anda yakin ingin membeli ${selectedQuantity} produk?`
    );

    if (confirmation) {
      // Continue with the purchase logic
      dispatch(addToCart({ productId: selectedProductId, quantity: selectedQuantity }));

      // Show a success message to the user
      alert(`Anda telah membeli ${selectedQuantity} produk.`);

      // Close the modal
      closeModal();
    } else {
      // User canceled the purchase
    }
  };

  const handleConfirmButtonClick = () => {
    // Additional logic if needed
    dispatch(confirmTransaction());
    closeModal();
  };

  const handleCancelButtonClick = () => {
    // Additional logic if needed
    dispatch(cancelTransaction());
    closeModal();
  };

  const getSelectedQuantity = () => {
    switch (selectedProductId) {
      case 1:
        return quantity1;
      case 2:
        return quantity2;
      case 3:
        return quantity3;
      default:
        return 1;
    }
  };

  const handleIncreaseQuantity = (productNumber) => {
    switch (productNumber) {
      case 1:
        setQuantity1(quantity1 + 1);
        setTotalPrice1((quantity1 + 1) * 50000);
        break;
      case 2:
        setQuantity2(quantity2 + 1);
        setTotalPrice2((quantity2 + 1) * 1500000);
        break;
      case 3:
        setQuantity3(quantity3 + 1);
        setTotalPrice3((quantity3 + 1) * 10000);
        break;
      default:
        break;
    }
  };
  
  const handleDecreaseQuantity = (productNumber) => {
    switch (productNumber) {
      case 1:
        if (quantity1 > 1) {
          setQuantity1(quantity1 - 1);
          setTotalPrice1((quantity1 - 1) * 50000);
        }
        break;
      case 2:
        if (quantity2 > 1) {
          setQuantity2(quantity2 - 1);
          setTotalPrice2((quantity2 - 1) * 1500000);
        }
        break;
      case 3:
        if (quantity3 > 1) {
          setQuantity3(quantity3 - 1);
          setTotalPrice3((quantity3 - 1) * 10000);
        }
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div className="container-fluid" style={{ marginBottom: '1em' }}>
        <h2 className="text-center" style={{ padding: "10px", marginTop: '1em', marginBottom: '1em'}}>
          Macam Macam Product
        </h2>

        <div
          className="text-center"
          style={{ display: "flex", justifyContent: "center", gap: "10px" }}
        >
          {/* card1 */}
          <div className="card" style={{ width: "18rem", margin: "10px" }}>
            <img src={image1} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Oreo</h5>
              <p className="card-text" style={{ marginTop: '1.4em' }}>Kategori : Makanan</p>
              <div className="price-info" style={{ marginBottom: "10px" }}>
                <p className="price">Rp.50.000</p>
                <p className="sold">terjual 1000 kali</p>
              </div>
              <button
                className="btn btn-primary"
                onClick={() => openModal(1)}
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Order
              </button>
             
              <Link to="/detailProduct" className="btn btn-primary mt-2" onClick={() => handleAddToCart(2)}>
                Detail Produk
              </Link>
            </div>
          </div>

          {/* Modal */}
          <div
            className={`modal ${showModal ? "show" : ""}`}
            tabIndex="-1"
            role="dialog"
            style={{ display: showModal ? "block" : "none" }}
          >
            <div className="modal-dialog modal-xl">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Oreo</h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    onClick={closeModal}
                  ></button>
                </div>
                <div className="modal-body">
                  <div className="d-flex">
                    <img
                      src={image1}
                      className="img-fluid mr-3"
                      alt="..."
                      style={{ maxWidth: "50%" }}
                    />
                    <div>
                      <h2>Oreo</h2>
                      <p style={{ margin: "10px", textAlign: 'justify' }}>
                      Oreo adalah merek biskuit yang terkenal dan diproduksi oleh perusahaan makanan internasional, Mondelez International,
                      Biskuit Oreo memiliki ciri khas dengan desain sandwichnya yang terdiri dari dua lapisan tipis biskuit cokelat yang diisi dengan lapisan krim putih 
                      </p>
                      <div>
                        <p>
                          <strong>Harga:</strong> Rp. 50.000
                        </p>
                        <p>
                          <strong>Jumlah Terjual:</strong> 1000
                        </p>
                        <p>
                          <strong>Sisa Produk:</strong> 500
                        </p>
                        <div className="quantity-input">
                          <button
                            className="btn btn-secondary"
                            onClick={() => handleDecreaseQuantity(1)}
                          >
                            -
                          </button>
                          <span>{quantity1}</span>
                          <button
                            className="btn btn-secondary"
                            onClick={() => handleIncreaseQuantity(1)}
                          >
                            +
                          </button>
                        </div>
                        <p>
                          <strong>Total Harga:</strong> Rp. {totalPrice1}
                        </p>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                            onClick={closeModal}
                          >
                            Tutup
                          </button>
                          <button
                            type="button"
                            className="btn btn-primary"
                            onClick={handleBuyButtonClick}
                          >
                            Order
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* card2 */}
          <div className="card" style={{ width: "18rem", margin: "10px" }}>
            <img src={image2} className="card-img-top" style={{ height: '18em' }} alt="..." />
            <div className="card-body">
              <h5 className="card-title">Smartphone</h5>
              <p className="card-text" style={{ marginTop: '1.4em' }}>Kategori : Elektronik</p>
              <div className="price-info" style={{ marginBottom: "10px" }}>
                <p className="price">Rp. 1.500.000</p>
                <p className="sold">Terjual 25</p>
              </div>
              <button
                className="btn btn-primary"
                onClick={() => openModal(2)}
                data-bs-toggle="modal"
                data-bs-target="#exampleModal2"
              >
                Order
              </button>
              <Link to="/detailProduct" className="btn btn-primary mt-2" style={{ textDecoration: 'none' }} onClick={() => handleAddToCart(2)}>
                Detail Product
              </Link>
            </div>
          </div>

          {/* Modal 2 */}
          <div
            className={`modal ${showModal ? "show" : ""}`}
            id="exampleModal2"
            tabIndex="-1"
          >
            <div className="modal-dialog modal-xl">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Smartphone</h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    onClick={closeModal}
                  ></button>
                </div>
                <div className="modal-body">
                  <div className="d-flex">
                    <img
                      src={image2}
                      className="img-fluid mr-3"
                      alt="..."
                      style={{ maxWidth: "50%" }}
                    />
                    <div>
                      <h2>Smartphone</h2>
                      <p style={{ margin: "10px", textAlign: 'justify'}}>
                        Deskripsi: Smartphone adalah perangkat pintar yang berfungsi sebagai telepon seluler, namun juga menyediakan berbagai fitur tambahan seperti akses internet, kamera, aplikasi, dan banyak lagi Dengan layar sentuh dan antarmuka yang intuitif
                      </p>
                      <div>
                        <p>
                          <strong>Harga:</strong> Rp. 1.500.000
                        </p>
                        <p>
                          <strong>Jumlah Terjual:</strong> 25
                        </p>
                        <p>
                          <strong>Sisa Produk:</strong> 14
                        </p>
                        <div className="quantity-input">
                          <button
                            className="btn btn-secondary"
                            onClick={() => handleDecreaseQuantity(2)}
                          >
                            -
                          </button>
                          <span>{quantity2}</span>
                          <button
                            className="btn btn-secondary"
                            onClick={() => handleIncreaseQuantity(2)}
                          >
                            +
                          </button>
                        </div>
                        <p>
                          <strong>Total Harga:</strong> Rp. {totalPrice2}
                        </p>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                            onClick={closeModal}
                          >
                            Tutup
                          </button>
                          <button
                            type="button"
                            className="btn btn-primary"
                            onClick={handleBuyButtonClick}
                          >
                            Order
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* card3 */}
          <div className="card" style={{ width: "18rem", margin: "10px" }}>
            <img src={image3} className="card-img-top" style={{ height: '18em' }} alt="..." />
            <div className="card-body">
              <h5 className="card-title">Kopi</h5>
              <p className="card-text" style={{ marginTop: '1.4em' }}>Kategori : Minuman</p>
              <div className="price-info" style={{ marginBottom: "10px" }}>
                <p className="price">Rp. 10.000</p>
                <p className="sold">Terjual 122</p>
              </div>
              <button
                className="btn btn-primary"
                onClick={() => openModal(3)}
                data-bs-toggle="modal"
                data-bs-target="#exampleModal3"
              >
                Order
              </button>
           
              <Link to="/detailProduct" className="btn btn-primary mt-2" style={{ textDecoration: 'none' }} onClick={() => handleAddToCart(3)}>
                Detail Produk
              </Link>
            </div>
          </div>

          {/* Modal 3 */}
          <div
            className={`modal ${showModal ? "show" : ""}`}
            id="exampleModal3"
            tabIndex="-1"
          >
            <div className="modal-dialog modal-xl">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">
                    Kopi
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    onClick={closeModal}
                  ></button>
                </div>
                <div className="modal-body">
                  <div className="d-flex">
                    <img
                      src={image3}
                      className="img-fluid mr-3"
                      alt="..."
                      style={{ maxWidth: "50%" }}
                    />
                    <div>
                      <h2>Kopi</h2>
                      <p style={{ margin: "10px", textAlign: 'justify' }}>
                        Deskripsi: Kopi instan adalah produk kopi yang telah diproses sebelumnya untuk mempermudah persiapan. Biasanya berbentuk bubuk atau kristal, cukup dicampur dengan air panas untuk segera menikmati secangkir kopi tanpa perlu menyeduh dengan metode tradisional.
                      </p>
                      <div>
                        <p>
                          <strong>Harga:</strong> Rp. 10.000
                        </p>
                        <p>
                          <strong>Jumlah Terjual:</strong> 122
                        </p>
                        <p>
                          <strong>Sisa Produk:</strong> 5
                        </p>
                        <div className="quantity-input">
                          <button
                            className="btn btn-secondary"
                            onClick={() => handleDecreaseQuantity(3)}
                          >
                            -
                          </button>
                          <span>{quantity3}</span>
                          <button
                            className="btn btn-secondary"
                            onClick={() => handleIncreaseQuantity(3)}
                          >
                            +
                          </button>
                        </div>
                        <p>
                          <strong>Total Harga:</strong> Rp. {totalPrice3}
                        </p>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                            onClick={closeModal}
                          >
                            Tutup
                          </button>
                          <button
                            type="button"
                            className="btn btn-primary"
                            onClick={handleBuyButtonClick}
                          >
                            Order
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          <div className="modal-footer mb-5"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Transaction;
