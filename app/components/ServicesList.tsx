import React from "react";
import Link from "next/link";
import servicesData from "../services.json";

export default function ServicesList() {
  const { title, headline, description, services } = servicesData.ServicesList;

  return (
    <div className="section page-content-first">
      <div className="container">
        <div className="text-center mb-2 mb-md-3 mb-lg-4">
          <div className="h-sub theme-color">{title}</div>
          <h1>{headline}</h1>
          <div className="h-decor"></div>
          <div className="text-center mt-4">
            <p dangerouslySetInnerHTML={{ __html: description }}></p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row col-equalH">
          {services.map((service, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div className="service-card">
                <div className="service-card-photo">
                  <Link href={`/services/${service.slug}`}>
                    <img src={service.img} className="img-fluid" alt="" />
                  </Link>
                </div>
                <h5 className="service-card-name">
                  <Link href={`/services/${service.slug}`}>{service.name}</Link>
                </h5>
                <div className="h-decor"></div>
                <p>{service.description}</p>
                <ul className="circle-list">
                  {service.list.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
