import React from "react";

import data from "../data.json";

const { treatmentsGrid1, treatmentsGrid2 } = data.OurTreatments;

export default function OurTreatments() {
  return (
    <div className="section bg-dotted">
      <div className="container-fluid">
        <div className="title-wrap text-center">
          <h2
            className="h1 double-title double-title--white double-title--center double-title--vcenter"
            data-title="Our Treatments"
          >
            <span>Our Treatments</span>
          </h2>
          <div className="h-decor" />
        </div>
        <div className="container">
          <div className="blog-grid-full mt-3 mb-0 row">
            {treatmentsGrid1.map((treatment) => (
              <div className="col-md-6 col-lg-6" key={treatment.id}>
                <a href={treatment.url} className="service-card-style4">
                  <div className="service-card-img">
                    <img src={treatment.imgSrc} alt={treatment.name} />
                  </div>
                  <h5 className="service-card-name">{treatment.name}</h5>
                  <div className="service-card-bg">
                    <i className={treatment.iconClass}></i>
                    <h5 className="service-card-name">{treatment.name}</h5>
                    <p>{treatment.description}</p>
                    <span className="btn-plus">+</span>
                    <div className="service-card-img-num">{treatment.id}</div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="container-fluid">
          <div className="blog-grid-full blog-grid-carousel-full js-blog-grid-carousel-full mt-3 mb-0 row">
            {treatmentsGrid2.map((treatment) => (
              <div className="col-md-6 col-lg-4" key={treatment.id}>
                <a href={treatment.url} className="service-card-style4">
                  <div className="service-card-img">
                    <img src={treatment.imgSrc} alt={treatment.name} />
                  </div>
                  <h5 className="service-card-name">{treatment.name}</h5>
                  <div className="service-card-bg">
                    <i className={treatment.iconClass}></i>
                    <h5 className="service-card-name">{treatment.name}</h5>
                    <p>{treatment.description}</p>
                    <span className="btn-plus">+</span>
                    <div className="service-card-img-num">{treatment.id}</div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
