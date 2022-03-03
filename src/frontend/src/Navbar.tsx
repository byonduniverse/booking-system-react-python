import { Link } from "react-router-dom";
import { Fragment } from "react";


export default function Navbar() {
    return (
<Fragment>
    <nav className="navbar navbar-expand-lg navbar-light colored-nav">
        <div className="container-fluid">
        <Link className="navbar-brand" to="/">
            <img src="/assets/kebab.png" width="30" height="30" className="d-inline-block align-top" alt="Kebab Icon" />
        </Link>
        <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                Home
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/products">
                Book Kebab
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/#">
                Blog
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/about">
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

