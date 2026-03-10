import React from "react";

const socialLinks = [
  { id: 1, url: "https://www.facebook.com/", icon: "icon-facebook-logo" },
  { id: 2, url: "https://www.twitter.com/", icon: "icon-twitter-logo" },
  { id: 3, url: "https://plus.google.com/", icon: "icon-google-logo" },
  { id: 4, url: "https://www.instagram.com/", icon: "icon-instagram" },
];

const blogPosts = [
  {
    id: 1,
    img: "images/content/footer-post-author-03.jpg",
    title: "Medications & Oral Health",
    date: "September 26, 2018",
    url: "post.html",
  },
  {
    id: 2,
    img: "images/content/footer-post-author-01.jpg",
    title: "Smile For Your Health!",
    date: "August 22, 2018",
    url: "post.html",
  },
  {
    id: 3,
    img: "images/content/footer-post-author-02.jpg",
    title: "Tooth Fairy Traditions...",
    date: "July 25, 2018",
    url: "post.html",
  },
];

const contacts = [
  {
    id: 1,
    icon: "icon-placeholder2",
    content: (
      <>
        1st floor, V Plaza, 104, opp. Laxmi Enclave, nr. Gajera
        School, Katargam, Surat, Gujarat 395004
        <br />
        <a href="contact.html" className="btn btn-xs btn-gradient">
          <i className="icon-placeholder2" />
          <span>Get directions on the map</span>
          <i className="icon-right-arrow" />
        </a>
      </>
    ),
  },
  {
    id: 2,
    icon: "icon-telephone",
    content: (
      <>
        <b>
          <span className="phone">
            <span className="text-nowrap">+91 99786 70270</span>,{" "}
            <span className="text-nowrap">+91 99786 70270</span>
          </span>
        </b>
        <br />
        (24/7 General inquiry)
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
];

export default function Footer() {
  return (
    <>
      <div className="footer mt-0">
        <div className="container">
          <div className="row py-1 py-md-2 px-lg-0">
            <div className="col-lg-4 footer-col1">
              <div className="row flex-column flex-md-row flex-lg-column">
                <div className="col-md col-lg-auto">
                  <div className="footer-logo">
                    <img
                      src="images/VivaLogo.png"
                      alt=""
                      className="img-fluid w-[200px] h-auto"
                    />
                  </div>
                  <div className="mt-2 mt-lg-0" />
                  <div className="footer-social d-lg-none">
                    {socialLinks.map((link) => (
                      <a
                        href={link.url}
                        target="blank"
                        className="hovicon"
                        key={`mobile-${link.id}`}
                      >
                        <i className={link.icon} />
                      </a>
                    ))}
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
                    {socialLinks.map((link) => (
                      <a
                        href={link.url}
                        target="blank"
                        className="hovicon"
                        key={`desktop-${link.id}`}
                      >
                        <i className={link.icon} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <h3>Blog Posts</h3>
              <div className="h-decor" />
              {blogPosts.map((post) => (
                <div className="footer-post d-flex" key={post.id}>
                  <div className="footer-post-photo">
                    <img
                      src={post.img}
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="footer-post-text">
                    <div className="footer-post-title">
                      <a href={post.url}>{post.title}</a>
                    </div>
                    <p>{post.date}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-sm-6 col-lg-4">
              <h3>Our Contacts</h3>
              <div className="h-decor" />
              <ul className="icn-list">
                {contacts.map((contact) => (
                  <li key={contact.id}>
                    <i className={contact.icon} />
                    {contact.content}
                  </li>
                ))}
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
      <div className="backToTop js-backToTop">
        <i className="icon icon-up-arrow" />
      </div>
    </>
  );
}
