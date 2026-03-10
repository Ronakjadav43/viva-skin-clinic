"use client";
import React, { useState } from "react";

const mobileInfo = [
  {
    id: 1,
    icon: "icon-placeholder2",
    content: (
      <>
        1560 Holden Street San Diego,
        <br /> CA 92139
      </>
    ),
  },
  {
    id: 2,
    icon: "icon-telephone",
    content: (
      <>
        <span className="text-nowrap">+91 99786 70270</span>,{" "}
        <span className="text-nowrap">1-800-267-0001</span>
      </>
    ),
  },
  {
    id: 3,
    icon: "icon-black-envelope",
    content: (
      <a href="mailto:vivaskincarecenter@gmail.com">
        vivaskincarecenter@gmail.com
      </a>
    ),
  },
  {
    id: 4,
    icon: "icon-clock",
    content: (
      <>
        Mon-Fri: 08:00 - 20:00
        <br /> Saturday: 08:00 - 18:00
      </>
    ),
  },
];

const socialLinks = [
  { id: 1, icon: "icon-facebook-logo-circle", url: "#" },
  { id: 2, icon: "icon-twitter-logo-circle", url: "#" },
  { id: 3, icon: "icon-google-plus-circle", url: "#" },
];

const navLinks = [
  { id: 1, label: "About Us", url: "about.html" },
  {
    id: 2,
    label: "Services",
    url: "services.html",
    subLinks: [
      { label: "All Services", url: "services.html" },
      { label: "Service Page", url: "service-page.html" },
      { label: "Prices", url: "prices.html" },
      { label: "Online Shop", url: "shop-listing.html" },
    ],
  },
  {
    id: 3,
    label: "Smiles Gallery",
    url: "gallery.html",
    subLinks: [
      { label: "Creative Gallery", url: "gallery.html" },
      { label: "Simple Gallery", url: "gallery-simple.html" },
    ],
  },
  {
    id: 4,
    label: "Our Specialists",
    url: "our-specialist.html",
    subLinks: [
      { label: "All Specialists", url: "our-specialist.html" },
      { label: "Doctor Page", url: "doctor-page.html" },
      { label: "Schedule Table", url: "schedule.html" },
    ],
  },
  { id: 5, label: "Testimonials", url: "testimonials.html" },
  {
    id: 6,
    label: "Blog",
    url: "blog.html",
    subLinks: [
      { label: "Blog Posts", url: "blog.html" },
      { label: "Blog Grid Posts", url: "blog-grid.html" },
      { label: "Blog Single Post", url: "blog-post-page.html" },
    ],
  },
  { id: 7, label: "Contacts", url: "contact.html" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="hidden header" style={{ position: "unset" }}>
      <div className="header-mobile-info">
        <div className="header-mobile-info-content js-info-content">
          <ul className="icn-list-sm">
            {mobileInfo.map((info) => (
              <li key={info.id}>
                <i className={info.icon} />
                {info.content}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="header-mobile-top">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-3">
              <div className="header-mobile-info-toggle js-info-toggle" />
            </div>
            <div className="col-auto header-button-wrap ml-auto">
              <a
                href="#"
                className="btn"
                data-toggle="modal"
                data-target="#modalBookingForm"
              >
                <i className="icon-right-arrow" />
                APPOINTMENT
                <i className="icon-right-arrow" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="header-topline d-none d-lg-flex">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-auto d-flex align-items-center">
              <div className="header-phone">
                <i className="icon-telephone" />
                <a href="tel:1-847-555-5555">+91 99786 70270</a>
              </div>
              <div
                className="header-info"
                style={{
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  width: 350,
                  display: "block",
                  whiteSpace: "nowrap",
                }}
              >
                <i className="icon-placeholder2" />
                1st floor, V Plaza, 104, opp. Laxmi Enclave, nr. Gajera
                School, Katargam, Surat, Gujarat 395004
              </div>
              <div className="header-info">
                <i className="icon-black-envelope" />
                <a href="mailto:vivaskincarecenter@gmail.com">
                  vivaskincarecenter@gmail.com
                </a>
              </div>
            </div>
            <div className="col-auto ml-auto d-flex align-items-center">
              <span className="header-social">
                {socialLinks.map((link) => (
                  <a href={link.url} className="hovicon" key={link.id}>
                    <i className={link.icon} />
                  </a>
                ))}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="header-content">
        <div className="container">
          <div className="row align-items-lg-center">
            <button
              className="navbar-toggler collapsed"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="icon-menu" />
            </button>
            <div className="col-lg-auto col-lg-2 d-flex align-items-lg-center">
              <a href="index-2.html" className="header-logo">
                <img src="images/VivaLogo.png" alt="" className="img-fluid" />
              </a>
            </div>
            <div className="col-lg ml-auto header-nav-wrap">
              <div className="header-nav js-header-nav">
                <nav className="navbar navbar-expand-lg btco-hover-menu">
                  <div
                    className={`navbar-collapse justify-content-end visible ${
                      isOpen ? "" : "collapse"
                    }`}
                    id="navbarNavDropdown"
                  >
                    <ul className="navbar-nav">
                      {navLinks.map((nav) => (
                        <li
                          className={`nav-item ${nav.subLinks ? "dropdown" : ""}`}
                          key={nav.id}
                        >
                          <a
                            className={`nav-link ${
                              nav.subLinks ? "dropdown-toggle" : ""
                            }`}
                            href={nav.url}
                            data-toggle={nav.subLinks ? "dropdown" : undefined}
                          >
                            {nav.label}
                          </a>
                          {nav.subLinks && (
                            <ul className="dropdown-menu">
                              {nav.subLinks.map((sub, idx) => (
                                <li key={idx}>
                                  <a className="dropdown-item" href={sub.url}>
                                    {sub.label}
                                 </a>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </nav>
              </div>
              <div className="header-search">
                <form action="#" className="form-inline">
                  <i className="icon-search" />
                  <input type="text" placeholder="Search" />
                  <button type="submit">
                    <i className="icon-search" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
