import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BookingsPage from "./BookingsPage";
import store from "./store";
import { Provider } from "react-redux";
import ProductsPage from "./ProductsPage";


export default function App() {
    return (
<Provider store={store}>
    <BrowserRouter>
  
        <Navbar />

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/bookings" element={<BookingsPage />} />
            <Route path="/products" element={<ProductsPage />} />

            <Route path="*" element={<Home />} />
        </Routes>

        <Footer />

    </BrowserRouter>
</Provider>
    );
  }
  
