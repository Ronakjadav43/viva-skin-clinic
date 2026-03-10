"use client";
import React, { useState } from "react";
import Link from "next/link";

interface Category {
  title: string;
  slug?: string;
  isOpen?: boolean;
  subItems?: { label: string; slug: string }[];
}

interface SidebarProps {
  data: {
    categories: Category[];
    workingTime: { title: string; text: string };
    contactInfo: { title: string; phone: string; email: string };
    form: { title: string; btnText: string };
  };
  activeSlug: string;
}

export default function ServiceSidebar({ data, activeSlug }: SidebarProps) {
  const { categories, workingTime, contactInfo, form } = data;
  const [openCategories, setOpenCategories] = useState<{
    [key: string]: boolean;
  }>({
    "Cosmetic Dentistry": true,
  });

  const toggleCategory = (title: string) => {
    setOpenCategories((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  return (
    <div className="col-md-4 col-lg-3">
      <ul className="services-nav flex-column flex-nowrap">
        {categories.map((cat, index) => (
          <li className="nav-item" key={index}>
            {cat.subItems ? (
              <>
                <a
                  className="nav-link"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleCategory(cat.title);
                  }}
                >
                  {cat.title}
                </a>
                <div
                  className={`collapse ${
                    openCategories[cat.title] ? "show" : ""
                  }`}
                >
                  <ul className="flex-column nav">
                    {cat.subItems.map((sub, i) => (
                      <li className="nav-item" key={i}>
                        <Link
                          className={`nav-link ${
                            activeSlug === sub.slug ? "active" : ""
                          }`}
                          href={`/services/${sub.slug}`}
                        >
                          {sub.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            ) : (
              <Link className="nav-link" href={`/services/${cat.slug}`}>
                {cat.title}
              </Link>
            )}
          </li>
        ))}
      </ul>
      <div className="row d-flex flex-column flex-sm-row flex-md-column mt-3">
        <div className="col-auto col-sm col-md-auto">
          <div className="contact-box contact-box-1">
            <h5 className="contact-box-title">{workingTime.title}</h5>
            <ul className="icn-list">
              <li>
                <i className="icon-clock"></i>
                <span
                  dangerouslySetInnerHTML={{ __html: workingTime.text }}
                ></span>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-auto col-sm col-md-auto">
          <div className="contact-box contact-box-2">
            <h5 className="contact-box-title">{contactInfo.title}</h5>
            <ul className="icn-list">
              <li>
                <i className="icon-telephone"></i>
                <div className="d-flex flex-wrap">
                  <span>Phone:&nbsp;&nbsp;</span>
                  <span
                    dangerouslySetInnerHTML={{ __html: contactInfo.phone }}
                  ></span>
                </div>
              </li>
              <li>
                <i className="icon-black-envelope"></i>
                <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="question-box mt-3">
        <h5 className="question-box-title">{form.title}</h5>
        <form
          id="questionForm"
          method="post"
          noValidate
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            className="form-control"
            name="name"
            placeholder="Your name*"
          />
          <input
            type="text"
            className="form-control"
            name="email"
            placeholder="E-mail*"
          />
          <input
            type="text"
            className="form-control"
            name="phone"
            placeholder="Phone"
          />
          <textarea
            className="form-control"
            name="message"
            placeholder="Question*"
          ></textarea>
          <button type="submit" className="btn btn-sm btn-hover-fill mt-15">
            <i className="icon-right-arrow"></i>
            <span>{form.btnText}</span>
            <i className="icon-right-arrow"></i>
          </button>
        </form>
      </div>
    </div>
  );
}
