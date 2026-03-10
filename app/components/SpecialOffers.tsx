import React from "react";

import data from "../data.json";

const specialOffers = data.SpecialOffers;

export default function SpecialOffers() {
  return (
    <div className="section" id="specialOffer">
      <div className="container">
        <div className="title-wrap text-center">
          <div className="h-sub theme-color">For Our Dear Clients</div>
          <h2 className="h1">Special Offers</h2>
          <div className="h-decor" />
        </div>
        <div className="special-carousel js-special-carousel row">
          {specialOffers.map((offer) => (
            <div className="col-6" key={offer.id}>
              <div className="special-card">
                <div className="special-card-photo">
                  {offer.ribbonValue && (
                    <div className="corner-ribbon-wrap">
                      <div className="corner-ribbon">
                        {offer.ribbonValue}
                        <span>{offer.ribbonSuffix}</span>
                      </div>
                    </div>
                  )}
                  <img src={offer.image} alt="" />
                </div>
                <div
                  className={`special-card-caption ${
                    offer.alignLeft ? "text-left" : ""
                  }`}
                >
                  <div className="special-card-txt1">{offer.txt1}</div>
                  <div className="special-card-txt2">{offer.txt2}</div>
                  <div className="special-card-txt3" dangerouslySetInnerHTML={{ __html: offer.txt3 }}></div>
                  <div>
                    <a href={offer.btnLink} className="btn">
                      <i className="icon-right-arrow" />
                      <span>{offer.btnText}</span>
                      <i className="icon-right-arrow" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
