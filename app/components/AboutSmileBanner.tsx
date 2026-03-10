import React from "react";
import aboutData from "../about.json";

export default function AboutSmileBanner() {
  const { title, subtitle, btnText } = aboutData.AboutSmileBanner;

  return (
    <div className="section">
      <div className="container-fluid px-0">
        <div
          className="banner-center bg-cover"
          style={{ backgroundImage: "url(images/content/banner-center.jpg)" }}
        >
          <div className="banner-center-caption text-center">
            <div className="banner-center-text1">{title}</div>
            <div className="banner-center-text2">{subtitle}</div>
            <a
              href="#"
              className="btn btn-white mt-5"
              data-toggle="modal"
              data-target="#modalBookingForm"
            >
              <i className="icon-right-arrow"></i>
              <span>{btnText}</span>
              <i className="icon-right-arrow"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
