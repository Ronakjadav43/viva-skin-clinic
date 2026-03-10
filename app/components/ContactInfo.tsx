import React from "react";
import contactData from "../contact.json";

export default function ContactInfo() {
  const { Location, ContactInfo, WorkingTime } = contactData;

  return (
    <div className="section mt-0 bg-grey">
      <div className="container">
        <div className="row">
          <div className="col-md">
            <div className="title-wrap">
              <h5>{Location.title}</h5>
              <div className="h-decor"></div>
            </div>
            <ul className="icn-list-lg">
              <li>
                <i className={Location.icon}></i>
                <span dangerouslySetInnerHTML={{ __html: Location.details }} />
              </li>
            </ul>
          </div>
          <div className="col-md mt-3 mt-md-0">
            <div className="title-wrap">
              <h5>{ContactInfo.title}</h5>
              <div className="h-decor"></div>
            </div>
            <ul className="icn-list-lg">
              <li>
                <i className="icon-telephone"></i>
                {ContactInfo.phoneLabel}{" "}
                <span className="theme-color">
                  {ContactInfo.phones.map((phone, idx) => (
                    <span key={idx} className="text-nowrap">
                      {phone}
                      {idx !== ContactInfo.phones.length - 1 ? ", " : ""}
                    </span>
                  ))}
                </span>
                <br /> {ContactInfo.faxLabel}{" "}
                <span className="theme-color">
                  <span className="text-nowrap">{ContactInfo.fax}</span>
                </span>
              </li>
              <li>
                <i className={ContactInfo.emailIcon}></i>
                <a href={`mailto:${ContactInfo.email}`}>{ContactInfo.email}</a>
              </li>
            </ul>
          </div>
          <div className="col-md mt-3 mt-md-0">
            <div className="title-wrap">
              <h5>{WorkingTime.title}</h5>
              <div className="h-decor"></div>
            </div>
            <ul className="icn-list-lg">
              <li>
                <i className={WorkingTime.icon}></i>
                <div>
                  {WorkingTime.hours.map((item, idx) => (
                    <div className="d-flex" key={idx}>
                      <span>{item.day}</span>
                      <span className="theme-color">{item.time}</span>
                    </div>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
