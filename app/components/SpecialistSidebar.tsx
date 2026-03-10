import React from "react";
import specialistData from "../the-specialist.json";

export default function SpecialistSidebar() {
  const { DoctorSidebar } = specialistData;

  return (
    <div className="col-md">
      <div className="doctor-page-photo text-center">
        <img src={DoctorSidebar.image} className="img-fluid" alt="" />
      </div>
      <div className="mt-3 mt-md-5"></div>
      <table className="table doctor-page-table">
        <tbody>
          {DoctorSidebar.details.map((detail, index) => (
            <tr key={index}>
              <td>{detail.label}</td>
              <td>
                {detail.isList && Array.isArray(detail.value) ? (
                  <ul className="marker-list-md">
                    {detail.value.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  detail.value
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
