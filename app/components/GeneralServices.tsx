import React from "react";

import data from "../data.json";

const { mobileServices, mainImages } = data.GeneralServices;

const ServiceBoxRotatorItem = ({ item }: { item: typeof mobileServices[0] }) => (
  <div className="service-box service-box-greybg service-box--hiddenbtn">
    <div className="service-box-caption text-center">
      <div className="service-box-icon">
        <i className={item.icon} />
      </div>
      <div className="service-box-icon-bg">
        <i className={item.icon} />
      </div>
      <h3 className="service-box-title">{item.title}</h3>
      <p>{item.desc}</p>
      <div className="btn-wrap">
        <a href={item.link} className="btn">
          <i className="icon-right-arrow" />
          <span>Know more</span>
          <i className="icon-right-arrow" />
        </a>
      </div>
    </div>
  </div>
);

export default function GeneralServices() {
  return (
    <div className="section hidden">
      <div className="container-fluid px-0">
        <div className="title-wrap text-center">
          <h2 className="h1">General Services</h2>
          <div className="h-decor" />
        </div>
        <div className="row no-gutters services-box-wrap services-box-wrap-desktop">
          <div className="col-4 order-1">
            <div className="service-box-rotator js-service-box-rotator">
              <ServiceBoxRotatorItem item={mobileServices[0]} />
              <ServiceBoxRotatorItem item={mobileServices[1]} />
            </div>
          </div>
          {mainImages.map((img) => (
            <div className={img.colClass} key={img.id}>
              <div className="service-box">
                <div className="service-box-image" data-bg={img.img} />
                <div className="service-box-caption text-center w-50 ml-auto">
                  <h3 className="service-box-title">{img.title}</h3>
                  <p dangerouslySetInnerHTML={{ __html: img.desc }}></p>
                  <div className="btn-wrap">
                    <a href={img.link} className="btn">
                      <i className="icon-right-arrow" />
                      <span>Know more</span>
                      <i className="icon-right-arrow" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="col-4 order-5">
            <div className="service-box-rotator js-service-box-rotator">
              <ServiceBoxRotatorItem item={mobileServices[2]} />
              <ServiceBoxRotatorItem item={mobileServices[3]} />
            </div>
          </div>
        </div>
        <div className="row no-gutters services-box-wrap services-box-wrap-mobile">
          <div className="service-box-rotator js-service-box-rotator">
            {mobileServices.map((item) => (
              <ServiceBoxRotatorItem item={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
