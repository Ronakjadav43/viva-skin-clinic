import React from "react";

const specialOffers = [
  {
    id: 1,
    ribbonValue: "$750",
    ribbonSuffix: "OFF",
    image: "images/content/special-photo-01.jpg",
    txt1: "Love Yourself",
    txt2: "Offer",
    txt3: (
      <>
        Butt Lift or Tummy Tuck
        <br />
        or 360 Liposuction
      </>
    ),
    btnText: "Schedule",
    btnLink: "schedule.html",
    alignLeft: false,
  },
  {
    id: 2,
    ribbonValue: "10%",
    ribbonSuffix: "OFF",
    image: "images/content/special-photo-02.jpg",
    txt1: "Breast",
    txt2: "Augmentation",
    txt3: (
      <>
        All inclusive include implants
        <br />
        and all fees for specific dates
      </>
    ),
    btnText: "Contact now",
    btnLink: "contact.html",
    alignLeft: false,
  },
  {
    id: 3,
    ribbonValue: null,
    ribbonSuffix: null,
    image: "images/content/special-photo-03.jpg",
    txt1: "Whitening",
    txt2: "Laser Teeth",
    txt3: (
      <>
        Tooth whitening
        <br />
        and Home Bleaching
      </>
    ),
    btnText: "Know more",
    btnLink: "services.html",
    alignLeft: true,
  },
  {
    id: 4,
    ribbonValue: null,
    ribbonSuffix: null,
    image: "images/content/special-photo-04.jpg",
    txt1: "Porcelain",
    txt2: "Veneer",
    txt3: (
      <>
        6 Teeth or more in the same
        <br />
        jaw, upper or lower front
      </>
    ),
    btnText: "Know more",
    btnLink: "service-page.html",
    alignLeft: true,
  },
];

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
                  <div className="special-card-txt3">{offer.txt3}</div>
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
