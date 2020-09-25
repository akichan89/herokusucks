import React from "react";
import Header from "../parts/Header";
import PostDesc from "../parts/PostDesc";
import Comment from "../parts/Comment";
import Footer from "../parts/Footer";
import AboutNavbar from "../screens/aboutHeader";

const Posts1 = () => {
  return (
    <div>

<Header />
      <AboutNavbar />
      
      <div className="single-post no-sidebar">
      
    <div>
      <div className="title-single-post">
          <h2>Tad Cooper - The Original Dragon Pal</h2>
        
        <div className="image-holder">
                  <img src="upload/blog/tadcooper5.jpg" alt="" />
                </div>

          <div className="post-content-text">
            <p>
            Where did the original Dragon Pal come from? Well, that is a great question! A long, long time ago, in a distant land, King Richard had lost everything. He lost his wife, his kingdom, respect and even most of his friends. He was considered an idiot and buffoon who couldn't do anything right. Until one day, he traded the most valuable item in the seven kingdoms - the Jewel of Valencia - for the first Dragon Pal: Tad Cooper. Tad Cooper looked like any standard lizard, but King Richard knew he had something special on his hands. He knew, that if he super believed in Tad Cooper, one day that little dragon would grow into a huge beast, assisting Richard in re-claiming all that was lost! He know, Tad Cooper would make the laughing stop, and Tad Cooper did. Tad Cooper changed King Richard's life, helped get his kingdom back, helped him find a better wife, and even defeat the evilest of D-Dew wielders! (Dark-Dark Evil Way). We have dedicated out lives to paying tribute to the noble Tad Cooper and want all who super believe, to have access to their own Dragon Pal. 
            </p>
            <blockquote>
              “ I super believe in you, Tad Cooper... ”
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

export default Posts1;
