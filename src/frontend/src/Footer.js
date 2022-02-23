import { Link } from 'react-router-dom';


export default function Footer() {
    return (
<footer className="site-footer">
    <div className="container">
    <div className="row">
        <div className="col-sm-12 col-md-6">
        <h6>About</h6>
        <p className="text-justify">Kebab Lovers is an imaginary company that aims to solve the world's most important problems by exporting high-quality Kebabs to every country. We highly believe that our mission is not only important for the evolution of humanity, but also to address global poverty, hunger, and child slavery. Quaerat provident commodi consectetur veniam similique ad 
earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo 
fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore 
suscipit quas? Nulla, placeat.</p>
        </div>

        <div className="col-xs-6 col-md-3 column-margin">
        <h6>Quick Links</h6>
        <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/bookings">Book Kebab</Link></li>
            <li><Link to="/#">Blog</Link></li>
            <li><Link to="/about">About Us</Link></li>
        </ul>
        </div>
    </div>
    <hr />
    </div>
    <div className="container">
    <div className="row">
        <div className="col-md-8 col-sm-6 col-xs-12">
        <p className="copyright-text">Copyright &copy; 2022 All Rights Reserved by &nbsp; 
    <a href="#">Kebab Lovers</a>.
        </p>
        </div>

        <div className="col-md-4 col-sm-6 col-xs-12">
        <ul className="social-icons">
            <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
            <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
            <li><a className="dribbble" href="#"><i className="fa fa-dribbble"></i></a></li>
            <li><a className="linkedin" href="#"><i className="fa fa-linkedin"></i></a></li>   
        </ul>
        </div>
    </div>
    </div>
</footer>
    );
};

