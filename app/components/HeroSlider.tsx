import React from "react";

const sliderData = [
  {
    id: 1,
    image: "images/slider/s1.png",
    title: (
      <>
        Restore Your Skin.
        <br />
        <b>Regrow Your Confidence.</b>
      </>
    ),
    subtitle: "Let us help you look your best!",
    link: "services.html",
    linkText: "Know more",
  },
  {
    id: 2,
    image: "images/slider/s2.png",
    title: (
      <>
        Advanced
        <br />
        <b>Skin, Hair & Fungal Treatment</b>
      </>
    ),
    subtitle: "Highest standards of customer service",
    link: "services.html",
    linkText: "Know more",
  },
  {
    id: 3,
    image: "images/slider/s4.png",
    title: (
      <>
        Safe, Scientific
        <br />
        <b>Result-Oriented Dermatology Care</b>
      </>
    ),
    subtitle: "Highest standards of customer service",
    link: "services.html",
    linkText: "Know more",
  },
];

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
                    >
                      {slide.title}
                    </div>
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
