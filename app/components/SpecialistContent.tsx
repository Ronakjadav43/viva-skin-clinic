"use client";
import React from "react";
import Link from "next/link";
import specialistData from "../the-specialist.json";

export default function SpecialistContent() {
  const { DoctorInfo, DoctorBio, DoctorPortfolio, DoctorReviews, ActionButtons } = specialistData;

  return (
    <div className="col-lg-8 mt-4 mt-lg-0">
      <div className="doctor-info mb-3 mb-lg-4">
        <div className="doctor-info-name">
          <h3>{DoctorInfo.name}</h3>
          <h6>{DoctorInfo.title}</h6>
        </div>
        <div className="doctor-info-phone">
          <i className="icon-telephone"></i>
          <a href={DoctorInfo.phoneUrl}>{DoctorInfo.phoneLabel}</a>
        </div>
        <div className="doctor-info-social">
          {DoctorInfo.socialLinks.map((social, idx) => (
            <a
              key={idx}
              href={social.url}
              target={social.url.startsWith("mailto") ? "_self" : "_blank"}
              rel="noreferrer"
              className="hovicon"
            >
              <i className={social.icon}></i>
            </a>
          ))}
        </div>
      </div>
      
      {DoctorBio.paragraphs.map((text, idx) => (
        <p key={idx}>{text}</p>
      ))}

      <ul className="marker-list-md">
        {DoctorBio.memberships.map((membership, idx) => (
          <li key={idx}>
            <i>{membership}</i>
          </li>
        ))}
      </ul>
      
      <div className="mt-4 mt-lg-6"></div>
      
      {/* Portfolio Collapse */}
      <div
        className="collapse-wrap d-flex"
        data-toggle="collapse"
        data-target="#tab1"
      >
        <h5 className="collapse-title">
          {DoctorPortfolio.title} 
          <span className="theme-color text-nowrap">{DoctorPortfolio.titleHighlight}</span>
        </h5>
        <div className="ml-auto">
          <i className="icon-bottom"></i>
        </div>
      </div>
      <div id="tab1" className="collapse show">
        <div className="pb-4 pb-lg-6">
          <div className="row row-sm-space pt-2">
            {DoctorPortfolio.images.map((img, idx) => (
              <div className="col-sm-4" key={idx}>
                <img src={img} className="img-fluid" alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Reviews Collapse */}
      <div
        className="collapse-wrap d-flex"
        data-toggle="collapse"
        data-target="#tab2"
      >
        <h5 className="collapse-title">{DoctorReviews.title}</h5>
        <div className="ml-auto">
          <i className="icon-bottom"></i>
        </div>
      </div>
      <div id="tab2" className="collapse show">
        <div className="pb-4">
          {DoctorReviews.reviews.map((review) => (
            <div key={review.id}>
              <div className="doctor-review-row mb-1">
                <div className="star-rating">
                  <span>
                    {[...Array(review.stars)].map((_, i) => (
                      <i className="icon-star" key={i}></i>
                    ))}
                  </span>
                </div>
                <div className="testimonial-author">
                  <span className="testimonial-name">{review.author} </span>
                  <span className="testimonial-position">{review.position}</span>
                </div>
              </div>
              <p>{review.content}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="d-flex flex-column flex-sm-row mt-lg-2">
        {ActionButtons.map((btn, idx) => (
          btn.isModal ? (
            <button
              key={idx}
              className={`btn ${idx > 0 ? "" : "btn-hover-fill mr-sm-2"}`}
              data-toggle="modal"
              data-target={btn.target}
            >
              <i className="icon-right-arrow"></i>
              <span>{btn.text}</span>
              <i className="icon-right-arrow"></i>
            </button>
          ) : (
            <Link key={idx} href={btn.target} className="btn">
              <i className="icon-right-arrow"></i>
              <span>{btn.text}</span>
              <i className="icon-right-arrow"></i>
            </Link>
          )
        ))}
      </div>
    </div>
  );
}
