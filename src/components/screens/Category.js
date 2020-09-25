import React from "react";
import Header from "../parts/Header";
import AboutNavbar from "./aboutHeader";

import Posts1 from "../parts/Posts1";

import Footer from "../parts/Footer";

const Category = () => {
  return (
    <div>
    
    
     
     
      <section className="blog-section">
        <div className="container">
          <div className="row">
         <Posts1 />
            
          </div>
        </div>
      </section>
    <h3>To read more about Dragon Pals, please go to our Dragon Pal blog</h3>
    <br />
      <a href="https://master.d25xc1hcae2nc9.amplifyapp.com" class="button">Dragon Pal Blog</a>

    </div>
  );
};

export default Category;
