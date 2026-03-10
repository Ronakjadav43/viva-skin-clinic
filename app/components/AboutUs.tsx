export default function AboutUs() {
  return (
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
              Dr. Akash Satasiya has extensive experience in diagnosing and
              treating acne, hair fall, pigmentation disorders, fungal
              infections, and advanced aesthetic concerns.
            </p>
            <p>
              At Viva Skin Clinic, we provide advanced medical care for
              skin, hair, and fungal conditions with a patient-focused
              approach.
            </p>
            <p>
              Our clinic combines clinical expertise with modern dermatology
              technology to deliver safe, effective, and personalized
              treatments tailored to each individual’s needs. We believe
              healthy skin is not just about appearance, it reflects overall
              well-being and confidence.
            </p>

            <div className="signature mt-3">
              <div className="signature-img">
                <img src="images/content/signature.png" alt="Signature" />
              </div>
              <div className="signature-text">
                <h5>Dr. Akash Satasiya</h5>
                Naturopathic Doctor, Certified Personal Trainer, Ideal
                Protein Coach
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
              <img src="images/About us - 485 × 560.png" alt="" />
              <img
                src="images/content/img-bg.png"
                className="img-bg"
                alt=""
              />
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
                  The following information will be of interest to weight
                  loss surgery patients.
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
  );
}
