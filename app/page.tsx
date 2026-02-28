'use client';
import Image from "next/image";
import { useState } from "react";

export default function Home() {

  const [isOpen, setIsOpen] = useState(false);


  return (
   <div className="shop-page">
 
  {/*header*/}
  <header className="header" style={{ position: "unset" }}>
    <div className="header-mobile-info">
      <div className="header-mobile-info-content js-info-content">
        <ul className="icn-list-sm">
          <li>
            <i className="icon-placeholder2" />
            1560 Holden Street San Diego,
            <br /> CA 92139
          </li>
          <li>
            <i className="icon-telephone" />
            <span className="text-nowrap">+91 99786 70270</span>,{" "}
            <span className="text-nowrap">1-800-267-0001</span>
          </li>
          <li>
            <i className="icon-black-envelope" />
            <a href="mailto:vivaskincarecenter@gmail.com">vivaskincarecenter@gmail.com</a>
          </li>
          <li>
            <i className="icon-clock" />
            Mon-Fri: 08:00 - 20:00
            <br /> Saturday: 08:00 - 18:00
          </li>
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
            <div className="header-info"   style={{
    textOverflow: "ellipsis",
    overflow: "hidden",
    width: 350,
    display: "block",
    whiteSpace: "nowrap"
  }}>
              <i className="icon-placeholder2" />
              1st floor, V Plaza, 104, opp. Laxmi Enclave, nr. Gajera School, Katargam, Surat, Gujarat 395004
            </div>
            <div className="header-info">
              <i className="icon-black-envelope" />
              <a href="mailto:vivaskincarecenter@gmail.com">vivaskincarecenter@gmail.com</a>
            </div>
          </div>
          <div className="col-auto ml-auto d-flex align-items-center">
            <span className="header-social">
              <a href="#" className="hovicon">
                <i className="icon-facebook-logo-circle" />
              </a>
              <a href="#" className="hovicon">
                <i className="icon-twitter-logo-circle" />
              </a>
              <a href="#" className="hovicon">
                <i className="icon-google-plus-circle" />
              </a>
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
            // data-toggle="collapse"
            // data-target="#navbarNavDropdown"
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
                  // className=" justify-content-end "
                  // id="navbarNavDropdown"
                   className={`navbar-collapse justify-content-end visible ${isOpen ? "" : "collapse"}`}
  id="navbarNavDropdown"
                >
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a className="nav-link" href="about.html">
                        About Us
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="services.html"
                        className="nav-link dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        Services
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="services.html">
                            All Services
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="service-page.html">
                            Service Page
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="prices.html">
                            Prices
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="shop-listing.html">
                            Online Shop
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a
                        href="gallery.html"
                        className="nav-link dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        Smiles Gallery
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="gallery.html">
                            Creative Gallery
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="gallery-simple.html"
                          >
                            Simple Gallery
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a
                        href="our-specialist.html"
                        className="nav-link dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        Our Specialists
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a
                            className="dropdown-item"
                            href="our-specialist.html"
                          >
                            All Specialists
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="doctor-page.html">
                            Doctor Page
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="schedule.html">
                            Schedule Table
                          </a>
                        </li>
                      </ul>
                    </li>{" "}
                    <li className="nav-item">
                      <a className="nav-link" href="testimonials.html">
                        Testimonials
                      </a>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        href="blog.html"
                        className="nav-link dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        Blog
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="blog.html">
                            Blog Posts
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="blog-grid.html">
                            Blog Grid Posts
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="blog-post-page.html"
                          >
                            Blog Single Post
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="contact.html">
                        Contacts
                      </a>
                    </li>
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
            {/* <div className="header-cart cart-toggler">
              <a href="#" className="icon icon-cart" />
              <span className="badge">2</span>
              <div className="header-cart-dropdown">
                <div className="prd-sm">
                  <div className="prd-sm-img">
                    <a href="shop-product.html">
                      <img
                        src="images/product/prd-sm-1.jpg"
                        className="img-fluid"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="prd-sm-info">
                    <h3>
                      <a href="shop-product.html">
                        Active Wow Teeth Whitening Charcoal Powder
                      </a>
                    </h3>
                    <div className="price">$38.88</div>
                  </div>
                  <div className="prd-sm-delete">
                    <i className="icon-close" />
                  </div>
                </div>
                <div className="prd-sm">
                  <div className="prd-sm-img">
                    <a href="shop-product.html">
                      <img
                        src="images/product/prd-sm-2.jpg"
                        className="img-fluid"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="prd-sm-info">
                    <h3>
                      <a href="shop-product.html">Electric Toothbrush</a>
                    </h3>
                    <div className="price">$39.97</div>
                  </div>
                  <div className="prd-sm-delete">
                    <i className="icon-close" />
                  </div>
                </div>
                <div className="header-cart-total">
                  <div className="float-left">Total:</div>
                  <div className="float-right">$78.85</div>
                </div>
                <a href="#" className="btn btn-sm btn-hover-fill">
                  <span>CheckOut</span>
                </a>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  </header>
  
  {/*//header*/}
  <div className="page-content">
    {/*section slider*/}
    <div className="section mt-0">
      <div className="quickLinks-wrap js-quickLinks-wrap-d d-none d-lg-flex">
        <div className="quickLinks js-quickLinks">
          <div className="container">
            <div className="row no-gutters">
              <div className="col">
                <a href="#" className="link">
                  <i className="icon-placeholder" />
                  <span>Location</span>
                </a>
                <div className="link-drop p-0">
                  <div id="googleMapDrop" className="google-map" />
                </div>
              </div>
              <div className="col">
                <a href="#" className="link">
                  <i className="icon-clock" />
                  <span>Working Time</span>
                </a>
                <div className="link-drop">
                  <h5 className="link-drop-title">
                    <i className="icon-clock" />
                    Working Time
                  </h5>
                  <table className="row-table">
                    <tbody>
                      <tr>
                        <td>
                          <i>Mon-Thu</i>
                        </td>
                        <td>10:00 - 21:00</td>
                      </tr>
                      <tr>
                        <td>
                          <i>Friday</i>
                        </td>
                        <td> 10:00 - 21:00</td>
                      </tr>
                      <tr>
                        <td>
                          <i>Saturday</i>
                        </td>
                        <td>10:00 - 21:00</td>
                      </tr>
                      <tr>
                        <td>
                          <i>Sunday</i>
                        </td>
                        <td>10:00 - 13:00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="col">
                <a href="#" className="link">
                  <i className="icon-pencil-writing" />
                  <span>Request Form</span>
                </a>
                <div className="link-drop">
                  <h5 className="link-drop-title">
                    <i className="icon-pencil-writing" />
                    Request Form
                  </h5>
                  {/* noValidate="" */}
                  <form id="requestForm" method="post" >
                    <div className="successform">
                      <p>Your message was sent successfully!</p>
                    </div>
                    <div className="errorform">
                      <p>
                        Something went wrong, try refreshing and submitting the
                        form again.
                      </p>
                    </div>
                    <div className="input-group">
                      <span>
                        <i className="icon-user" />
                      </span>
                      <input
                        name="requestname"
                        type="text"
                        className="form-control"
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="row row-sm-space mt-1">
                      <div className="col">
                        <div className="input-group">
                          <span>
                            <i className="icon-email2" />
                          </span>
                          <input
                            name="requestemail"
                            type="text"
                            className="form-control"
                            placeholder="Your Email"
                          />
                        </div>
                      </div>
                      <div className="col">
                        <div className="input-group">
                          <span>
                            <i className="icon-smartphone" />
                          </span>
                          <input
                            name="requestphone"
                            type="text"
                            className="form-control"
                            placeholder="Your Phone"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="selectWrapper input-group mt-1">
                      <span>
                        <i className="icon-tooth" />
                      </span>
                      <select name="requestservice" className="form-control">
                        <option >
                          {/* selected="selected" disabled="disabled" */}
                          Select Service
                        </option>
                        <option value="Cosmetic Dentistry">
                          Cosmetic Dentistry
                        </option>
                        <option value="General Dentistry">
                          General Dentistry
                        </option>
                        <option value="Orthodontics">Orthodontics</option>
                        <option value="Children`s Dentistry">
                          Children`s Dentistry
                        </option>
                        <option value="Dental Implants">Dental Implants</option>
                        <option value="Dental Emergency">
                          Dental Emergency
                        </option>
                      </select>
                    </div>
                    <div className="row row-sm-space mt-1">
                      <div className="col-sm-6">
                        <div className="input-group flex-nowrap">
                          <span>
                            <i className="icon-calendar2" />
                          </span>
                          <div className="datepicker-wrap">
                            <input
                              name="requestdate"
                              type="text"
                              className="form-control datetimepicker"
                              placeholder="Date"
                              // readOnly=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 mt-1 mt-sm-0">
                        <div className="input-group flex-nowrap">
                          <span>
                            <i className="icon-clock" />
                          </span>
                          <div className="datepicker-wrap">
                            <input
                              name="requesttime"
                              type="text"
                              className="form-control timepicker"
                              placeholder="Time"
                              // readOnly=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-right mt-2">
                      <button
                        type="submit"
                        className="btn btn-sm btn-hover-fill"
                      >
                        Request
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col">
                <a href="#" className="link">
                  <i className="icon-calendar" />
                  <span>Doctors Timetable</span>
                </a>
                <div className="link-drop">
                  <h5 className="link-drop-title">
                    <i className="icon-calendar" />
                    Doctors Timetable
                  </h5>
                  <p>
                    This simply works as a guide and helps you to connect with
                    dentists of your choice. Please confirm the doctor’s
                    availability before leaving your premises.
                  </p>
                  <p className="text-right">
                    <a
                      href="schedule.html"
                      className="btn btn-sm btn-hover-fill"
                    >
                      Details
                    </a>
                  </p>
                </div>
              </div>
              <div className="col">
                <a href="#" className="link">
                  <i className="icon-price-tag" />
                  <span>Calculator</span>
                </a>
                <div className="link-drop">
                  <h5 className="link-drop-title">
                    <i className="icon-price-tag" />
                    Quick Pricing
                  </h5>
                  <table className="row-table">
                    <tbody>
                      <tr>
                        <td>Initial Consultation</td>
                        <td>$10</td>
                      </tr>
                      <tr>
                        <td>Dental check-up</td>
                        <td>$15</td>
                      </tr>
                      <tr>
                        <td>Routine Exam (no xrays)</td>
                        <td>$50</td>
                      </tr>
                      <tr>
                        <td>Simple Removal of a tooth</td>
                        <td>$122</td>
                      </tr>
                      <tr>
                        <td>Teeth cleaning</td>
                        <td>$50 - $75</td>
                      </tr>
                      <tr>
                        <td>X-ray image</td>
                        <td>$10</td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="text-right mt-15">
                    <a href="prices.html" className="btn btn-sm btn-hover-fill">
                      Calculator
                    </a>
                    <a href="prices.html" className="btn btn-sm btn-hover-fill">
                      Details
                    </a>
                  </p>
                </div>
              </div>
              <div className="col">
                <a href="#" className="link">
                  <i className="icon-emergency-call" />
                  <span>Emergency Case</span>
                </a>
                <div className="link-drop">
                  <h5 className="link-drop-title">
                    <i className="icon-emergency-call" />
                    Emergency Case
                  </h5>
                  <p>
                    Emergency dental care may be needed if you have had a blow
                    to the face, lost a filling, or cracked a tooth.{" "}
                  </p>
                  <ul className="icn-list">
                    <li>
                      <i className="icon-telephone" />
                      <span className="phone">
                        +91 94083 25293
                        <br />
                        +91 99786 70270
                      </span>
                    </li>
                    <li>
                      <i className="icon-black-envelope" />
                      <a href="mailto:vivaskincarecenter@gmail.com">
                        vivaskincarecenter@gmail.com
                      </a>
                    </li>
                  </ul>
                  <p className="text-right mt-2">
                    <a
                      href="contact.html"
                      className="btn btn-sm btn-hover-fill"
                    >
                      Our Contacts
                    </a>
                  </p>
                </div>
              </div>
              <div className="col col-close">
                <a href="#" className="js-quickLinks-close">
                  <i
                    className="icon-top"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Close panel"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="quickLinks-open js-quickLinks-open">
            <span
              data-toggle="tooltip"
              data-placement="left"
              title="Open panel"
            >
              +
            </span>
          </div>
        </div>
      </div>
      <div id="mainSliderWrapper">
        <div className="loading-content">
          <div className="inner-circles-loader" />
        </div>
        <div
          className="main-slider mb-0 arrows-white"
          id="mainSlider"
          data-slick='{"arrows": true, "responsive":[{"breakpoint": 768,"settings":{"arrows": false, "dots": true }}]}'
        >
          <div className="slide">
            <div
              className="img--holder"
              data-animation="kenburns"
              // data-bg="images/content/slider/s1.png"
              style={{ backgroundImage: "url(images/slider/s1.png)" }}
            />
            <div className="slide-content center">
              <div className="vert-wrap container">
                <div className="vert">
                  <div className="container">
                    <div
                      className="slide-txt1"
                      data-animation="fadeInDown"
                      data-animation-delay="1s"
                    >
                      Restore Your Skin.
                      <br />
                      <b>Regrow Your Confidence.</b>
                    </div>
                    <div
                      className="slide-txt2"
                      data-animation="fadeInUp"
                      data-animation-delay="1.5s"
                    >
                      Let us help you look your best!
                    </div>
                    <div className="slide-btn">
                      <a
                        href="services.html"
                        className="btn btn-white"
                        data-animation="fadeInUp"
                        data-animation-delay="2s"
                      >
                        <i className="icon-right-arrow" />
                        <span>Know more</span>
                        <i className="icon-right-arrow" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="slide">
            <div
              className="img--holder"
              data-animation="kenburns"
              // data-bg="images/content/slider/s2.png"
               style={{ backgroundImage: "url(images/slider/s2.png)" }}
            />
            <div className="slide-content center">
              <div className="vert-wrap container">
                <div className="vert">
                  <div className="container">
                    <div
                      className="slide-txt1"
                      data-animation="fadeInDown"
                      data-animation-delay="1s"
                    >
                      Advanced 
                      <br />
                      <b>Skin, Hair & Fungal Treatment</b>
                    </div>
                    <div
                      className="slide-txt2"
                      data-animation="fadeInUp"
                      data-animation-delay="1.5s"
                    >
                      Highest standards of customer service
                    </div>
                    <div className="slide-btn">
                      <a
                        href="services.html"
                        className="btn btn-white"
                        data-animation="fadeInUp"
                        data-animation-delay="2s"
                      >
                        <i className="icon-right-arrow" />
                        <span>Know more</span>
                        <i className="icon-right-arrow" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

           <div className="slide">
            <div
              className="img--holder"
              data-animation="kenburns"
              // data-bg="images/content/slider/s2.png"
               style={{ backgroundImage: "url(images/slider/s4.png)" }}
            />
            <div className="slide-content center">
              <div className="vert-wrap container">
                <div className="vert">
                  <div className="container">
                    <div
                      className="slide-txt1"
                      data-animation="fadeInDown"
                      data-animation-delay="1s"
                    >
                      Safe, Scientific
                      <br />
                      <b>Result-Oriented Dermatology Care</b>
                    </div>
                    <div
                      className="slide-txt2"
                      data-animation="fadeInUp"
                      data-animation-delay="1.5s"
                    >
                      Highest standards of customer service
                    </div>
                    <div className="slide-btn">
                      <a
                        href="services.html"
                        className="btn btn-white"
                        data-animation="fadeInUp"
                        data-animation-delay="2s"
                      >
                        <i className="icon-right-arrow" />
                        <span>Know more</span>
                        <i className="icon-right-arrow" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*//section slider*/}
    {/*section welcome*/}
    <div style={{ display: "none" }} className=" section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 d-none d-lg-block">
            <img
              src="images/content/surgery-index-01.jpg"
              alt=""
              className="img-fluid"
            />
          </div>
          <div className="col-lg-6">
            <div className="title-wrap text-center text-lg-left mt-15 d-none d-md-block">
              <div className="h-sub">Welcome to our plastic surgeon clinic</div>
              <h2 className="h1">
                Meet <span className="theme-color">Dr. Anderson</span>
              </h2>
            </div>
            <div className="row">
              <div className="d-lg-none col-8 col-sm-6 col-lg-5 mx-auto">
                <img
                  src="images/content/surgery-index-01.jpg"
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div className="col-sm">
                <div className="title-wrap text-center text-lg-left mt-3 mt-sm-0 d-md-none">
                  <div className="h-sub">
                    Welcome to our plastic surgeon clinic
                  </div>
                  <h2 className="h1">
                    Meet <span className="theme-color">Dr. Anderson</span>
                  </h2>
                </div>
                <div className="text-left mt-3 mt-sm-0">
                  <p className="p-lg">
                    We are pleased that you have chosen to explore what we have
                    to offer: aesthetic and reconstructive services that are
                    provided by fellowship-trained plastic surgeons, in a safe
                    and secure environment. Whether you desire minimally
                    invasive facial rejuvenation or perforator flap breast
                    reconstruction, we are committed to providing the highest
                    quality experience, focusing on the unique needs of the
                    plastic surgery patient.
                  </p>
                  <p>
                    Plastic surgery provides evaluation and treatment for adult
                    and pediatric patients who are candidates for reconstructive
                    or aesthetic surgery
                  </p>
                  <div className="mt-0 mt-lg-2 mt-xl-4">
                    <img
                      src="images/content/signature.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="mt-0 mt-lg-15 mt-xl-3" />
                  <a
                    href="#"
                    className="btn-link"
                    data-toggle="modal"
                    data-target="#modalBookingForm"
                  >
                    Booking a Visit
                    <i className="icon-right-arrow" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
<>
  {/*section Our Treatments*/}
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
      <div className="blog-grid-full  mt-3 mb-0 row">
        <div className="col-md-6 col-lg-6">
          <a href="service-page.html" className="service-card-style4">
            <div className="service-card-img">
              <img src="images/content/t1.jpg" alt="" />
            </div>
            <h5 className="service-card-name">Acne & Acne Spot</h5>
            <div className="service-card-bg">
              <i className="icon-salat" ></i>
              <h5 className="service-card-name">Acne & Acne Spot</h5>
              <p>
                Effective treatment for active acne and stubborn acne marks. We use advanced dermatology techniques to reduce inflammation, prevent breakouts and lighten acne pigmentation for clear skin.
              </p>
              <span className="btn-plus">+</span>
              <div className="service-card-img-num">1</div>
            </div>
          </a>
        </div>
        <div className="col-md-6 col-lg-6">
          <a href="service-page.html" className="service-card-style4">
            <div className="service-card-img">
              <img src="images/content/t2.jpg" alt="" />
            </div>
            <h5 className="service-card-name">Hair Fall & Growth</h5>
            <div className="service-card-bg">
              <i className="icon-run" />
              <h5 className="service-card-name">Hair Fall & Growth</h5>
              <p>
                Target hair thinning and excessive hair fall with clinically proven solutions for stronger, healthier hair.
              </p>
              <span className="btn-plus">+</span>
              <div className="service-card-img-num">2</div>
            </div>
          </a>
        </div>
        <div className="col-md-6 col-lg-6">
          <a href="service-page.html" className="service-card-style4">
            <div className="service-card-img">
              <img src="images/content/t3.jpg" alt="" />
            </div>
            <h5 className="service-card-name">Fungal Infections</h5>
            <div className="service-card-bg">
              <i className="icon-pills" />
              <h5 className="service-card-name">Fungal Infections</h5>
              <p>
                Safe and effective dermatological treatments for fungal skin infections with long-term prevention guidance.
              </p>
              <span className="btn-plus">+</span>
              <div className="service-card-img-num">3</div>
            </div>
          </a>
        </div>
        <div className="col-md-6 col-lg-6">
          <a href="service-page.html" className="service-card-style4">
            <div className="service-card-img">
              <img src="images/content/t4.jpg" alt="" />
            </div>
            <h5 className="service-card-name">Laser Hair Removal</h5>
            <div className="service-card-bg">
              <i className="icon-behavior" />
              <h5 className="service-card-name">Laser Hair Removal</h5>
              <p>
                Permanent hair reduction with advanced laser technology. Safe for all skin types with painless, precise results.
              </p>
              <span className="btn-plus">+</span>
              <div className="service-card-img-num">4</div>
            </div>
          </a>
        </div>
        </div>

      </div>

<div className="container-fluid">
        <div className="blog-grid-full blog-grid-carousel-full js-blog-grid-carousel-full mt-3 mb-0 row">
        <div className="col-md-6 col-lg-4">
          <a href="service-page.html" className="service-card-style4">
            <div className="service-card-img">
              <img src="images/content/t1.jpg" alt="" />
            </div>
            <h5 className="service-card-name">PRP Therapy</h5>
            <div className="service-card-bg">
              <i className="icon-happy" />
              <h5 className="service-card-name">PRP Therapy</h5>
              <p>
                Platelet-Rich Plasma therapy for skin rejuvenation and hair restoration using your body's own healing power.
              </p>
              <span className="btn-plus">+</span>
              <div className="service-card-img-num">5</div>
            </div>
          </a>
        </div>
        <div className="col-md-6 col-lg-4">
          <a href="service-page.html" className="service-card-style4">
            <div className="service-card-img">
              <img src="images/content/t2.jpg" alt="" />
            </div>
            <h5 className="service-card-name">Hydrafacial</h5>
            <div className="service-card-bg">
              <i className="icon-molecula" ></i>
              <h5 className="service-card-name">Hydrafacial</h5>
              <p>
                Premium facial treatments for deep cleansing, exfoliation, and hydration to reveal radiant, glowing skin.
              </p>
              <span className="btn-plus">+</span>
              <div className="service-card-img-num">6</div>
            </div>
          </a>
        </div>
        <div className="col-md-6 col-lg-4">
          <a href="service-page.html" className="service-card-style4">
            <div className="service-card-img">
              <img src="images/content/t3.jpg" alt="" />
            </div>
            <h5 className="service-card-name">Pigmentation Treatment</h5>
            <div className="service-card-bg">
              <i className="icon-coach" ></i>
              <h5 className="service-card-name">Pigmentation Treatment</h5>
              <p>
                Advanced solutions for dark spots, melasma, and uneven skin tone using cutting-edge dermatology techniques.
              </p>
              <span className="btn-plus">+</span>
              <div className="service-card-img-num">7</div>
            </div>
          </a>
        </div>
        <div className="col-md-6 col-lg-4">
          <a href="service-page.html" className="service-card-style4">
            <div className="service-card-img">
              <img src="images/content/t4.jpg" alt="" />
            </div>
            <h5 className="service-card-name">Glutathione IV Drip</h5>
            <div className="service-card-bg">
              <i className="icon-instruments" />
              <h5 className="service-card-name">Glutathione IV Drip</h5>
              <p>
                Premium skin brightening treatment with Glutathione IV drips for overall skin glow and antioxidant protection.
              </p>
              <span className="btn-plus">+</span>
              <div className="service-card-img-num">8</div>
            </div>
          </a>
        </div>
      </div>
      </div>



    </div>
  </div>
  {/*//section Our Treatments*/}

<>
  {/*section Why Choose Us? */}
  <div className="section bg-grey mt-0 py-0">
    <div className="container-fluid px-0 over-visible">
      <div className="row white-col-wrap">
        <div className="col-md-6 white-col">
          <div className="white-col-inside">
            <div className="title-wrap-alt">
              <div className="h-sub-lined theme-color">Why Choose Us?</div>
              <h2 className="h1">
                Expert Skin, Hair & Fungal Care with 
                <span className="theme-color">Advanced Dermatology Solutions</span>
              </h2>
            </div>
            <p>
             At Viva Skin Clinic, we combine medical expertise with modern dermatology technology to deliver safe, effective, and personalized treatments.
            </p>
            <p>We focus not just on treating symptoms — but on identifying the root cause to ensure long-lasting results and healthier skin.</p>
            <ul className="marker-list-md">
              <li>Advanced Skin & Hair Treatments</li>
              <li>Modern Laser & Clinical Equipment</li>
              <li>Personalized Treatment Plans</li>
              <li>Safe & Hygienic Environment</li>
            </ul>
            <div className="mt-3 mt-lg-5">
              <div className="counter-box-grid">
                <div className="counter-box-sm">
                  <div className="counter-box-sm-number">
                    <span className="count" data-to={5} data-speed={1500}>
                      5
                    </span>
                    <span className="sup">+</span>
                  </div>
                  <div className="counter-box-sm-text">Years of Dermatology Experience</div>
                </div>
                <div className="counter-box-sm">
                  <div className="counter-box-sm-number">
                    <span className="count" data-to={10} data-speed={1500}>
                      10
                    </span>
                    <span className="sup">K+</span>
                  </div>
                  <div className="counter-box-sm-text">Happy Patients Treated</div>
                </div>
                <div className="counter-box-sm">
                  <div className="counter-box-sm-number">
                    <span className="count" data-to={8} data-speed={1500}>
                      8
                    </span>
                    <span className="sup">+</span>
                  </div>
                  <div className="counter-box-sm-text">Specialized Treatments</div>
                </div>
                <div className="counter-box-sm">
                  <div className="counter-box-sm-number">
                    <span className="count" data-to={100} data-speed={1500}>
                      100
                    </span>
                    <span className="sup">%</span>
                  </div>
                  <div className="counter-box-sm-text">Patient-Centered Care</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-0 mb-lg-7 image-right-fullheight-col">
          <div className="image-right-fullheight">
            <img src="images/content/banner-right1.jpg" alt="" />
            <div className="image-corner image-corner--left">
              <i className="icon-achivement" />
            </div>
          </div>
          <div className="over-image-card over-image-card--sm pos-center-1">
            <div className="over-image-card-icon">
              <i className="icon-phone-time" />
            </div>
            <div className="over-image-card-text">
              <h4>Free 15 Min Consultation</h4>
              <p>
                Use the form to book your FREE 15 min telephone consultation.
              </p>
              <a
                href="#"
                className="btn btn-white btn-white--all"
                data-toggle="modal"
                data-target="#modalBookingForm"
              >
                <i className="icon-right-arrow" />
                <span>book consultation</span>
                <i className="icon-right-arrow" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*//section Why Choose Us? */}
</>


{/*section Why Choose Us?*/}
    <div className="hidden section">
      <div className="container">
        <div className="title-wrap text-center">
          <div className="h-sub theme-color">See the difference</div>
          <h2 className="h1">Why Choose Us?</h2>
          <div className="h-decor" />
        </div>
        <div
          className="row js-icn-carousel icn-carousel flex-column flex-sm-row text-center text-sm-left"
          data-slick='{"slidesToShow": 3, "responsive":[{"breakpoint": 1024,"settings":{"slidesToShow": 2}}]}'
        >
          <div className="col-md">
            <div className="icn-text">
              <div className="icn-text-circle icn-text-circle--sm">
                <i className="icon-medicine" />
              </div>
              <div>
                <h5 className="icn-text-title">High Standard of surgery</h5>
                <p>
                  Our surgeons are fellows of the most rigorous and academically
                  recognized accreditation body for surgeons, and have completed
                  accredited fellowship training with high standards of quality.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md">
            <div className="icn-text">
              <div className="icn-text-circle">
                <i className="icon-team" />
              </div>
              <div>
                <h5 className="icn-text-title">Committed Surgical Team</h5>
                <p>
                  Our surgeons' expertise covers the broad scope of general,
                  vascular and trauma surgery. This includes surgery of the
                  breast, cancers, colon and rectum, endocrine system, and skin
                  diseases.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md">
            <div className="icn-text">
              <div className="icn-text-circle icn-text-circle--sm">
                <i className="icon-syringe" />
              </div>
              <div>
                <h5 className="icn-text-title">Modern Equipment</h5>
                <p>
                  Our practice is equipped with the latest technology that
                  allows us to perform the most modern treatments. We only use
                  the premium brand products from the leading manufacturers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*//section Why Choose Us?*/}





  {/*section About us*/}
  <div className="section bg-norepeat bg-md-none section-top-padding">
    <div className="container">
      <div className="row">
        <div className="col-md-6 pl-lg-3 pt-lg-5">
          <div className="title-wrap-alt">
            <div className="h-sub-lined theme-color">About us</div>
            <h2 className="h1">
              Personalized Dermatology 
              <span className="theme-color">Care for Healthier Skin</span>
            </h2>
          </div>
          <p className="p-bold">
            Dr. Akash Satasiya has extensive experience in diagnosing and treating acne, hair fall, pigmentation disorders, fungal infections, and advanced aesthetic concerns.
          </p>
          <p>
            At Viva Skin Clinic, we provide advanced medical care for skin, hair, and fungal conditions with a patient-focused approach.
          </p>
<p>
  Our clinic combines clinical expertise with modern dermatology technology to deliver safe, effective, and personalized treatments tailored to each individual’s needs.
  We believe healthy skin is not just about appearance, it reflects overall well-being and confidence.
</p>

          <div className="signature mt-3">
            <div className="signature-img">
              <img src="images/content/signature.png" alt="Signature" />
            </div>
            <div className="signature-text">
              <h5>Dr. Akash Satasiya</h5>
              Naturopathic Doctor, Certified Personal Trainer, Ideal Protein
              Coach
            </div>
          </div>
          <div className="mt-2" />
          <a
            href="#"
            className="btn-link btn-link--sm"
            data-toggle="modal"
            data-target="#modalBookingForm"
          >
            schedule a visit
            <i className="icon-right-arrow" />
          </a>
        </div>
        <div className="col-md-6 mb-lg-5 position-relative mt-3 mt-md-0">
          <div className="img-with-bg">
            <img src="images/content/index-img-01.jpg" alt="" />
            <img src="images/content/img-bg.png" className="img-bg" alt="" />
          </div>
          <a
            href="#"
            className="video-btn-circle-left js-video-btn"
            data-toggle="modal"
            data-src="https://www.youtube.com/embed/uyWt48mWmz0"
            data-target="#videoModal"
          >
            <span>
              <i className="icon-play" />
            </span>
          </a>
          {/* Video Modal */}
          <div className="modal video-modal fade" id="videoModal">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-body">
                  <div className="embed-responsive embed-responsive-16by9">
                    <iframe
                      data-src="https://www.youtube.com/embed/mDHGaU_jGrQ?start=10"
                      src="https://www.youtube.com/embed/mDHGaU_jGrQ?start=10"
                      frameBorder={0}
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      // allowFullScreen=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* //Video Modal */}
          <div className="over-image-card pos-center">
            <div className="over-image-card-icon">
              <i className="icon-info" />
            </div>
            <div className="over-image-card-text">
              <h4>Patient Information</h4>
              <p>
                The following information will be of interest to weight loss
                surgery patients.
              </p>
              <a
                href="form-download.html"
                className="btn btn-white btn-white--all"
              >
                <i className="icon-right-arrow" />
                <span>download forms</span>
                <i className="icon-right-arrow" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*//section About us*/}

</>








   
    {/*//section welcome*/}
    {/*section services*/}
    <div className="section">
      <div className="container-fluid px-0">
        <div className="title-wrap text-center">
          <h2 className="h1">General Services</h2>
          <div className="h-decor" />
        </div>
        <div className="row no-gutters services-box-wrap services-box-wrap-desktop">
          <div className="col-4 order-1">
            <div className="service-box-rotator js-service-box-rotator">
              <div className="service-box service-box-greybg service-box--hiddenbtn">
                <div className="service-box-caption text-center">
                  <div className="service-box-icon">
                    <i className="icon-man" />
                  </div>
                  <div className="service-box-icon-bg">
                    <i className="icon-man" />
                  </div>
                  <h3 className="service-box-title">Male Plastic Surgery</h3>
                  <p>
                    Men of all ages and all walks of life are requesting plastic
                    surgery for cosmetic reasons
                  </p>
                  <div className="btn-wrap">
                    <a href="service-page.html" className="btn">
                      <i className="icon-right-arrow" />
                      <span>Know more</span>
                      <i className="icon-right-arrow" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="service-box service-box-greybg service-box--hiddenbtn">
                <div className="service-box-caption text-center">
                  <div className="service-box-icon">
                    <i className="icon-injecting" />
                  </div>
                  <div className="service-box-icon-bg">
                    <i className="icon-injecting" />
                  </div>
                  <h3 className="service-box-title">Non-Surgical Procedures</h3>
                  <p>
                    Aesthetic plastic surgery can achieve impressive changes. We
                    offer a wide variety of non-surgical procedures
                  </p>
                  <div className="btn-wrap">
                    <a href="service-page.html" className="btn">
                      <i className="icon-right-arrow" />
                      <span>Know more</span>
                      <i className="icon-right-arrow" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-8 order-2">
            <div className="service-box">
              <div
                className="service-box-image"
                data-bg="images/content/service-02.jpg"
              />
              <div className="service-box-caption text-center w-50 ml-auto">
                <h3 className="service-box-title">Facial Procedures</h3>
                <p>
                  Our Clinic is board certified in facial plastic surgery and
                  plastic surgery and specializes in facial cosmetic procedures.
                </p>
                <div className="btn-wrap">
                  <a href="service-page.html" className="btn">
                    <i className="icon-right-arrow" />
                    <span>Know more</span>
                    <i className="icon-right-arrow" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-8 order-3 order-lg-4 order-xl-3">
            <div className="service-box">
              <div
                className="service-box-image"
                data-bg="images/content/service-04.jpg"
              />
              <div className="service-box-caption text-center w-50 ml-auto">
                <h3 className="service-box-title">Breast Procedures</h3>
                <p>
                  Cosmetic breast surgery can help you get the breast
                  <br /> shape &amp; size you want
                </p>
                <div className="btn-wrap">
                  <a href="service-page.html" className="btn">
                    <i className="icon-right-arrow" />
                    <span>Know more</span>
                    <i className="icon-right-arrow" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4 order-5">
            <div className="service-box-rotator js-service-box-rotator">
              <div className="service-box service-box-greybg service-box--hiddenbtn">
                <div className="service-box-caption text-center">
                  <div className="service-box-icon">
                    <i className="icon-body" />
                  </div>
                  <div className="service-box-icon-bg">
                    <i className="icon-body" />
                  </div>
                  <h3 className="service-box-title">Body Procedures</h3>
                  <p>
                    Body Procedures are dedicated to aesthetic and functional
                    enhancement of your body
                  </p>
                  <div className="btn-wrap">
                    <a href="service-page.html" className="btn">
                      <i className="icon-right-arrow" />
                      <span>Know more</span>
                      <i className="icon-right-arrow" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="service-box service-box-greybg service-box--hiddenbtn">
                <div className="service-box-caption text-center">
                  <div className="service-box-icon">
                    <i className="icon-mommy" />
                  </div>
                  <div className="service-box-icon-bg">
                    <i className="icon-mommy" />
                  </div>
                  <h3 className="service-box-title">Mommy Makeover</h3>
                  <p>
                    The goal of a mommy makeover is to restore the shape and
                    appearance of a woman's body after childbearing.
                  </p>
                  <div className="btn-wrap">
                    <a href="service-page.html" className="btn">
                      <i className="icon-right-arrow" />
                      <span>Know more</span>
                      <i className="icon-right-arrow" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row no-gutters services-box-wrap services-box-wrap-mobile">
          <div className="service-box-rotator js-service-box-rotator">
            <div className="service-box service-box-greybg service-box--hiddenbtn">
              <div className="service-box-caption text-center">
                <div className="service-box-icon">
                  <i className="icon-man" />
                </div>
                <div className="service-box-icon-bg">
                  <i className="icon-man" />
                </div>
                <h3 className="service-box-title">Male Plastic Surgery</h3>
                <p>
                  Men of all ages and all walks of life are requesting plastic
                  surgery for cosmetic reasons
                </p>
                <div className="btn-wrap">
                  <a href="service-page.html" className="btn">
                    <i className="icon-right-arrow" />
                    <span>Know more</span>
                    <i className="icon-right-arrow" />
                  </a>
                </div>
              </div>
            </div>
            <div className="service-box service-box-greybg service-box--hiddenbtn">
              <div className="service-box-caption text-center">
                <div className="service-box-icon">
                  <i className="icon-injecting" />
                </div>
                <div className="service-box-icon-bg">
                  <i className="icon-injecting" />
                </div>
                <h3 className="service-box-title">Non-Surgical Procedures</h3>
                <p>
                  Aesthetic plastic surgery can achieve impressive changes. We
                  offer a wide variety of non-surgical procedures
                </p>
                <div className="btn-wrap">
                  <a href="service-page.html" className="btn">
                    <i className="icon-right-arrow" />
                    <span>Know more</span>
                    <i className="icon-right-arrow" />
                  </a>
                </div>
              </div>
            </div>
            <div className="service-box service-box-greybg service-box--hiddenbtn">
              <div className="service-box-caption text-center">
                <div className="service-box-icon">
                  <i className="icon-body" />
                </div>
                <div className="service-box-icon-bg">
                  <i className="icon-body" />
                </div>
                <h3 className="service-box-title">Body Procedures</h3>
                <p>
                  Body Procedures are dedicated to aesthetic and functional
                  enhancement of your body
                </p>
                <div className="btn-wrap">
                  <a href="service-page.html" className="btn">
                    <i className="icon-right-arrow" />
                    <span>Know more</span>
                    <i className="icon-right-arrow" />
                  </a>
                </div>
              </div>
            </div>
            <div className="service-box service-box-greybg service-box--hiddenbtn">
              <div className="service-box-caption text-center">
                <div className="service-box-icon">
                  <i className="icon-mommy" />
                </div>
                <div className="service-box-icon-bg">
                  <i className="icon-mommy" />
                </div>
                <h3 className="service-box-title">Mommy Makeover</h3>
                <p>
                  The goal of a mommy makeover is to restore the shape and
                  appearance of a woman's body after childbearing.
                </p>
                <div className="btn-wrap">
                  <a href="service-page.html" className="btn">
                    <i className="icon-right-arrow" />
                    <span>Know more</span>
                    <i className="icon-right-arrow" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*//section services*/}
    
    {/*section*/}
    <div className="section bg-grey py-0">
      <div className="container-fluid px-0">
        <div className="row no-gutters flex-wrap flex-md-nowrap">
          <div className="col-md-7 col-lg-6">
            <div className="services-wrap1 float-right">
              <div className="service-tab-banner d-md-none">
                <img src="images/content/banner-right.jpg" alt="" />
              </div>
              <div className="title-wrap text-center text-sm-left mt-2 mt-md-0">
                <h2 className="h1">
                  Most <span className="theme-color">Popular Procedures</span>
                </h2>
              </div>
              <p className="text-center text-sm-left">
                We are approach plastic surgery with precision and artistic
                vision to reveal each patient's unique beauty.
              </p>
              <div className="row">
                <div className="col-sm-6">
                  <ul className="circle-list">
                    <li>Breast Augmentation</li>
                    <li>Breast Lift</li>
                    <li>Liposuction</li>
                    <li>Mommy Makeover</li>
                    <li>Tummy Tuck</li>
                    <li>Brazilian Butt Lift</li>
                  </ul>
                </div>
                <div className="col-sm-6 mt-1 mt-md-0">
                  <ul className="circle-list">
                    <li>Eyelid surgery</li>
                    <li>Facelift</li>
                    <li>Neck Lift</li>
                    <li>Rhinoplasty</li>
                    <li>BOTOX® Cosmetic</li>
                    <li>Injectables</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-md-5 col-lg-6 service-tab-banner-alt d-none d-md-block align-items-center bg-cover bg-left"
            data-bg="images/content/banner-right.jpg"
          ></div>
        </div>
      </div>
    </div>
    {/*//section*/}
    {/*section achieved*/}
    <div className="section">
      <div className="container">
        <div className="title-wrap text-center">
          <div className="h-sub theme-color">Clinic figures</div>
          <h2 className="h1">What Have We Achieved</h2>
          <div className="h-decor" />
        </div>
        <div className="row d-block js-counter-carousel">
          <div className="col">
            <div className="counter-box">
              <div className="counter-box-icon">
                <i className="icon-hand" />
              </div>
              <div className="counter-box-number">
                <span className="count" data-to={15} data-speed={1500}>
                  0
                </span>
                +
              </div>
              <div className="decor" />
              <div className="counter-box-text">Years of experience</div>
            </div>
          </div>
          <div className="col">
            <div className="counter-box">
              <div className="counter-box-icon">
                <i className="icon-tooth-1" />
              </div>
              <div className="counter-box-number">
                <span className="count" data-to={10} data-speed={1500}>
                  0
                </span>
                K
              </div>
              <div className="decor" />
              <div className="counter-box-text">Improved Smiles</div>
            </div>
          </div>
          <div className="col">
            <div className="counter-box">
              <div className="counter-box-icon">
                <i className="icon-team" />
              </div>
              <div className="counter-box-number">
                <span className="count" data-to={50} data-speed={1500}>
                  0
                </span>
              </div>
              <div className="decor" />
              <div className="counter-box-text">Surgical Specialists</div>
            </div>
          </div>
          <div className="col">
            <div className="counter-box">
              <div className="counter-box-icon">
                <i className="icon-placeholder3" />
              </div>
              <div className="counter-box-number">
                <span className="count" data-to={4} data-speed={1500}>
                  0
                </span>
              </div>
              <div className="decor" />
              <div className="counter-box-text">Our Locations</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*//section achieved*/}
    {/*section faq*/}
    <div className="section bg-grey py-0">
      <div className="container-fluid px-0">
        <div className="row no-gutters">
          <div
            className="col-xl-6 banner-left bg-cover align-items-end"
            style={{ backgroundImage: "url(images/content/banner-left.jpg)" }}
          />
          <div className="col-xl-6">
            <div className="faq-wrap">
              <div className="text-center text-md-left">
                <div className="title-wrap">
                  <h2 className="h1">
                    Patient <span className="theme-color">Information</span>
                  </h2>
                </div>
              </div>
              <div
                id="faqAccordion1"
                className="faq-accordion mt-2 mt-lg-3"
                data-children=".faq-item"
              >
                <div className="faq-item"> 
                  <a
                    data-toggle="collapse"
                    data-parent="#faqAccordion1"
                    href="#faqItem1"
                    aria-expanded="true"
                  >
                    <span>1.</span>
                    <span>
                     What services does the best skin clinic in Surat offer?
                    </span>
                  </a>
                  <div
                    id="faqItem1"
                    className="collapse show faq-item-content"
                    role="tabpanel"
                  >
                    <div>
                      <p>
                       The best skin clinic in Surat offers a comprehensive range of services to address various skin concerns. These include treatments for acne, pigmentation, wrinkles, and other skin issues, as well as advanced procedures like laser therapy, chemical peels, and dermal fillers. The clinic also provides personalized skincare consultations to help you achieve and maintain healthy, glowing skin.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="faq-item">
                  <a
                    data-toggle="collapse"
                    data-parent="#faqAccordion1"
                    href="#faqItem2"
                    aria-expanded="false"
                    className="collapsed"
                  >
                    <span>2.</span>
                    <span>
                      How do I know if I am visiting the best skin clinic in Surat?
                    </span>
                  </a>
                  <div
                    id="faqItem2"
                    className="collapse faq-item-content"
                    role="tabpanel"
                  >
                    <div>
                      <p>
                        When searching for the best skin clinic in Surat, look for clinics with highly qualified dermatologists, modern facilities, and positive patient reviews. The best clinics will use state-of-the-art technology and follow the latest medical guidelines to ensure the highest standards of care. Additionally, a top clinic will offer a wide range of treatments tailored to individual skin types and conditions.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="faq-item">
                  <a
                    data-toggle="collapse"
                    data-parent="#faqAccordion1"
                    href="#faqItem3"
                    aria-expanded="false"
                    className="collapsed"
                  >
                    <span>3.</span>
                    <span>Are the treatments at the skin clinic in Surat safe?</span>
                  </a>
                  <div
                    id="faqItem3"
                    className="collapse faq-item-content"
                    role="tabpanel"
                  >
                    <div>
                      <p>
                        Yes, the treatments offered at the skin clinic in Surat are safe and performed by experienced dermatologists. The clinic adheres to strict safety protocols and uses FDA-approved equipment and products. Before any procedure, a thorough consultation is conducted to ensure the treatment plan is suitable for your skin type and condition, minimizing any risks.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="faq-item">
                  <a
                    data-toggle="collapse"
                    data-parent="#faqAccordion1"
                    href="#faqItem4"
                    aria-expanded="false"
                    className="collapsed"
                  >
                    <span>4.</span>
                    <span>Can this clinic help with anti-aging treatments?</span>
                  </a>
                  <div
                    id="faqItem4"
                    className="collapse faq-item-content"
                    role="tabpanel"
                  >
                    <div>
                      <p>
                        Absolutely. We provides a variety of anti-aging treatments designed to rejuvenate the skin and reduce the appearance of fine lines and wrinkles. These treatments include Botox, dermal fillers, laser resurfacing, and microneedling. Each treatment is customized to meet the specific needs of the patient, helping them achieve a youthful and radiant complexion.
                      </p>
                    </div>
                  </div>
                </div>
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
    {/*//section faq*/}
    {/*section*/}
    <div className="section">
      <div className="container-fluid px-auto">
        <div className="title-wrap text-center">
          <div className="h-sub theme-color">Our Succes Storeies</div>
          <h2 className="h1">Before and After Gallery</h2>
          <div className="h-decor" />
        </div>
        {/* <div className="gallery-hover gallery-hover-carousel js-gallery-hover-carousel"> */}
          <div className="blog-grid-full gallery-hover gallery-hover-carousel js-gallery-hover-carousel mt-3 mb-0 row">
       
         
         
          <div className="col-md-6 col-lg-3">
            <div className="gallery-hover-item style-1">
              <div
                className="gallery-hover-item-before"
                data-bg="/images/b&a/ba1.jpeg"
              >
                {/* <div className="gallery-hover-item-txt1">
                  <div>
                    <div className="gallery-hover-item-title">
                      Breast Augmentation
                    </div>
                    <p>
                      Breast augmentation surgery increases or restores breast
                      size using silicone gel implants, saline implants or in
                      some cases, fat transfer.
                    </p>
                  </div>
                </div>
                <div className="gallery-hover-item-txt2">
                  <div>
                    <div className="gallery-hover-item-state">Before</div>
                    <div className="gallery-hover-item-name">
                      Helen Armstrong
                    </div>
                  </div>
                </div> */}
              </div>
              <div
                className="gallery-hover-item-after"
                data-bg="/images/b&a/ba2.jpeg"
                
              >
                {/* <div className="gallery-hover-item-txt1">
                  <div>
                    <div className="gallery-hover-item-title">
                      Breast Augmentation
                    </div>
                    <p>
                      Breast augmentation surgery increases or restores breast
                      size using silicone gel implants, saline implants or in
                      some cases, fat transfer.
                    </p>
                  </div>
                </div>
                <div className="gallery-hover-item-txt2">
                  <div>
                    <div className="gallery-hover-item-state">After</div>
                    <div className="gallery-hover-item-name">
                      Helen Armstrong
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
         <div className="col-md-6 col-lg-3">
            <div className="gallery-hover-item style-2">
              <div
                className="gallery-hover-item-before"
                data-bg="/images/b&a/ba3.jpeg"
              >
                {/* <div className="gallery-hover-item-txt1">
                  <div>
                    <div className="gallery-hover-item-title">Chin Lift</div>
                    <p>
                      A chin lift is a correctional procedure to remove wrinkled
                      and sagging skin from the chin area.
                    </p>
                  </div>
                </div>
                <div className="gallery-hover-item-txt2">
                  <div>
                    <div className="gallery-hover-item-state">Before</div>
                    <div className="gallery-hover-item-name">
                      Kimberly Jones
                    </div>
                  </div>
                </div> */}
              </div>
              <div
                className="gallery-hover-item-after"
                data-bg="/images/b&a/ba4.jpeg"
              >
                {/* <div className="gallery-hover-item-txt1">
                  <div>
                    <div className="gallery-hover-item-title">Chin Lift</div>
                    <p>
                      A chin lift is a correctional procedure to remove wrinkled
                      and sagging skin from the chin area.
                    </p>
                  </div>
                </div>
                <div className="gallery-hover-item-txt2">
                  <div>
                    <div className="gallery-hover-item-state">After</div>
                    <div className="gallery-hover-item-name">
                      Kimberly Jones
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="gallery-hover-item style-3">
              <div
                className="gallery-hover-item-before"
                data-bg="/images/b&a/ba5.jpeg"
              >
                {/* <div className="gallery-hover-item-txt1">
                  <div>
                    <div className="gallery-hover-item-title">Restriction</div>
                    <p>
                      surgery is used to physically limit the amount of food the
                      stomach can hold, which limits the number of calories you
                      can eat.
                    </p>
                  </div>
                </div>
                <div className="gallery-hover-item-txt2">
                  <div>
                    <div className="gallery-hover-item-state">Before</div>
                    <div className="gallery-hover-item-name">Amanda Smith</div>
                    <div className="d-none d-md-block">
                      <table>
                        <tbody>
                          <tr>
                            <td>Scale wt.:</td>
                            <td>
                              <b>165 lbs</b>
                            </td>
                          </tr>
                          <tr>
                            <td>Body Fat:</td>
                            <td>
                              <b>37.20</b>
                            </td>
                          </tr>
                          <tr>
                            <td>Abdomen:</td>
                            <td>
                              <b>33.6</b>
                            </td>
                          </tr>
                          <tr>
                            <td>Fatmass:</td>
                            <td>
                              <b>61.43</b>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div> */}
              </div>
              <div
                className="gallery-hover-item-after"
                data-bg="/images/b&a/ba6.jpeg"
              >
                {/* <div className="gallery-hover-item-txt1">
                  <div>
                    <div className="gallery-hover-item-title">Weight Loss</div>
                    <p>
                      Weight-loss (bariatric) surgery helps you lose weight and
                      lowers your risk of medical problems associated with
                      obesity.
                    </p>
                  </div>
                </div>
                <div className="gallery-hover-item-txt2">
                  <div>
                    <div className="gallery-hover-item-state">After</div>
                    <div className="gallery-hover-item-name">Amanda Smith</div>
                    <div className="d-none d-md-block">
                      <table>
                        <tbody>
                          <tr>
                            <td>Scale wt.:</td>
                            <td>
                              <b>110 lbs</b>
                            </td>
                          </tr>
                          <tr>
                            <td>Body Fat:</td>
                            <td>
                              <b>28.1</b>
                            </td>
                          </tr>
                          <tr>
                            <td>Abdomen:</td>
                            <td>
                              <b>29.2</b>
                            </td>
                          </tr>
                          <tr>
                            <td>Fatmass:</td>
                            <td>
                              <b>50.43</b>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="gallery-hover-item style-1">
              <div
                className="gallery-hover-item-before"
                data-bg="/images/b&a/ba7.jpeg"
              >
                {/* <div className="gallery-hover-item-txt1">
                  <div>
                    <div className="gallery-hover-item-title">
                      Breast Augmentation
                    </div>
                    <p>
                      Breast augmentation surgery increases or restores breast
                      size using silicone gel implants, saline implants or in
                      some cases, fat transfer.
                    </p>
                  </div>
                </div>
                <div className="gallery-hover-item-txt2">
                  <div>
                    <div className="gallery-hover-item-state">Before</div>
                    <div className="gallery-hover-item-name">
                      Helen Armstrong
                    </div>
                  </div>
                </div> */}
              </div>
              <div
                className="gallery-hover-item-after"
                data-bg="/images/b&a/ba7.jpeg"
              >
                {/* <div className="gallery-hover-item-txt1">
                  <div>
                    <div className="gallery-hover-item-title">
                      Breast Augmentation
                    </div>
                    <p>
                      Breast augmentation surgery increases or restores breast
                      size using silicone gel implants, saline implants or in
                      some cases, fat transfer.
                    </p>
                  </div>
                </div>
                <div className="gallery-hover-item-txt2">
                  <div>
                    <div className="gallery-hover-item-state">After</div>
                    <div className="gallery-hover-item-name">
                      Helen Armstrong
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="gallery-hover-item style-1">
              <div
                className="gallery-hover-item-before"
                data-bg="/images/b&a/ba8.jpeg"
              >
                {/* <div className="gallery-hover-item-txt1">
                  <div>
                    <div className="gallery-hover-item-title">
                      Breast Augmentation
                    </div>
                    <p>
                      Breast augmentation surgery increases or restores breast
                      size using silicone gel implants, saline implants or in
                      some cases, fat transfer.
                    </p>
                  </div>
                </div>
                <div className="gallery-hover-item-txt2">
                  <div>
                    <div className="gallery-hover-item-state">Before</div>
                    <div className="gallery-hover-item-name">
                      Helen Armstrong
                    </div>
                  </div>
                </div> */}
              </div>
              <div
                className="gallery-hover-item-after"
                data-bg="/images/b&a/ba8.jpeg"
              >
                {/* <div className="gallery-hover-item-txt1">
                  <div>
                    <div className="gallery-hover-item-title">
                      Breast Augmentation
                    </div>
                    <p>
                      Breast augmentation surgery increases or restores breast
                      size using silicone gel implants, saline implants or in
                      some cases, fat transfer.
                    </p>
                  </div>
                </div>
                <div className="gallery-hover-item-txt2">
                  <div>
                    <div className="gallery-hover-item-state">After</div>
                    <div className="gallery-hover-item-name">
                      Helen Armstrong
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*//section*/}
    {/*section special offers*/}
    <div className="section" id="specialOffer">
      <div className="container">
        <div className="title-wrap text-center">
          <div className="h-sub theme-color">For Our Dear Clients</div>
          <h2 className="h1">Special Offers</h2>
          <div className="h-decor" />
        </div>
        <div className="special-carousel js-special-carousel row">
          <div className="col-6">
            <div className="special-card">
              <div className="special-card-photo">
                <div className="corner-ribbon-wrap">
                  <div className="corner-ribbon">
                    $750<span>OFF</span>
                  </div>
                </div>
                <img src="images/content/special-photo-01.jpg" alt="" />
              </div>
              <div className="special-card-caption">
                <div className="special-card-txt1">Love Yourself</div>
                <div className="special-card-txt2">Offer</div>
                <div className="special-card-txt3">
                  Butt Lift or Tummy Tuck
                  <br />
                  or 360 Liposuction
                </div>
                <div>
                  <a href="schedule.html" className="btn">
                    <i className="icon-right-arrow" />
                    <span>Schedule</span>
                    <i className="icon-right-arrow" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="special-card">
              <div className="special-card-photo">
                <div className="corner-ribbon-wrap">
                  <div className="corner-ribbon">
                    10%<span>OFF</span>
                  </div>
                </div>
                <img src="images/content/special-photo-02.jpg" alt="" />
              </div>
              <div className="special-card-caption">
                <div className="special-card-txt1">Breast</div>
                <div className="special-card-txt2">Augmentation</div>
                <div className="special-card-txt3">
                  All inclusive include implants
                  <br />
                  and all fees for specific dates
                </div>
                <div>
                  <a href="contact.html" className="btn">
                    <i className="icon-right-arrow" />
                    <span>Contact now</span>
                    <i className="icon-right-arrow" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="special-card">
              <div className="special-card-photo">
                <img src="images/content/special-photo-03.jpg" alt="" />
              </div>
              <div className="special-card-caption text-left">
                <div className="special-card-txt1">Whitening</div>
                <div className="special-card-txt2">Laser Teeth</div>
                <div className="special-card-txt3">
                  Tooth whitening
                  <br />
                  and Home Bleaching
                </div>
                <div>
                  <a href="services.html" className="btn">
                    <i className="icon-right-arrow" />
                    <span>Know more</span>
                    <i className="icon-right-arrow" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="special-card">
              <div className="special-card-photo">
                <img src="images/content/special-photo-04.jpg" alt="" />
              </div>
              <div className="special-card-caption text-left">
                <div className="special-card-txt1">Porcelain</div>
                <div className="special-card-txt2">Veneer</div>
                <div className="special-card-txt3">
                  6 Teeth or more in the same
                  <br />
                  jaw, upper or lower front
                </div>
                <div>
                  <a href="service-page.html" className="btn">
                    <i className="icon-right-arrow" />
                    <span>Know more</span>
                    <i className="icon-right-arrow" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*//section special offers*/}
    {/*section testimonials*/}
    <div className="section bg-grey-dark py-0">
      <div className="container">
        <div className="row no-gutters">
          <div className="col-md-7 col-lg-6 mt-2 mt-lg-0">
            <div className="reviews-wrap-alt ml-auto d-flex flex-column justify-content-center">
              <div className="title-wrap text-center text-md-right">
                <div className="h-sub">What People Says</div>
                <h2 className="h1">
                  Patient <span className="theme-color">Testimonials</span>
                </h2>
              </div>
              <div className="js-reviews-carousel reviews-carousel text-center text-md-right">
                <div className="review">
                  <div className="star-rating">
                    <span>
                      <i className="icon-star" />
                      <i className="icon-star" />
                      <i className="icon-star" />
                      <i className="icon-star" />
                      <i className="icon-star" />
                    </span>
                  </div>
                  <p className="review-text">
                    You guys are all amazing! Everyone I have met at your office
                    is kind, thoughtful, and listens to me. Everyone is so
                    friendly from the time you walk in the door to the time you
                    leave the office.{" "}
                  </p>
                  <p>
                    <span className="review-author">- Wilmer Stevenson,</span>{" "}
                    <span className="review-author-position">
                      Creative manager
                    </span>
                  </p>
                </div>
                <div className="review">
                  <div className="star-rating">
                    <span>
                      <i className="icon-star" />
                      <i className="icon-star" />
                      <i className="icon-star" />
                      <i className="icon-star" />
                      <i className="icon-star" />
                    </span>
                  </div>
                  <p className="review-text">
                    I Am very impressed with you all as well as being highly
                    proficient is absolutely adorable. I feel so relaxed in her
                    capable hands and hope to be her patient for a very long
                    time! You are a fantastic team and I feel very privileged to
                    come to you all!!!
                  </p>
                  <p>
                    <span className="review-author">- Wilmer Stevenson,</span>{" "}
                    <span className="review-author-position">
                      Creative manager
                    </span>
                  </p>
                </div>
                <div className="review">
                  <div className="star-rating">
                    <span>
                      <i className="icon-star" />
                      <i className="icon-star" />
                      <i className="icon-star" />
                      <i className="icon-star" />
                      <i className="icon-star" />
                    </span>
                  </div>
                  <p className="review-text">
                    You guys are all amazing! Everyone I have met at your office
                    is kind, thoughtful, and listens to me. Everyone is so
                    friendly from the time you walk in the door to the time you
                    leave the office.{" "}
                  </p>
                  <p>
                    <span className="review-author">- Wilmer Stevenson,</span>{" "}
                    <span className="review-author-position">
                      Creative manager
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5 col-lg-6">
            <div className="reviews-author-carousel">
              <div>
                <div className="img-before">
                  <img
                    src="images/content/single-testimonials-author-1-2.jpg"
                    alt=""
                  />
                  <span>BEFORE</span>
                </div>
                <div className="img-after">
                  <img
                    src="images/content/single-testimonials-author-1-1.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*//section testimonials*/}
    {/*section blog posts */}
    <div className="section">
      <div className="container">
        <div className="title-wrap text-center">
          <h2 className="h1">From the Blog</h2>
          <div className="h-decor" />
        </div>
        <div className="blog-grid-full blog-grid-carousel-full js-blog-grid-carousel-full mt-3 mb-0 row">
          <div className="col-md-6 col-lg-4">
            <div className="blog-post">
              <div className="post-image">
                <a href="blog-post-page.html">
                  <img src="images/content/news-01.jpg" alt="" />
                </a>
              </div>
              <div className="blog-post-info">
                <div className="post-date">
                  17<span>JAN</span>
                </div>
                <div>
                  <h2 className="post-title">
                    <a href="blog-post-page.html">
                      The Simpler Solution That Lasts
                    </a>
                  </h2>
                </div>
              </div>
              <div className="post-teaser">
                When patients visit our practice from places like Saratoga
                Springs, NY, they often express that laser hair removal can
                sound daunting or excessive ...
              </div>
              <div className="mt-2">
                <a
                  href="blog-post-page.html"
                  className="btn btn-sm btn-hover-fill"
                >
                  <i className="icon-right-arrow" />
                  <span>Read more</span>
                  <i className="icon-right-arrow" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="blog-post bg-grey">
              <div className="post-image">
                <a href="blog-post-page.html">
                  <img src="images/content/news-02.jpg" alt="" />
                </a>
              </div>
              <div className="blog-post-info">
                <div className="post-date">
                  22<span>JAN</span>
                </div>
                <div>
                  <h2 className="post-title">
                    <a href="blog-post-page.html">
                      Trending Now: Thighlighting
                    </a>
                  </h2>
                </div>
              </div>
              <div className="post-teaser">
                No longer is liposuction just used on the abdomen. Patients who
                come to us from Albany and beyond appreciate the versatility of
                liposuction — and it can also treat...
              </div>
              <div className="mt-2">
                <a
                  href="blog-post-page.html"
                  className="btn btn-sm btn-hover-fill"
                >
                  <i className="icon-right-arrow" />
                  <span>Read more</span>
                  <i className="icon-right-arrow" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="blog-post">
              <div className="post-image">
                <a href="blog-post-page.html">
                  <img src="images/content/news-03.jpg" alt="" />
                </a>
              </div>
              <div className="blog-post-info">
                <div className="post-date">
                  26<span>JAN</span>
                </div>
                <div>
                  <h2 className="post-title">
                    <a href="blog-post-page.html">
                      Our Spa One Bridal Packages
                    </a>
                  </h2>
                </div>
              </div>
              <div className="post-teaser">
                There is no one more interested in looking beautiful than a
                bride. Photographs from a wedding day are designed to be
                timeless, cherished in frames in the homes of...
              </div>
              <div className="mt-2">
                <a
                  href="blog-post-page.html"
                  className="btn btn-sm btn-hover-fill"
                >
                  <i className="icon-right-arrow" />
                  <span>Read more</span>
                  <i className="icon-right-arrow" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="blog-post bg-grey">
              <div className="post-image">
                <a href="blog-post-page.html">
                  <img src="images/content/news-01.jpg" alt="" />
                </a>
              </div>
              <div className="blog-post-info">
                <div className="post-date">
                  17<span>JAN</span>
                </div>
                <div>
                  <h2 className="post-title">
                    <a href="blog-post-page.html">
                      The Simpler Solution That Lasts
                    </a>
                  </h2>
                </div>
              </div>
              <div className="post-teaser">
                When patients visit our practice from places like Saratoga
                Springs, NY, they often express that laser hair removal can
                sound daunting or excessive ...
              </div>
              <div className="mt-2">
                <a
                  href="blog-post-page.html"
                  className="btn btn-sm btn-hover-fill"
                >
                  Read more
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="blog-post">
              <div className="post-image">
                <a href="blog-post-page.html">
                  <img src="images/content/news-02.jpg" alt="" />
                </a>
              </div>
              <div className="blog-post-info">
                <div className="post-date">
                  22<span>JAN</span>
                </div>
                <div>
                  <h2 className="post-title">
                    <a href="blog-post-page.html">
                      Trending Now: Thighlighting
                    </a>
                  </h2>
                </div>
              </div>
              <div className="post-teaser">
                No longer is liposuction just used on the abdomen. Patients who
                come to us from Albany and beyond appreciate the versatility of
                liposuction — and it can also treat...
              </div>
              <div className="mt-2">
                <a
                  href="blog-post-page.html"
                  className="btn btn-sm btn-hover-fill"
                >
                  Read more
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="blog-post bg-grey">
              <div className="post-image">
                <a href="blog-post-page.html">
                  <img src="images/content/news-03.jpg" alt="" />
                </a>
              </div>
              <div className="blog-post-info">
                <div className="post-date">
                  26<span>JAN</span>
                </div>
                <div>
                  <h2 className="post-title">
                    <a href="blog-post-page.html">
                      Our Spa One Bridal Packages
                    </a>
                  </h2>
                </div>
              </div>
              <div className="post-teaser">
                There is no one more interested in looking beautiful than a
                bride. Photographs from a wedding day are designed to be
                timeless, cherished in frames in the homes of...
              </div>
              <div className="mt-2">
                <a
                  href="blog-post-page.html"
                  className="btn btn-sm btn-hover-fill"
                >
                  Read more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*//section blog posts */}
    {/*section*/}
    <div className="section">
      <div className="container-fluid px-0">
        <div
          className="banner-center banner-center--p-sm bg-cover"
          style={{
            backgroundImage: "url(images/content/banner-center-02.jpg)"
          }}
        >
          <div className="banner-center-caption text-center">
            <div className="banner-center-text1">
              Trust Your Appearance to Us
            </div>
            <div className="banner-center-text4">
              Choose The Right Procedure For You
            </div>
            <a
              href="#"
              className="btn btn-white btn-hover-fill mt-2 mt-sm-3 mt-lg-5"
              data-toggle="modal"
              data-target="#modalBookingForm"
            >
              <i className="icon-right-arrow" />
              <span>Request an appointment</span>
              <i className="icon-right-arrow" />
            </a>
          </div>
        </div>
      </div>
    </div>
    {/*//section*/}
    {/*section call us*/}
    <div className="section mt-5">
      <div className="container">
        <div className="banner-call">
          <div className="row no-gutters">
            <div className="col-sm-6 col-lg-7 d-flex align-items-center justify-content-center">
              <div className="text-center">
                <h2>
                  Looking for <br className="d-lg-none" /> a{" "}
                  <span className="theme-color">Plastic Surgeon?</span>
                </h2>
                <div className="h-decor" />
                <p className="mt-sm-1 mt-lg-4 text-left text-sm-center">
                  We're always accepting new patients! We believe in providing
                  the best possible care to all our existing patients and
                  welcome new patients to sample the service we have to offer.{" "}
                </p>
                <div className="mt-2 mt-lg-4">
                  <a href="#" className="banner-call-phone">
                    <i className="icon-telephone" />
                    +91 99786 70270
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-5 col-lg-5 col-xl-4 mt-3 mt-md-0">
              <img
                src="images/content/banner-callus.jpg"
                className="shift-right-1"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*//section call us*/}
  </div>
  {/*footer*/}
  <div className="footer mt-0">
    <div className="container">
      <div className="row py-1 py-md-2 px-lg-0">
        <div className="col-lg-4 footer-col1">
          <div className="row flex-column flex-md-row flex-lg-column">
            <div className="col-md col-lg-auto">
              <div className="footer-logo">
                <img
                  src="images/footer-logo.png"
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div className="mt-2 mt-lg-0" />
              <div className="footer-social d-lg-none">
                <a
                  href="https://www.facebook.com/"
                  target="blank"
                  className="hovicon"
                >
                  <i className="icon-facebook-logo" />
                </a>
                <a
                  href="https://www.twitter.com/"
                  target="blank"
                  className="hovicon"
                >
                  <i className="icon-twitter-logo" />
                </a>
                <a
                  href="https://plus.google.com/"
                  target="blank"
                  className="hovicon"
                >
                  <i className="icon-google-logo" />
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="blank"
                  className="hovicon"
                >
                  <i className="icon-instagram" />
                </a>
              </div>
            </div>
            <div className="col-md">
              <div className="footer-text mt-1 mt-lg-2">
                <p>
                  To receive email releases, simply provide
                  <br />
                  us with your email below
                </p>
                <form action="#" className="footer-subscribe">
                  <div className="input-group">
                    <input
                      name="subscribe_mail"
                      type="text"
                      className="form-control"
                      placeholder="Your Email"
                    />
                    <span>
                      <i className="icon-black-envelope" />
                    </span>
                  </div>
                </form>
              </div>
              <div className="footer-social d-none d-lg-block">
                <a
                  href="https://www.facebook.com/"
                  target="blank"
                  className="hovicon"
                >
                  <i className="icon-facebook-logo" />
                </a>
                <a
                  href="https://www.twitter.com/"
                  target="blank"
                  className="hovicon"
                >
                  <i className="icon-twitter-logo" />
                </a>
                <a
                  href="https://plus.google.com/"
                  target="blank"
                  className="hovicon"
                >
                  <i className="icon-google-logo" />
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="blank"
                  className="hovicon"
                >
                  <i className="icon-instagram" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-4">
          <h3>Blog Posts</h3>
          <div className="h-decor" />
          <div className="footer-post d-flex">
            <div className="footer-post-photo">
              <img
                src="images/content/footer-post-author-03.jpg"
                alt=""
                className="img-fluid"
              />
            </div>
            <div className="footer-post-text">
              <div className="footer-post-title">
                <a href="post.html">Medications &amp; Oral Health</a>
              </div>
              <p>September 26, 2018</p>
            </div>
          </div>
          <div className="footer-post d-flex">
            <div className="footer-post-photo">
              <img
                src="images/content/footer-post-author-01.jpg"
                alt=""
                className="img-fluid"
              />
            </div>
            <div className="footer-post-text">
              <div className="footer-post-title">
                <a href="post.html">Smile For Your Health!</a>
              </div>
              <p>August 22, 2018</p>
            </div>
          </div>
          <div className="footer-post d-flex">
            <div className="footer-post-photo">
              <img
                src="images/content/footer-post-author-02.jpg"
                alt=""
                className="img-fluid"
              />
            </div>
            <div className="footer-post-text">
              <div className="footer-post-title">
                <a href="post.html">Tooth Fairy Traditions...</a>
              </div>
              <p>July 25, 2018</p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-4">
          <h3>Our Contacts</h3>
          <div className="h-decor" />
          <ul className="icn-list">
            <li>
              <i className="icon-placeholder2" />
              1st floor, V Plaza, 104, opp. Laxmi Enclave, nr. Gajera School, Katargam, Surat, Gujarat 395004
              <br />
              <a href="contact.html" className="btn btn-xs btn-gradient">
                <i className="icon-placeholder2" />
                <span>Get directions on the map</span>
                <i className="icon-right-arrow" />
              </a>
            </li>
            <li>
              <i className="icon-telephone" />
              <b>
                <span className="phone">
                  <span className="text-nowrap">+91 99786 70270</span>,{" "}
                  <span className="text-nowrap">1-800-267-0001</span>
                </span>
              </b>
              <br />
              (24/7 General inquiry)
            </li>
            <li>
              <i className="icon-black-envelope" />
              <a href="mailto:vivaskincarecenter@gmail.com">vivaskincarecenter@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <div className="container">
        <div className="row text-center text-md-left">
          <div className="col-sm">
            Copyright © 2018 <a href="#">DentCo</a>
            <span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</span>
            <a href="#">Privacy Policy</a>
          </div>
          <div className="col-sm-auto ml-auto">
            <span className="d-none d-sm-inline">
              For emergency cases&nbsp;&nbsp;&nbsp;
            </span>
            <i className="icon-telephone" />
            &nbsp;&nbsp;<b>+91 99786 70270</b>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*//footer*/}
  <div className="backToTop js-backToTop">
    <i className="icon icon-up-arrow" />
  </div>
  <div className="modal modal-form modal-form-sm fade" id="modalQuestionForm">
    <div className="modal-dialog">
      <div className="modal-content">
        <button aria-label="Close" className="close" data-dismiss="modal">
          <i className="icon-error" />
        </button>
        <div className="modal-body">
          <div className="modal-form">
            <h3>Ask a Question</h3>
            <form
              className="mt-15"
              id="questionForm"
              method="post"
              // noValidate=""
            >
              <div className="successform">
                <p>Your message was sent successfully!</p>
              </div>
              <div className="errorform">
                <p>
                  Something went wrong, try refreshing and submitting the form
                  again.
                </p>
              </div>
              <div className="input-group">
                <span>
                  <i className="icon-user" />
                </span>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  autoComplete="off"
                  placeholder="Your Name*"
                />
              </div>
              <div className="input-group">
                <span>
                  <i className="icon-email2" />
                </span>
                <input
                  type="text"
                  name="email"
                  className="form-control"
                  autoComplete="off"
                  placeholder="Your Email*"
                />
              </div>
              <div className="input-group">
                <span>
                  <i className="icon-smartphone" />
                </span>
                <input
                  type="text"
                  name="phone"
                  className="form-control"
                  autoComplete="off"
                  placeholder="Your Phone"
                />
              </div>
              <textarea
                name="message"
                className="form-control"
                placeholder="Your comment*"
                defaultValue={""}
              />
              <div className="text-right mt-2">
                <button type="submit" className="btn btn-sm btn-hover-fill">
                  Ask Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="modal modal-form fade" id="modalBookingForm">
    <div className="modal-dialog">
      <div className="modal-content">
        <button aria-label="Close" className="close" data-dismiss="modal">
          <i className="icon-error" />
        </button>
        <div className="modal-body">
          <div className="modal-form">
            <h3>Book an Appointment</h3>
            <form
              className="mt-15"
              id="bookingForm"
              method="post"
              // noValidate=""
            >
              <div className="successform">
                <p>Your message was sent successfully!</p>
              </div>
              <div className="errorform">
                <p>
                  Something went wrong, try refreshing and submitting the form
                  again.
                </p>
              </div>
              <div className="input-group">
                <span>
                  <i className="icon-user" />
                </span>
                <input
                  type="text"
                  name="bookingname"
                  className="form-control"
                  autoComplete="off"
                  placeholder="Your Name*"
                />
              </div>
              <div className="row row-xs-space mt-1">
                <div className="col-sm-6">
                  <div className="input-group">
                    <span>
                      <i className="icon-email2" />
                    </span>
                    <input
                      type="text"
                      name="bookingemail"
                      className="form-control"
                      autoComplete="off"
                      placeholder="Your Email*"
                    />
                  </div>
                </div>
                <div className="col-sm-6 mt-1 mt-sm-0">
                  <div className="input-group">
                    <span>
                      <i className="icon-smartphone" />
                    </span>
                    <input
                      type="text"
                      name="bookingphone"
                      className="form-control"
                      autoComplete="off"
                      placeholder="Your Phone"
                    />
                  </div>
                </div>
              </div>
              <div className="row row-xs-space mt-1">
                <div className="col-sm-6">
                  <div className="input-group">
                    <span>
                      <i className="icon-birthday" />
                    </span>
                    <input
                      type="text"
                      name="bookingage"
                      className="form-control"
                      autoComplete="off"
                      placeholder="Your age"
                    />
                  </div>
                </div>
              </div>
              <div className="selectWrapper input-group mt-1">
                <span>
                  <i className="icon-tooth" />
                </span>
                <select name="bookingservice" className="form-control">
                  <option >
                    {/* selected="selected" disabled="disabled" */}
                    Select Service
                  </option>
                  <option value="Cosmetic Dentistry">Cosmetic Dentistry</option>
                  <option value="General Dentistry">General Dentistry</option>
                  <option value="Orthodontics">Orthodontics</option>
                  <option value="Children`s Dentistry">
                    Children`s Dentistry
                  </option>
                  <option value="Dental Implants">Dental Implants</option>
                  <option value="Dental Emergency">Dental Emergency</option>
                </select>
              </div>
              <div className="input-group flex-nowrap mt-1">
                <span>
                  <i className="icon-calendar2" />
                </span>
                <div className="datepicker-wrap">
                  <input
                    name="bookingdate"
                    type="text"
                    className="form-control datetimepicker"
                    placeholder="Date"
                    // readOnly=""
                  />
                </div>
              </div>
              <div className="input-group flex-nowrap mt-1">
                <span>
                  <i className="icon-clock" />
                </span>
                <div className="datepicker-wrap">
                  <input
                    name="bookingtime"
                    type="text"
                    className="form-control timepicker"
                    placeholder="Time"
                  />
                </div>
              </div>
              <textarea
                name="bookingmessage"
                className="form-control"
                placeholder="Your comment"
                defaultValue={""}
              />
              <div className="text-right mt-2">
                <button type="submit" className="btn btn-sm btn-hover-fill">
                  Book now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  );
}
