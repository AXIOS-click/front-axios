import { Fragment } from "react";
const SideBar = () => {
  return (
    <Fragment>
      <div className="form-back-drop"></div>
      <section className="hidden-bar">
        <div className="inner-box text-center">
          <div className="cross-icon">
            <span className="fa fa-times" />
          </div>
          <div className="title">
            <h4>Get Appointment</h4>
          </div>
          {/*Appointment Form*/}
          <div className="appointment-form">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                document!
                  .querySelector("body")!
                  .classList.remove("side-content-visible");
              }}
            >
              <div className="form-group">
                <input type="text" name="text" placeholder="Name" required />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                />
              </div>
              <div className="form-group">
                <textarea placeholder="Message" rows={5} />
              </div>
              <div className="form-group">
                <button type="submit" className="theme-btn">
                  Submit now
                </button>
              </div>
            </form>
          </div>
          {/*Social Icons*/}
          <div className="social-style-one">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/AXIOS-CLICK-109389375125627/"
            >
              <i className="fab fa-facebook-f" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/axiosclick/"
            >
              <i className="fab fa-instagram" />
            </a>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
export default SideBar;
