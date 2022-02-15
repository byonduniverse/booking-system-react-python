import { Fragment } from "react";
import { Link } from "react-router-dom"


export default function ProductsPage() {
    return (
<Fragment>

    <section class="py-5 text-center container">
        <div class="row py-lg-5">
            <div class="col-lg-6 col-md-8 mx-auto">
                <h1 class="fw-light"><strong>Our Kebabs</strong></h1>
                <p class="lead text-muted">Explore our wide variety of handmade Kebabs. You'll be amazed at how many you can find here from the comfort of your web browser.</p>
                <p>
                    <a href="#" class="btn btn-primary my-2">Discover our Blog!</a>
                    <a href="#" class="btn btn-secondary my-2">Find where we are</a>
                </p>
            </div>
        </div>
    </section>

  <div class="album py-5 bg-light">
    <div class="container">

      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div class="col">
          <div class="card shadow-sm">
            <img class="card-img-top" width="100%" height="225" preserveAspectRatio="xMidYMid slice" focusable="false" src="assets/kebab.jpg" />

            <div class="card-body product-card">
              <p class="card-text">Lorem ipsum dolor sit.</p>
              <div class="d-flex justify-content-between align-items-center">
                <Link class="book-button" to="/bookings/0">Book</Link>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
          <img class="card-img-top" width="100%" height="225" preserveAspectRatio="xMidYMid slice" focusable="false" src="assets/kebab2.jpg" />

            <div class="card-body product-card">
              <p class="card-text">Lorem ipsum dolor sit.</p>
              <div class="d-flex justify-content-between align-items-center">
              <Link class="book-button" to="/bookings/1">Book</Link>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
          <img class="card-img-top" width="100%" height="225" preserveAspectRatio="xMidYMid slice" focusable="false" src="assets/kebab3.jpg" />

            <div class="card-body product-card">
              <p class="card-text">Lorem ipsum dolor sit.</p>
              <div class="d-flex justify-content-between align-items-center">
              <Link class="book-button" to="/bookings/2">Book</Link>
              </div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card shadow-sm">
          <img class="card-img-top" width="100%" height="225" preserveAspectRatio="xMidYMid slice" focusable="false" src="assets/kebab-pita.jpg" />

            <div class="card-body product-card">
              <p class="card-text">Lorem ipsum dolor sit.</p>
              <div class="d-flex justify-content-between align-items-center">
              <Link class="book-button" to="/bookings/3">Book</Link>
              </div>
            </div>
          </div>
        </div><div class="col">
          <div class="card shadow-sm">
          <img class="card-img-top" width="100%" height="225" preserveAspectRatio="xMidYMid slice" focusable="false" src="assets/Nun_Kebab_Milano.jpg" />

            <div class="card-body product-card">
              <p class="card-text">Lorem ipsum dolor sit.</p>
              <div class="d-flex justify-content-between align-items-center">
              <Link class="book-button" to="/bookings/4">Book</Link>
              </div>
            </div>
          </div>
        </div><div class="col">
          <div class="card shadow-sm">
          <img class="card-img-top" width="100%" height="225" preserveAspectRatio="xMidYMid slice" focusable="false" src="assets/kebab-giallozafferano.jpeg" />

            <div class="card-body product-card">
              <p class="card-text">Lorem ipsum dolor sit.</p>
              <div class="d-flex justify-content-between align-items-center">
              <Link class="book-button" to="/bookings/5">Book</Link>
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

