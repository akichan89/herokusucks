import React from "react";

const Pagination = () => {
  return (
    <div className="pagination-box">
      <ul className="pagination-list">
        <li>
          <a href="/FAQ" className="active">
            1
          </a>
        </li>
        <li>
          <a href="FAQ">2</a>
        </li>
        <li>
          <a href="FAQ">
            Next Page <i className="fa fa-angle-right"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
