import { Fragment } from "react";
import { Link } from "react-router-dom"


export default function ProductsPage() {
    return (
<Fragment>

    <section className="py-5 text-center container">
        <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
                <h1 className="fw-light"><strong>Our Kebabs</strong></h1>
                <p className="lead text-muted">Explore our wide variety of handmade Kebabs. You'll be amazed at how many you can find here from the comfort of your web browser.</p>
                <p>
                    <a href="#" className="btn btn-primary my-2">Discover our Blog!</a>
                    <a href="#" className="btn btn-secondary my-2">Find where we are</a>
                </p>
            </div>
        </div>
    </section>

  <div className="album py-5 bg-light">
    <div className="container">

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div className="col">
          <div className="card shadow-sm">
            <img className="card-img-top" width="100%" height="225" preserveAspectRatio="xMidYMid slice" focusable="false" src="assets/kebab.jpg" />

            <div className="card-body product-card">
              <p className="card-text">Lorem ipsum dolor sit.</p>
              <div className="d-flex justify-content-between align-items-center">
                <Link className="book-button" to="/bookings/0">Book</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow-sm">
          <img className="card-img-top" width="100%" height="225" preserveAspectRatio="xMidYMid slice" focusable="false" src="assets/kebab2.jpg" />

            <div className="card-body product-card">
              <p className="card-text">Lorem ipsum dolor sit.</p>
              <div className="d-flex justify-content-between align-items-center">
              <Link className="book-button" to="/bookings/1">Book</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow-sm">
          <img className="card-img-top" width="100%" height="225" preserveAspectRatio="xMidYMid slice" focusable="false" src="assets/kebab3.jpg" />

            <div className="card-body product-card">
              <p className="card-text">Lorem ipsum dolor sit.</p>
              <div className="d-flex justify-content-between align-items-center">
              <Link className="book-button" to="/bookings/2">Book</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card shadow-sm">
          <img className="card-img-top" width="100%" height="225" preserveAspectRatio="xMidYMid slice" focusable="false" src="assets/kebab-pita.jpg" />

            <div className="card-body product-card">
              <p className="card-text">Lorem ipsum dolor sit.</p>
              <div className="d-flex justify-content-between align-items-center">
              <Link className="book-button" to="/bookings/3">Book</Link>
              </div>
            </div>
          </div>
        </div><div className="col">
          <div className="card shadow-sm">
          <img className="card-img-top" width="100%" height="225" preserveAspectRatio="xMidYMid slice" focusable="false" src="assets/Nun_Kebab_Milano.jpg" />

            <div className="card-body product-card">
              <p className="card-text">Lorem ipsum dolor sit.</p>
              <div className="d-flex justify-content-between align-items-center">
              <Link className="book-button" to="/bookings/4">Book</Link>
              </div>
            </div>
          </div>
        </div><div className="col">
          <div className="card shadow-sm">
          <img className="card-img-top" width="100%" height="225" preserveAspectRatio="xMidYMid slice" focusable="false" src="assets/kebab-giallozafferano.jpeg" />

            <div className="card-body product-card">
              <p className="card-text">Lorem ipsum dolor sit.</p>
              <div className="d-flex justify-content-between align-items-center">
              <Link className="book-button" to="/bookings/5">Book</Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>

</Fragment>
    );
}

