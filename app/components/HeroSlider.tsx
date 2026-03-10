import React from "react";

import data from "../data.json";

const sliderData = data.HeroSlider;

export default function HeroSlider() {
  return (
    <div id="mainSliderWrapper">
      <div className="loading-content">
        <div className="inner-circles-loader" />
      </div>
      <div
        className="main-slider mb-0 arrows-white"
        id="mainSlider"
        data-slick='{"arrows": true, "responsive":[{"breakpoint": 768,"settings":{"arrows": false, "dots": true }}]}'
      >
        {sliderData.map((slide) => (
          <div className="slide" key={slide.id}>
            <div
              className="img--holder"
              data-animation="kenburns"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            <div className="slide-content center">
              <div className="vert-wrap container">
                <div className="vert">
                  <div className="container">
                    <div
                      className="slide-txt1"
                      data-animation="fadeInDown"
                      data-animation-delay="1s"
                      dangerouslySetInnerHTML={{ __html: slide.title }}
                    />
                    <div
                      className="slide-txt2"
                      data-animation="fadeInUp"
                      data-animation-delay="1.5s"
                    >
                      {slide.subtitle}
                    </div>
                    <div className="slide-btn">
                      <a
                        href={slide.link}
                        className="btn btn-white"
                        data-animation="fadeInUp"
                        data-animation-delay="2s"
                      >
                        <i className="icon-right-arrow" />
                        <span>{slide.linkText}</span>
                        <i className="icon-right-arrow" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
