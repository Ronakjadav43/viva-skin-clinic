"use client";
import React from "react";
import contactData from "../contact.json";

export default function ContactForm() {
  const { FormSection } = contactData;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation this would tie into an API (Next.js server action etc)
  };

  return (
    <div className="section">
      <div className="container">
        <div className="row">
          <div className="col-md col-lg-5">
            <div className="pr-0 pr-lg-8">
              <div className="title-wrap">
                <h2>{FormSection.title}</h2>
                <div className="h-decor"></div>
              </div>
              <div className="mt-2 mt-lg-4">
                <p>{FormSection.description1}</p>
                <p className="p-sm">{FormSection.description2}</p>
              </div>
              <div className="mt-2 mt-md-5"></div>
              <h5>{FormSection.socialTitle}</h5>
              <div className="content-social mt-15">
                {FormSection.socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="hovicon"
                  >
                    <i className={social.icon}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="col-md col-lg-6 mt-4 mt-md-0">
            <form className="contact-form" id="contactForm" onSubmit={handleSubmit} noValidate>
              <div className="successform" style={{ display: "none" }}>
                <p>{FormSection.formConfig.successMessage}</p>
              </div>
              <div className="errorform" style={{ display: "none" }}>
                <p>{FormSection.formConfig.errorMessage}</p>
              </div>
              {FormSection.formConfig.inputs.map((input, idx) => (
                <div className={idx > 0 ? "mt-15" : ""} key={idx}>
                  <input
                    type={input.type}
                    className="form-control"
                    name={input.name}
                    placeholder={input.placeholder}
                  />
                </div>
              ))}
              <div className="mt-15">
                <textarea
                  className="form-control"
                  name="message"
                  placeholder={FormSection.formConfig.textAlign}
                ></textarea>
              </div>
              <div className="mt-3">
                <button type="submit" className="btn btn-hover-fill">
                  <i className="icon-right-arrow"></i>
                  <span>{FormSection.formConfig.submitButton}</span>
                  <i className="icon-right-arrow"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
