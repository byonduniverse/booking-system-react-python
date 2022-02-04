import { Link } from "react-router-dom";
import { Fragment } from "react";


export default function Navbar() {
    return (
<Fragment>
    <nav class="navbar navbar-expand-lg navbar-light colored-nav">
        <div class="container-fluid">
        <Link class="navbar-brand" to="/">
            <i class="bi bi-yin-yang"></i>
        </Link>
        <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
            <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">
                Home
                </Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">
                Book Kebab
                </Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/about">
                About Us
                </Link>
            </li>
            </ul>
        </div>
        </div>
    </nav>
</Fragment>
);
};

