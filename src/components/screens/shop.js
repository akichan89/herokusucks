import React from "react";
import Header from "../parts/Header";
import Breadcrumb from "../parts/Breadcrumb";
import Posts from "../parts/Posts";
import Sidebar from "../parts/Sidebar";
import Footer from "../parts/Footer";
import App  from "./storeApp";
import './shop.scss';

const Shop = () => {
  return (
    <>
      <Header />
     
      <section className="blog-section">
        <div className="container">
          <div className="row">
            <App />
        
          </div>
        </div>
      </section>

      <div className="order-form-button">
      <a href="./pizzaForm" class="button">Continue to Dragon Pals Order Form</a>
      </div>

      <Footer />
    </>
  );
};

export default Shop;
