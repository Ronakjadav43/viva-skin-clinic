"use client";
import React, { useState } from "react";

interface FAQ {
  id: string;
  question: string;
  answer: string;
}

interface PageData {
  title: string;
  img: string;
  paragraphs: string[];
  section1: { title: string; paragraphs: string[] };
  procedure: { title: string; paragraphs: string[]; list: string[]; closing: string };
  faqs: FAQ[];
}

export default function ServiceContent({ page }: { page: PageData }) {
  const [openFaq, setOpenFaq] = useState<string | null>("faq1");

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <div className="col-md-8 col-lg-9 mt-4 mt-md-0">
      <div className="title-wrap">
        <h1>{page.title}</h1>
      </div>
      <div className="service-img">
        <img src={page.img} className="img-fluid" alt={page.title} />
      </div>
      <div className="pt-2 pt-md-4">
        {page.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
        <div className="mt-3 mt-lg-6"></div>
        
        <h3>{page.section1.title}</h3>
        <div className="mt-0 mt-lg-4"></div>
        {page.section1.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
        <div className="mt-3 mt-lg-6"></div>
        
        <h3>{page.procedure.title}</h3>
        <div className="mt-0 mt-lg-4"></div>
        {page.procedure.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
        <div className="mt-3"></div>
        <ul className="numbered-list-lg">
          {page.procedure.list.map((li, i) => (
            <li key={i}>{li}</li>
          ))}
        </ul>
        <div className="mt-3"></div>
        <p>{page.procedure.closing}</p>
        
        <div className="mt-3 mt-md-5 px-1 pt-1 pb-15 pt-md-2 px-md-4 bg-grey">
          <div className="faq-accordion">
            {page.faqs.map((faq) => (
              <div className="faq-item" key={faq.id}>
                <a
                  className={openFaq === faq.id ? "" : "collapsed"}
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleFaq(faq.id);
                  }}
                >
                  {faq.question}
                </a>
                <div
                  className={`collapse faq-item-content ${
                    openFaq === faq.id ? "show" : ""
                  }`}
                >
                  <div>
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
