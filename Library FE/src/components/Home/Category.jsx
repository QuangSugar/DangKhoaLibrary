import React from "react";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <>
      <section className="pt--30 section-margin">
        <h2 className="sr-only">Category Gallery Section</h2>
        <div className="container">
          <div className="category-gallery-block">
            <Link to="#" className="single-block hr-large">
              <img src="./src/assets/image/others/cat-gal-large.png" alt />
            </Link>
            <div className="single-block inner-block-wrapper">
              <Link to="#" className="single-image mid-image">
                <img src="./src/assets/image/others/cat-gal-mid.png" alt />
              </Link>
              <Link to="#" className="single-image small-image">
                <img src="./src/assets/image/others/cat-gal-small.png" alt />
              </Link>
              <Link to="#" className="single-image small-image">
                <img src="./src/assets/image/others/cat-gal-small-2.jpg" alt />
              </Link>
              <Link to="#" className="single-image mid-image">
                <img src="./src/assets/image/others/cat-gal-mid-2.png" alt />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Category;
