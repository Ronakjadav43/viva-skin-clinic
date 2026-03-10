import React from "react";
import aboutData from "../about.json";

export default function AboutClinic() {
  const { images, paragraphs, list, mission, vision } = aboutData.AboutClinic;

  return (
    <div className="section page-content-first">
      <div className="container">
        <div className="text-center mb-2 mb-md-3 mb-lg-4">
          <div className="h-sub theme-color">
            Our dentists working to your smile
          </div>
          <h1>About Our Clinic</h1>
          <div className="h-decor"></div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 text-center text-lg-left pr-md-4">
            <img src={images[0]} className="w-100" alt="" />
            <div className="row mt-3">
              <div className="col-6">
                <img src={images[1]} className="w-100" alt="" />
              </div>
              <div className="col-6">
                <img src={images[2]} className="w-100" alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-6 mt-3 mt-lg-0">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <ul className="marker-list-md">
              {list.map((li, i) => (
                <li key={i}>{li}</li>
              ))}
            </ul>
            <div className="mt-3 mt-md-7"></div>
            <h3>
              Mission / Vision <span className="theme-color">Statement</span>
            </h3>
            <div className="mt-0 mt-md-4"></div>
            <p>{mission}</p>
            <p>{vision}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
