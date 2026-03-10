import React from "react";

import data from "../data.json";

const { listItems, counterData, featuresData } = data.WhyChooseUs;

export default function WhyChooseUs() {
  return (
    <>
      <div className="section">
        <div className="container-fluid px-0 over-visible">
          <div className="row white-col-wrap">
            <div className="col-md-6 white-col">
              <div className="white-col-inside">
                <div className="title-wrap-alt">
                  <div className="h-sub-lined theme-color">
                    Why Choose Us?
                  </div>
                  <h2 className="h1">
                    Expert Skin, Hair & Fungal Care with
                    <span className="theme-color">
                      {" "}Advanced Dermatology Solutions
                    </span>
                  </h2>
                </div>
                <p>
                  At Viva Skin Clinic, we combine medical expertise with
                  modern dermatology technology to deliver safe, effective,
                  and personalized treatments.
                </p>
                <p>
                  We focus not just on treating symptoms — but on identifying
                  the root cause to ensure long-lasting results and healthier
                  skin.
                </p>
                <ul className="marker-list-md">
                  {listItems.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
                <div className="mt-3 mt-lg-5">
                  <div className="counter-box-grid">
                    {counterData.map((counter) => (
                      <div className="counter-box-sm" key={counter.id}>
                        <div className="counter-box-sm-number">
                          <span className="count" data-to={counter.to} data-speed={counter.speed}>
                            0
                          </span>
                          <span className="sup">{counter.suffix}</span>
                        </div>
                        <div className="counter-box-sm-text">
                          {counter.text}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-0 mb-lg-7 image-right-fullheight-col">
              <div className="image-right-fullheight">
                <img src="images/Why Choose Us_ - 960 × 633.png" alt="" />
                <div className="image-corner image-corner--left">
                  <i className="icon-achivement" />
                </div>
              </div>
              <div className="over-image-card over-image-card--sm pos-center-1">
                <div className="over-image-card-icon">
                  <i className="icon-phone-time" />
                </div>
                <div className="over-image-card-text">
                  <h4>Free 15 Min Consultation</h4>
                  <p>
                    Use the form to book your FREE 15 min telephone
                    consultation.
                  </p>
                  <a
                    href="#"
                    className="btn btn-white btn-white--all"
                    data-toggle="modal"
                    data-target="#modalBookingForm"
                  >
                    <i className="icon-right-arrow" />
                    <span>book consultation</span>
                    <i className="icon-right-arrow" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden section">
        <div className="container">
          <div className="title-wrap text-center">
            <div className="h-sub theme-color">See the difference</div>
            <h2 className="h1">Why Choose Us?</h2>
            <div className="h-decor" />
          </div>
          <div
            className="row js-icn-carousel icn-carousel flex-column flex-sm-row text-center text-sm-left"
            data-slick='{"slidesToShow": 3, "responsive":[{"breakpoint": 1024,"settings":{"slidesToShow": 2}}]}'
          >
            {featuresData.map((feature) => (
              <div className="col-md" key={feature.id}>
                <div className="icn-text">
                  <div className={`icn-text-circle ${feature.iconSize ? `icn-text-circle--${feature.iconSize}` : ""}`}>
                    <i className={feature.icon} />
                  </div>
                  <div>
                    <h5 className="icn-text-title">{feature.title}</h5>
                    <p>{feature.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
