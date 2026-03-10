export default function Welcome() {
  return (
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
              <div className="h-sub">
                Welcome to our plastic surgeon clinic
              </div>
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
                    We are pleased that you have chosen to explore what we
                    have to offer: aesthetic and reconstructive services
                    that are provided by fellowship-trained plastic
                    surgeons, in a safe and secure environment. Whether you
                    desire minimally invasive facial rejuvenation or
                    perforator flap breast reconstruction, we are committed
                    to providing the highest quality experience, focusing on
                    the unique needs of the plastic surgery patient.
                  </p>
                  <p>
                    Plastic surgery provides evaluation and treatment for
                    adult and pediatric patients who are candidates for
                    reconstructive or aesthetic surgery
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
  );
}
