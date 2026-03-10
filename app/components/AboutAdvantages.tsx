import React from "react";
import aboutData from "../about.json";

export default function AboutAdvantages() {
  const { listLeft, listRight } = aboutData.AboutAdvantages;

  return (
    <div className="section">
      <div className="container-fluid px-0">
        <div className="row no-gutters">
          <div className="col-xl-6 bg-grey">
            <div className="max-670 mx-lg-auto px-15">
              <div className="title-wrap">
                <h2 className="h1">
                  Our <span className="theme-color">Advantages</span>
                </h2>
              </div>
              <div className="mt-lg-5"></div>
              <div className="row">
                <div className="col-sm-7">
                  <ul className="marker-list-md">
                    {listLeft.map((li, i) => (
                      <li key={`left-${i}`}>{li}</li>
                    ))}
                  </ul>
                </div>
                <div className="col-sm-5 mt-1 mt-sm-0">
                  <ul className="marker-list-md">
                    {listRight.map((li, i) => (
                      <li key={`right-${i}`}>{li}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-xl-6 banner-left bg-full"
            style={{ backgroundImage: "url(images/content/banner-right.jpg)" }}
          ></div>
        </div>
      </div>
    </div>
  );
}
