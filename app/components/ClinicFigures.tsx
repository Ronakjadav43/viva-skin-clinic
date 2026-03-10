import React from "react";

const figuresData = [
  {
    id: 1,
    icon: "images/Experience.svg",
    endValue: 5,
    speed: 1500,
    suffix: "+",
    text: "Years of Dermatology Experience",
  },
  {
    id: 2,
    icon: "images/HappySkin&Hair.svg",
    endValue: 12000,
    speed: 1500,
    suffix: "+",
    text: "Happy Skin & Hair Patients",
  },
  {
    id: 3,
    icon: "images/AdvancedTreatmentTechnologies.svg",
    endValue: 25,
    speed: 1500,
    suffix: "+",
    text: "Advanced Treatment Technologies",
  },
  {
    id: 4,
    icon: "images/PatientSatisfactionRate.svg",
    endValue: 98,
    speed: 1500,
    suffix: "%",
    text: "Patient Satisfaction Rate",
  },
];

export default function ClinicFigures() {
  return (
    <div className="section">
      <div className="container">
        <div className="title-wrap text-center">
          <div className="h-sub theme-color">Clinic figures</div>
          <h2 className="h1">What Have We Achieved</h2>
          <div className="h-decor" />
        </div>
        <div className="row d-block js-counter-carousel">
          {figuresData.map((figure) => (
            <div className="col" key={figure.id}>
              <div className="counter-box">
                <div className="counter-box-icon">
                  <img src={figure.icon} alt="" className="w-[100px] h-[100px]" />
                </div>
                <div className="counter-box-number">
                  <span className="count" data-to={figure.endValue} data-speed={figure.speed}>
                    0
                  </span>
                  {figure.suffix}
                </div>
                <div className="decor" />
                <div className="counter-box-text">
                  {figure.text}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
