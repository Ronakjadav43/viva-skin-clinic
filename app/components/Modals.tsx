export default function Modals() {
  return (
    <>
      <div
        className="modal modal-form modal-form-sm fade"
        id="modalQuestionForm"
      >
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
                >
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
                >
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
                      <option>
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
    </>
  );
}
