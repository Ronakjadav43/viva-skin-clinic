import React from "react";

const treatmentsGrid1 = [
  {
    id: 1,
    url: "service-page.html",
    imgSrc: "images/Treatments/Acne & acne spot.png",
    name: "Acne & Acne Spot",
    iconClass: "icon-salat",
    description:
      "Effective treatment for active acne and stubborn acne marks. We use advanced dermatology techniques to reduce inflammation, prevent breakouts and lighten acne pigmentation for clear skin.",
  },
  {
    id: 2,
    url: "service-page.html",
    imgSrc: "images/Treatments/hair fall & Growth.png",
    name: "Hair Fall & Growth",
    iconClass: "icon-run",
    description:
      "Target hair thinning and excessive hair fall with clinically proven solutions for stronger, healthier hair.",
  },
  {
    id: 3,
    url: "service-page.html",
    imgSrc: "images/Treatments/fungal infection.png",
    name: "Fungal Infections",
    iconClass: "icon-pills",
    description:
      "Safe and effective dermatological treatments for fungal skin infections with long-term prevention guidance.",
  },
  {
    id: 4,
    url: "service-page.html",
    imgSrc: "images/Treatments/laser hair removal.png",
    name: "Laser Hair Removal",
    iconClass: "icon-behavior",
    description:
      "Permanent hair reduction with advanced laser technology. Safe for all skin types with painless, precise results.",
  },
];

const treatmentsGrid2 = [
  {
    id: 5,
    url: "service-page.html",
    imgSrc: "images/Treatments/PRP Therapy.png",
    name: "PRP Therapy",
    iconClass: "icon-happy",
    description:
      "Platelet-Rich Plasma therapy for skin rejuvenation and hair restoration using your body's own healing power.",
  },
  {
    id: 6,
    url: "service-page.html",
    imgSrc: "images/Treatments/hydra-facial.png",
    name: "Hydrafacial",
    iconClass: "icon-molecula",
    description:
      "Premium facial treatments for deep cleansing, exfoliation, and hydration to reveal radiant, glowing skin.",
  },
  {
    id: 7,
    url: "service-page.html",
    imgSrc: "images/Treatments/Pigmentation Treatment.png",
    name: "Pigmentation Treatment",
    iconClass: "icon-coach",
    description:
      "Advanced solutions for dark spots, melasma, and uneven skin tone using cutting-edge dermatology techniques.",
  },
  {
    id: 8,
    url: "service-page.html",
    imgSrc: "images/Treatments/Glutathione IV.png",
    name: "Glutathione IV Drip",
    iconClass: "icon-instruments",
    description:
      "Premium skin brightening treatment with Glutathione IV drips for overall skin glow and antioxidant protection.",
  },
];

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
