import React from "react";
import galleryData from "../gallery.json";

export default function GalleryCallUs() {
  const { title1, title2, description, phone, img } = galleryData.CallUsBanner;
  
  return (
    <div className="section mt-5">
      <div className="container">
        <div className="banner-call">
          <div className="row no-gutters">
            <div className="col-md-7 d-flex align-items-center">
              <div className="text-center w-100">
                <h2>
                  {title1} <span className="theme-color">{title2}</span>
                </h2>
                <div className="h-decor"></div>
                <p className="mt-sm-1 mt-lg-4 text-left text-sm-center">
                  {description}
                </p>
                <div className="mt-2 mt-lg-4 text-center">
                  <a href="#" className="banner-call-phone">
                    <i className="icon-telephone"></i>
                    {phone}
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-5 col-lg-5 mt-3 mt-md-0 text-center text-lg-left">
              <img src={img} alt="" className="shift-right" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
