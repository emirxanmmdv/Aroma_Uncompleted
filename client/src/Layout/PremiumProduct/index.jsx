import React from "react";
import "./index.scss";

const PremiumProduct = () => {
  return (
    <section id="premiumProduct">
      <div className="container">
        <div className="sectionParts">
          <div className="imagePart">
            <div className="image">
              <img src="https://preview.colorlib.com/theme/aroma/img/home/hero-banner.png.webp" />
            </div>
          </div>
          <div className="textPart">
            <div className="textBox">
              <div className="title">
                <h4>Shop is Fun</h4>
              </div>
              <div className="description">
                <h1>browse our premium product</h1>
              </div>
              <div className="subDescription">
                <p>
                  Us which over of signs divide dominion deep fill bring they're
                  meat beho <br /> upon own earth without morning over third.
                  Their male dry. They are great appear whose land fly grass.
                </p>
              </div>
              <div className="browseNow">
                <button className="browseNowBtn">Browse Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumProduct;
