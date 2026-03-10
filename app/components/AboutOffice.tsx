import React from "react";
import aboutData from "../about.json";

export default function AboutOffice() {
  const { paragraphs, amenities, galleryMain, galleryThumbs } =
    aboutData.AboutOffice;

  return (
    <div className="section">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="title-wrap">
              <h2 className="h1">Our Office </h2>
              <div className="h-decor"></div>
            </div>
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <div className="mt-4"></div>
            <h3>Amenities</h3>
            <div className="mt-lg-4"></div>
            <ul className="marker-list-md">
              {amenities.map((a, i) => (
                <li key={i}>{a}</li>
              ))}
            </ul>
          </div>
          <div className="col-lg-8 mt-4 mt-lg-0">
            <div className="slider-gallery">
              <ul className="slider-gallery-main list-unstyled js-slider-gallery-main">
                {galleryMain.map((img, i) => (
                  <li key={`main-${i}`}>
                    <img src={img} alt="" />
                  </li>
                ))}
              </ul>
              <ul className="slider-gallery-thumbs list-unstyled js-slider-gallery-thumbs">
                {galleryThumbs.map((img, i) => (
                  <li key={`thumb-${i}`}>
                    <img src={img} alt="" />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
