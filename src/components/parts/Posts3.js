import React from "react";
import Header from "../parts/Header";

import Footer from "../parts/Footer";
import AboutNavbar from "../screens/aboutHeader";

const Posts3 = () => {
  return (
    <div>
        <Header />
      <AboutNavbar />
      <div className="single-post no-sidebar">
      
    <div>
      <div className="title-single-post">
      <h2>Dragon Pal Basic Care</h2>
      <h3>Keeping your Dragon Pal Happy, Healthy and Alive</h3>
        
        <div className="image-holder">
                  <img src="upload/blog/tadcooper11.jpg" alt="" />
                </div>

          <div className="post-content-text">
            <p>
            Keeping your Dragon Pal Happy, Healthy and Alive


What does your Dragon Pal need to be Happy? Well, first off, we provide everything you need to get started in your started pack! You should be able to select this when placing your order. There are three very important things when caring for your Dragon Pal:
Correct Lighting - you need to make sure you have a basking light and a UV light. The basking light gives the Dragon a warm place to sit and soak up heat. The UV light gives it the nutrients it would normally get from the sun.
Temp! Dragon Pals like it WARM! You should setup their habitat with a "cool" side, siting around 75-80 degrees. Then, set up a "hot" side, with the temp sitting around 90-95.
Vitamins and Calcium!! Dragon Pals need these supplemented into their food, since they don't hunt or live outside in their younger years, we need to provide them with as much supplementation to ensure they grow healthy and strong!!

I hope this helps!!
            </p>
            
            <blockquote>
              “I super believe in you, Tad Cooper”
            </blockquote>
          
        
        
              </div>
            </div>
          </div>
       
       
      </div>
      <h3>To read more about Dragon Pals, please go to our Dragon Pal blog  <a href='https://master.d25xc1hcae2nc9.amplifyapp.com'>
            <i class="fas fa-blog"></i>
            </a></h3>

    <Footer />
     
    </div>
  );
};

export default Posts3;
