import React from "react";
import Header from "../parts/Header";
import PostDesc from "../parts/PostDesc";
import Comment from "../parts/Comment";
import Footer from "../parts/Footer";
import AboutNavbar from "../screens/aboutHeader";

const Posts2 = () => {
  return (
    <div>
       <Header />
      <AboutNavbar />
      <div className="single-post no-sidebar">
      
    <div>
      <div className="title-single-post">
      <h2>Dragon Pal Morphs and Colors</h2>
        
        <div className="image-holder">
                  <img src="upload/blog/tadcooper12.jpg" alt="" />
                </div>
          <div className="post-content-text">
            <p>
            What are Morphs? And what colors do the Dragon Pals come in? Morphs refer to different genetic mutations that allow for control over things like, sizes, skin texture, etc....for the most part, morphs aren't something easily controllable. No matter the morph, we ensure our Dragon Pals are the strongest and will grow to become the magnificent creature you wish and hope for! Your best bet for customization, is color. Dragon Pals, like bearded dragons, come in many colors. There is a standard sand color, reds, oranges, even white and black! So look around and see what colors you think would be best for your Dragon Pal!
            </p>

            <p> Below are some color examples:</p>

            <div className="image-holder">
                  <img src="upload/blog/tadcooper13.jpg" alt="" />
           
            <blockquote>
              “I super believe in you, Tad Cooper... ”
            </blockquote>
           
        
        </div>
              </div>
            </div>
          </div>
       
          <h3>To read more about Dragon Pals, please go to our Dragon Pal blog  <a href='https://master.d25xc1hcae2nc9.amplifyapp.com'>
            <i class="fas fa-blog"></i>
            </a></h3>

    
      </div>
      <Footer />
    </div>
  );
};

export default Posts2;
