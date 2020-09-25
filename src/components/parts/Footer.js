import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <h1>COMPLETE BLOG</h1>
        <p className="copyright-line">
          © Copyright 2019 - All rights reserved.
        </p>
        <ul className="social-list">
          <li>
            <a href='https://master.d25xc1hcae2nc9.amplifyapp.com'>
            <i class="fas fa-blog"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
