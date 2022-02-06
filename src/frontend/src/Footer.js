import { Link } from 'react-router-dom';


export default function Footer() {
    return (
<footer class="site-footer">
    <div class="container">
    <div class="row">
        <div class="col-sm-12 col-md-6">
        <h6>About</h6>
        <p class="text-justify">Kebab Lovers is an imaginary company that aims to solve the world's most important problems by exporting high-quality Kebabs to every country. We highly believe that our mission is not only important for the evolution of humanity, but also to address global poverty, hunger, and child slavery. Quaerat provident commodi consectetur veniam similique ad 
earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo 
fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore 
suscipit quas? Nulla, placeat.</p>
        </div>

        <div class="col-xs-6 col-md-3 column-margin">
        <h6>Quick Links</h6>
        <ul class="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/bookings">Book Kebab</Link></li>
        </ul>
        </div>
    </div>
    <hr />
    </div>
    <div class="container">
    <div class="row">
        <div class="col-md-8 col-sm-6 col-xs-12">
        <p class="copyright-text">Copyright &copy; 2022 All Rights Reserved by &nbsp; 
    <a href="#">Kebab Lovers</a>.
        </p>
        </div>

        <div class="col-md-4 col-sm-6 col-xs-12">
        <ul class="social-icons">
            <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
            <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
            <li><a class="dribbble" href="#"><i class="fa fa-dribbble"></i></a></li>
            <li><a class="linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>   
        </ul>
        </div>
    </div>
    </div>
</footer>
    );
};

