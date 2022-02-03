import { Fragment } from "react";


export default function Home () {
    return (
<Fragment>
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
        <div class="carousel-item active">
        <img src="assets/kebab.jpg" class="d-block w-100" alt="Lula Kebab" />
        <div class="carousel-caption d-none d-md-block">
            <h1 class="carousel-header">Lula Kebab</h1>
            <p class="carousel-p">Typical dish used by the Romans to feed their brave soldiers.</p>
        </div>
        </div>
        <div class="carousel-item">
        <img src="assets/kebab2.jpg" class="d-block w-100" alt="Doner Kebab" />
        <div class="carousel-caption d-none d-md-block">
            <h1 class="carousel-header">Doner Kebab</h1>
            <p class="carousel-p">Lorem ipsum dolor sit und ich habe meinen Schwanz gebrochen.</p>
        </div>
        </div>
        <div class="carousel-item">
        <img src="assets/kebab3.webp" class="d-block w-100" alt="Meatless Kebab" />
        <div class="carousel-caption d-none d-md-block">
            <h1 class="carousel-header">Meatless Kebab</h1>
            <p class="carousel-p">Thinking about going Vegan? Then think twice!</p>
        </div>
        </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button>
    </div>
</Fragment>
);
}