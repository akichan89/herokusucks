import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PostItem from "./PostItem";
import Pagination from "./Pagination";
import Posts1 from "./Posts1";
import Posts2 from "./Posts2";
import Posts3 from "./Posts3";

const Posts = () => {


  return (
    <div className="col-lg-8">
      <div className="blog-box list-style">
        
        <Posts1 />
        <Posts2 />
        <Posts3 />
      </div>
    </div>
  );
};

export default Posts;
