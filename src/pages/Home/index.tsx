import React from "react";
import "./home.css";
import { about_data, features_data, slider_images } from "../../utils/GlobalContants";

function Home() {
  const [state, setState] = React.useState({
    IsRequiredActive: false,
    name: "",
    companyName: "",
    email: "",
  });

  const handleInputChange = () => {};

  return (
    <>
      <div className="sections_container">
        <section id="about">
          <div className="about_left">
            <h1 className="main_heading">
              Lorem ipsum <span>dolor</span> sit amet yo 👋
            </h1>

            <div className="about_data_container">
              {about_data?.map((item, index) => (
                <div
                  key={index?.toString()}
                  className={`about_data_item ${
                    index < about_data?.length - 1 ? "show_shadow" : ""
                  }`}
                >
                  <div>
                    <img className="about_avatar" src={item?.avatar} />
                  </div>

                  <div>
                    <p className="about_title">{item?.title}</p>
                    <p className="about_title about_desc">{item?.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="about_right">
            <img className="about_right_img" src="about_right.svg" />
          </div>
        </section>

        <section id="registration">
          {features_data?.map((item, index) => (
            <div key={index?.toString()} className={`feature_item`}>
              <div>
                <img className="feature_avatar" src={item?.avatar} />
              </div>

              <div>
                <p className="feature_title">{item?.title}</p>
                <p className="feature_title about_desc">{item?.description}</p>
              </div>
            </div>
          ))}
        </section>

        <section id="careers">
          <div className="slider_info">
            <h2 className="slider_heading">Trusted by</h2>
            <p className="slider_desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique senectus
              dui pharetra sit.
            </p>
          </div>

          <div className="slider_container">
            <img src={slider_images.chevron_left} />
            <div className="slider">
              <img src={slider_images.microsoft_logo} />

              <img src={slider_images.twitter_logo} />

              <img src={slider_images.cola_logo} />

              <img src={slider_images.microsoft_logo} />

              <img src={slider_images.twitter_logo} />

              <img src={slider_images.cola_logo} />
            </div>
            <img src={slider_images.chevron_right} />
          </div>
        </section>

        <section id="contact_us">
          <div className="reg_left">
            <img className="reg_left_img" src={slider_images.reg_left_img} />
          </div>

          <div className="reg_right">
            <h2 className="slider_heading">Registration</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique senectus
              dui pharetra sit.
            </p>

            <form className="reg_form">
              <div className="input_container">
                <label className="form_label" htmlFor="name">
                  Name <span className="required_style">*</span>
                </label>
                <br />
                <input
                  name="name"
                  id="name"
                  placeholder="Enter your name"
                  value={state.name}
                  onChange={handleInputChange}
                  className="form_input"
                  required={true}
                />
              </div>

              <div className="input_container">
                <label className="form_label" htmlFor="companyName">
                  Company
                </label>
                <br />
                <input
                  name="companyName"
                  id="companyName"
                  placeholder="Enter your company name"
                  value={state.companyName}
                  onChange={handleInputChange}
                  className="form_input"
                />
              </div>

              <div className="input_container">
                <label className="form_label" htmlFor="email">
                  Email Address <span className="required_style">*</span>
                </label>
                <br />
                <input
                  name="email"
                  id="email"
                  placeholder="Enter your email address"
                  value={state.email}
                  onChange={handleInputChange}
                  className="form_input"
                  required={true}
                />
              </div>

              <p className="active_link">Register</p>
            </form>
          </div>
        </section>

        <section id="footer">
          <hr className="line" />

          <div className="navbar_links_container footer_links">
            <a className={window.location.pathname === "/faqs" ? "active_link" : ""} href="/faqs">
              FAQs
            </a>

            <a
              className={window.location.pathname === "/privacy-policy" ? "active_link" : ""}
              href="/privacy-policy"
            >
              Privacy Policy
            </a>

            <a className={window.location.pathname === "/other" ? "active_link" : ""} href="/other">
              Other
            </a>

            <a
              className={window.location.pathname === "/contact-us" ? "active_link" : ""}
              href="/contact-us"
            >
              Contact us
            </a>
          </div>

          <p className="copyright">Copyright © 2024 i2c inc. All rights reserved.</p>
        </section>
      </div>
    </>
  );
}

export default Home;
