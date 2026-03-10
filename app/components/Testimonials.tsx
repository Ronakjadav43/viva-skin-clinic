import React from "react";

const testimonials = [
  {
    id: 1,
    text: "You guys are all amazing! Everyone I have met at your office is kind, thoughtful, and listens to me. Everyone is so friendly from the time you walk in the door to the time you leave the office.",
    author: "Wilmer Stevenson",
    position: "Creative manager",
  },
  {
    id: 2,
    text: "I Am very impressed with you all as well as being highly proficient is absolutely adorable. I feel so relaxed in her capable hands and hope to be her patient for a very long time! You are a fantastic team and I feel very privileged to come to you all!!!",
    author: "Wilmer Stevenson",
    position: "Creative manager",
  },
  {
    id: 3,
    text: "You guys are all amazing! Everyone I have met at your office is kind, thoughtful, and listens to me. Everyone is so friendly from the time you walk in the door to the time you leave the office.",
    author: "Wilmer Stevenson",
    position: "Creative manager",
  },
];

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
