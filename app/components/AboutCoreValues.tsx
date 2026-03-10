import React from "react";
import aboutData from "../about.json";

export default function AboutCoreValues() {
  const values = aboutData.AboutCoreValues;

  return (
    <div className="section">
      <div className="container">
        <div className="title-wrap text-center">
          <div className="h-sub theme-color">Motivation is easy</div>
          <h2 className="h1">Our Core Values</h2>
          <div className="h-decor"></div>
        </div>
        <div
          className="row js-icn-carousel icn-carousel flex-column flex-sm-row text-center text-sm-left"
          data-slick='{"slidesToShow": 3, "responsive":[{"breakpoint": 1024,"settings":{"slidesToShow": 2}}]}'
        >
          {values.map((v, i) => (
            <div className="col-md" key={i}>
              <div className="icn-text">
                <div className="icn-text-simple">
                  <i className={v.icon}></i>
                </div>
                <div>
                  <h5 className="icn-text-title">{v.title}</h5>
                  <p>{v.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
