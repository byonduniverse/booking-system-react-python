import { Fragment } from "react";


export default function Home () {
    return (
<Fragment>
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner">
        <div className="carousel-item active">
        <img src="assets/kebab.jpg" className="d-block w-100" alt="Lula Kebab" />
        <div className="carousel-caption d-none d-md-block">
            <h1 className="carousel-header">Lula Kebab</h1>
            <p className="carousel-p">Typical dish used by the Romans to feed their brave soldiers.</p>
        </div>
        </div>
        <div className="carousel-item">
        <img src="assets/kebab2.jpg" className="d-block w-100" alt="Doner Kebab" />
        <div className="carousel-caption d-none d-md-block">
            <h1 className="carousel-header">Doner Kebab</h1>
            <p className="carousel-p">Lorem ipsum dolor sit und ich habe meinen Schwanz gebrochen.</p>
        </div>
        </div>
        <div className="carousel-item">
        <img src="assets/kebab3.webp" className="d-block w-100" alt="Meatless Kebab" />
        <div className="carousel-caption d-none d-md-block">
            <h1 className="carousel-header">Meatless Kebab</h1>
            <p className="carousel-p">Thinking about going Vegan? Then think twice!</p>
        </div>
        </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
    </button>
    </div>
</Fragment>
);
}