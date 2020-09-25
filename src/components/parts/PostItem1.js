import React from "react";

const PostItem1 = (props) => {
  return (
    <div className="news-post article-post2">
      <div className="row">
        <div className="col-md-6">
          <div className="image-holder">
            <img src="upload/blog/tadcooper13.jpg" alt="" />
          </div>
        </div>
        <div className="col-md-6">
          <a className="text-link" href="#">
            {props.post.category.categoryName}
          </a>
          <h2>
            <a href="single-post.html">{props.post.title}</a>
          </h2>
          
          <p>{props.post.description}</p>
        </div>
      </div>
    </div>
  );
};

export default PostItem1;
