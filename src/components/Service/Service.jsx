import Img1 from '../../assets/img/os.png';
import Img2 from '../../assets/img/os2.jpg';
import Img3 from '../../assets/img/os.jpg';

function Service() {
    return(

      <div id="carouselExampleDark" className="carousel carousel-dark slide my-5" style={{ marginTop: '2.5em' }}>
        <h5 className="card-title text-center mb-4" style={{ marginTop: '10em' }}>Our Service</h5>
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div
            className="carousel-item active justify-content-center"
            style={{display: 'flex'}}
            data-bs-interval="10000"
          >
            <img
              src={Img1}
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Kebutuhan Rumah Tangga </h5>
              <p>
                Kami Menyediakan berbagai macam kebutuhan rumah tangga
              </p>
              <a href="#" className="btn btn-warning mb-3">Learn More</a>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img
              src={Img2}
              class="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Kebutuhan Sekolah</h5>
              <p>
                Kami menyediakan kebutuhan sekolah 
              </p>
              <a href="#" className="btn btn-warning mb-3">Learn More</a>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={Img3}
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Kebutuhan Fashion</h5>
              <p>
                Kami menyediakn kebutuhan Fashion
              </p>
              <a href="#" className="btn btn-warning mb-3">Learn More</a>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    );
}

export default Service;