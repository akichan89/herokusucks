import React from "react";
import Header from "../parts/Header";
import PostDesc from "../parts/PostDesc";
import Comment from "../parts/Comment";
import Footer from "../parts/Footer";

const Single = () => {
  return (
    <div>
      <Header />
      <div className="single-post no-sidebar">
      
            
        <PostDesc />
       
      </div>
      <Footer />
    </div>
  );
};

export default Single;
