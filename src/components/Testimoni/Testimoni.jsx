import React from "react";
import Caro1 from '../../assets/img/caro1.jpg';
import Caro2 from '../../assets/img/caro2.jpg';
import Caro3 from '../../assets/img/caro3.jpg';

function Testimoni() {
    return(
        <div>

        <h1 className="text-center ms-5" style={{ marginTop: '2.5em' }}>Testimonial</h1>
        <p className="text-center my-3">
          Berbagai review positif dari para pelanggan kami :
        </p>
  
        <div className="row mb-5"style={{ marginTop: '2.5em' }} >
          <div className="col-md-12">
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-ride="carousel"
            >
              <ol className="carousel-indicators car">
                <a
                  data-target="#carouselExampleIndicators"
                  data-slide-to="0"
                  className="btn bi bi-chevron-left active"
                ></a>
                <a
                  data-target="#carouselExampleIndicators"
                  data-slide-to="1"
                  className="btn bi bi-chevron-right"
                ></a>
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="single-box">
                        <div className="img-area">
                          <img src={Caro1} alt="" />
                        </div>
                        <div className="img-text">
                          <p className="star"><i class="bi bi-star-fill" style={{ color: 'orange' }}></i><i class="bi bi-star-fill" style={{ color: 'orange' }}></i><i class="bi bi-star-fill"  style={{ color: 'orange' }}></i><i class="bi bi-star-fill"  style={{ color: 'orange' }}></i><i class="bi bi-star-fill"  style={{ color: 'orange' }}></i></p>
                          <p>
                            “Keren , Shopeymart Menyediakan semua kebutuhan rumah tangga, sekolah dan banyak lagi dan itu bisa memudahkan kami sebagai konsumen”
                          </p>
                          <h2>Ryan Joo, Cikini</h2>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4" >
                      <div className="single-box">
                        <div className="img-area">
                          <img src={Caro2} alt="" />
                        </div>
                        <div className="img-text">
                          <p className="star"><i class="bi bi-star-fill" style={{ color: 'orange' }}></i><i class="bi bi-star-fill"  style={{ color: 'orange' }}></i><i class="bi bi-star-fill"  style={{ color: 'orange' }}></i><i class="bi bi-star-fill"  style={{ color: 'orange' }}></i></p>
                          <p>
                            "Saya sudah menggunakan Shopeymart selama setahun terakhir dan saya sangat puas dengan pengalaman berbelanja online di aplikasi ini. Pilihan produknya beragam, proses pembelian mudah, dan pengiriman selalu tepat waktu. Pelayanannya luar biasa!"
                          </p>
                          <h2>Joo, Ragunan</h2>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="single-box">
                        <div className="img-area">
                          <img src={Caro3} alt="" />
                        </div>
                        <div className="img-text">
                          <p className="star"><i class="bi bi-star-fill" style={{ color: 'orange' }}></i><i class="bi bi-star-fill" style={{ color: 'orange' }}></i><i class="bi bi-star-fill"  style={{ color: 'orange' }}></i><i class="bi bi-star-fill"  style={{ color: 'orange' }}></i><i class="bi bi-star-fill"  style={{ color: 'orange' }}></i></p>
                          <p>
                          "Saya terkesan dengan kecepatan pengiriman Shopeymart. Pesanan saya tiba lebih cepat dari perkiraan, dan barangnya dalam kondisi sempurna. Layanan pelanggan juga responsif. Sangat direkomendasikan!"
                          </p>
                          <h2>Ramadhan, Tebet</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="single-box">
                        <div className="img-area">
                          <img src={Caro1} alt="" />
                        </div>
                        <div className="img-text">
                          <p className="star"><i class="bi bi-star-fill" style={{ color: 'orange' }}></i><i class="bi bi-star-fill"  style={{ color: 'orange' }}></i><i class="bi bi-star-fill"  style={{ color: 'orange' }}></i><i class="bi bi-star-fill"  style={{ color: 'orange' }}></i></p>
                          <p>
                          "Saya adalah anggota program loyalitas Shopeymart, dan saya merasa sangat diuntungkan. Diskon eksklusif, penawaran spesial, dan hadiah-hadiah menarik membuat setiap pembelian menjadi lebih berharga. Saya benar-benar merasa dihargai sebagai pelanggan."
                          </p>
                          <h2>Messi, Cibinong</h2>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="single-box">
                        <div className="img-area">
                          <img src={Caro2} alt="" />
                        </div>
                        <div className="img-text">
                          <p className="star"><i class="bi bi-star-fill" style={{ color: 'orange' }}></i><i class="bi bi-star-fill" style={{ color: 'orange' }}></i><i class="bi bi-star-fill"  style={{ color: 'orange' }}></i><i class="bi bi-star-fill"  style={{ color: 'orange' }}></i><i class="bi bi-star-fill"  style={{ color: 'orange' }}></i></p>
                          <p>
                              "Saya baru saja mencoba Shopeymart dan saya langsung terkesan! Antarmukanya intuitif, saya dapat dengan cepat menemukan produk yang saya cari, dan proses checkoutnya sangat lancar. Aplikasi belanja online terbaik yang pernah saya gunakan."
                          </p>
                          <h2>Ronaldo, Cakung</h2>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="single-box">
                        <div className="img-area">
                          <img src={Caro3} alt="" />
                        </div>
                        <div className="img-text">
                          <p className="star"><i class="bi bi-star-fill" style={{ color: 'orange' }}></i><i class="bi bi-star-fill"  style={{ color: 'orange' }}></i><i class="bi bi-star-fill"  style={{ color: 'orange' }}></i><i class="bi bi-star-fill"  style={{ color: 'orange' }}></i></p>
                          <p>
                          "Sebagai penjual di Shopeymart, saya merasa aplikasi ini memberikan platform yang sangat baik untuk memasarkan produk saya. Fitur-fitur manajemen toko yang mudah digunakan membuat saya dapat fokus pada pengembangan bisnis. Terima kasih, Shopeymart!"
                          </p>
                          <h2>Neymar, Jatinegara</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
  
    );
    
}

export default Testimoni