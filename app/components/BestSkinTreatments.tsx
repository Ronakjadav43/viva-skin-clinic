import React from "react";

import data from "../data.json";

const { leftList, rightList } = data.BestSkinTreatments;

export default function BestSkinTreatments() {
  return (
    <div className="section bg-grey py-0">
      <div className="container-fluid px-0">
        <div className="row no-gutters flex-wrap flex-md-nowrap">
          <div className="col-md-7 col-lg-6">
            <div className="services-wrap1 float-right">
              <div className="service-tab-banner d-md-none">
                <img src="images/content/banner-right.jpg" alt="" />
              </div>
              <div className="title-wrap text-center text-sm-left mt-2 mt-md-0">
                <h2 className="h1">
                  Best Skin & Hair Treatments{" "}
                  <span className="theme-color">in Surat</span>
                </h2>
              </div>
              <p className="text-center text-sm-left">
                Looking for acne treatment, laser hair removal, PRP hair
                therapy, or pigmentation removal in Surat? Viva Skin Clinic
                offers advanced dermatological procedures with modern
                technology and expert care.
              </p>
              <div className="row">
                <div className="col-sm-6">
                  <ul className="circle-list">
                    {leftList.map((item, index) => (
                      <li key={`left-${index}`}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="col-sm-6 mt-1 mt-md-0">
                  <ul className="circle-list">
                    {rightList.map((item, index) => (
                      <li key={`right-${index}`}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-md-5 col-lg-6 service-tab-banner-alt d-none d-md-block align-items-center bg-cover bg-left"
            data-bg="images/BestSkin.png"
            style={{ backgroundImage: "url(images/BestSkin.png)" }}
          ></div>
        </div>
      </div>
    </div>
  );
}
