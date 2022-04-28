import React from "react";
import { Link } from "react-router-dom";

const BreadCumb = ({title = "Home"}) => {
  return (
    <>
      <section className="breadcrumb-section">
        <h2 className="sr-only">Site Breadcrumb</h2>
        <div className="container">
          <div className="breadcrumb-contents">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item active">{title}</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>
    </>
  );
};

export default BreadCumb;
