export default function QuickLinks() {
  return (
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
                <form id="requestForm" method="post">
                  <div className="successform">
                    <p>Your message was sent successfully!</p>
                  </div>
                  <div className="errorform">
                    <p>
                      Something went wrong, try refreshing and submitting
                      the form again.
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
                    <select
                      name="requestservice"
                      className="form-control"
                    >
                      <option>
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
                      <option value="Dental Implants">
                        Dental Implants
                      </option>
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
                  This simply works as a guide and helps you to connect
                  with dentists of your choice. Please confirm the
                  doctor’s availability before leaving your premises.
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
                  <a
                    href="prices.html"
                    className="btn btn-sm btn-hover-fill"
                  >
                    Calculator
                  </a>
                  <a
                    href="prices.html"
                    className="btn btn-sm btn-hover-fill"
                  >
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
                  Emergency dental care may be needed if you have had a
                  blow to the face, lost a filling, or cracked a
                  tooth.{" "}
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
  );
}
