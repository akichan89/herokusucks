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
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi
              neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium,
              ligula <a href="#">sollicitudin laoreet viverra</a>, tortor libero
              sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut
              justo. Suspendisse potenti.
            </p>
            <p>
              Sed egestas, ante et vulputate volutpat, eros pede semper est,
              vitae luctus metus libero eu augue. Morbi purus libero, faucibus
              adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent{" "}
              <a href="#">elementum hendrerit </a> tortor. Sed semper lorem at
              felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque
              euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede
              arcu, dapibus eu, fermentum et, dapibus sed, urna.
            </p>
            <blockquote>
              “ Morbi in sem quis dui placerat ornare. Pellentesque odio nisi,
              euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras
              consequat. ”
            </blockquote>
            <p>
              Praesent elementum hendrerit tortor. Sed semper lorem at felis.
              Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod
              dui, eu <a href="#">pulvinar nunc sapien</a> ornare nisl.
              Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.
            </p>
            <h3>Nulla vitae mauris non felis mollis faucibus.</h3>
            <p>
              Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia,
              magna a ullamcorper laoreet, lectus arcu pulvinar risus, vitae
              facilisis libero dolor a purus. Sed vel lacus. Mauris nibh felis,{" "}
              <a href="#">adipiscing varius </a>, adipiscing in, lacinia vel,
              tellus. Suspendisse ac urna. Etiam pellentesque mauris ut lectus.
              Nunc tellus ante, mattis eget, gravida vitae, ultricies ac, leo.
              Integer leo pede, ornare a, lacinia eu, vulputate vel, nisl.
            </p>
           
        
        
        
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
