import React from "react";

import data from "../data.json";

const testimonials = data.Testimonials;

export default function Testimonials() {
  return (
    <div className="section bg-grey-dark py-0">
      <div className="container">
        <div className="row no-gutters">
          <div className="col-md-7 col-lg-6 mt-2 mt-lg-0">
            <div className="reviews-wrap-alt ml-auto d-flex flex-column justify-content-center">
              <div className="title-wrap text-center text-md-right">
                <div className="h-sub">What People Says</div>
                <h2 className="h1">
                  Patient <span className="theme-color">Testimonials</span>
                </h2>
              </div>
              <div className="js-reviews-carousel reviews-carousel text-center text-md-right">
                {testimonials.map((review) => (
                  <div className="review" key={review.id}>
                    <div className="star-rating">
                      <span>
                        <i className="icon-star" />
                        <i className="icon-star" />
                        <i className="icon-star" />
                        <i className="icon-star" />
                        <i className="icon-star" />
                      </span>
                    </div>
                    <p className="review-text">{review.text}</p>
                    <p>
                      <span className="review-author">- {review.author},</span>{" "}
                      <span className="review-author-position">
                        {review.position}
                      </span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-md-5 col-lg-6">
            <div className="reviews-author-carousel">
              <div>
                <div className="img-before">
                  <img
                    src="images/Patient1.png"
                    style={{ width: "250px" }}
                    alt=""
                  />
                  <span>BEFORE</span>
                </div>
                <div className="img-after">
                  <img src="images/Patient2.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
