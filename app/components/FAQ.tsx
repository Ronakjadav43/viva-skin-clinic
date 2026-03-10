"use client";
import { useState } from "react";

import data from "../data.json";

const faqs = data.FAQ;

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="section bg-grey py-0">
      <div className="container-fluid px-0">
        <div className="row no-gutters">
          <div
            className="col-xl-6 banner-left bg-cover align-items-end"
            style={{
              backgroundImage: "url(images/content/banner-left.png)",
            }}
          />
          <div className="col-xl-6">
            <div className="faq-wrap">
              <div className="text-center text-md-left">
                <div className="title-wrap">
                  <h2 className="h1">
                    FAQ <span className="theme-color"></span>
                  </h2>
                </div>
              </div>

              <div
                id="faqAccordion1"
                className="faq-accordion mt-2 mt-lg-3"
                data-children=".faq-item"
              >
                {faqs.map((faq, index) => (
                  <div className="faq-item" key={index}>
                    <a
                      data-toggle="collapse"
                      data-parent="#faqAccordion1"
                      href={`#faqItem${index + 1}`}
                      aria-expanded="true"
                      onClick={() => toggle(index)}
                    >
                      <span>{index + 1}.</span>
                      <span>{faq.question}</span>
                    </a>
                    <div
                      id={`faqItem${index + 1}`}
                      role="tabpanel"
                      className={`overflow-hidden transition-all duration-300 faq-item-content ${
                        openIndex === index
                          ? "max-h-40 opacity-100 visible"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div>
                        <p>{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="#"
                className="btn mt-3"
                data-toggle="modal"
                data-target="#modalQuestionForm"
              >
                <i className="icon-right-arrow" />
                <span>Ask Question</span>
                <i className="icon-right-arrow" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
