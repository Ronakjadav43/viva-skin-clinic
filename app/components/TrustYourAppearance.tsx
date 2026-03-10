export default function TrustYourAppearance() {
  return (
    <div className="section">
      <div className="container-fluid px-0">
        <div
          className="banner-center banner-center--p-sm bg-cover"
          style={{
            backgroundImage: "url(images/TrustYour.png)",
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
  );
}
