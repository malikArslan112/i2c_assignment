import React from "react";
import "./home.css";
import { about_data, features_data, slider_images } from "../../utils/GlobalContants";
import Navbar from "../../components/global/Navbar";

function Home() {
  const [state, setState] = React.useState({
    IsRequiredActive: false,
    name: localStorage.getItem("name") ?? "",
    companyName: localStorage.getItem("companyName") ?? "",
    email: localStorage.getItem("email") ?? "",
    IsRegistered: localStorage.getItem("IsRegistered") ?? false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState((p) => ({
      ...p,
      [e.target.name]: e.target.value,
    }));
    localStorage.setItem(e.target.name, e.target.value);
  };

  const scrollLeft = () => {};
  const scrollRight = () => {};

  const handleSubmit = (e: React.FormEvent) => {
    e?.preventDefault();
    setState((p) => ({
      ...p,
      IsRegistered: true,
    }));
    localStorage.setItem("IsRegistered", "true");
  };

  return (
    <div className="app_bg">
      <div className="app">
        <Navbar />
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique
                senectus dui pharetra sit.
              </p>
            </div>

            <div className="slider_container">
              <img onClick={scrollLeft} src={slider_images.chevron_left} />
              <div className="slider">
                <img src={slider_images.microsoft_logo} />

                <img src={slider_images.twitter_logo} />

                <img src={slider_images.cola_logo} />

                <img src={slider_images.twitter_logo} />
                <img src={slider_images.cola_logo} />
                <img src={slider_images.microsoft_logo} />
              </div>
              <img onClick={scrollRight} src={slider_images.chevron_right} />
            </div>
          </section>

          <section id="contact_us">
            <div className="reg_left">
              <img className="reg_left_img" src={slider_images.reg_left_img} />
            </div>

            <div className="reg_right">
              {state.IsRegistered ? (
                <div>
                  <h2 className="slider_heading">Registration</h2>
                </div>
              ) : (
                <>
                  <h2 className="slider_heading">Registration</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique
                    senectus dui pharetra sit.
                  </p>

                  <form className="reg_form" onSubmit={handleSubmit}>
                    <div className="input_container">
                      <label className="form_label" htmlFor="name">
                        Name <span className="required_style">*</span>
                      </label>
                      <br />
                      <input
                        name="name"
                        id="name"
                        autoComplete="name"
                        placeholder="Enter your name"
                        value={state.name}
                        onChange={handleInputChange}
                        className={`form_input ${state.name ? "value_color" : ""}`}
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
                        className={`form_input ${state.companyName ? "value_color" : ""}`}
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
                        autoComplete="email"
                        placeholder="Enter your email address"
                        value={state.email}
                        onChange={handleInputChange}
                        className={`form_input ${state.email ? "value_color" : ""}`}
                        required={true}
                      />
                    </div>

                    <button type="submit" className="active_link reg_btn">
                      Register
                    </button>
                  </form>
                </>
              )}
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

              <a
                className={window.location.pathname === "/other" ? "active_link" : ""}
                href="/other"
              >
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
      </div>
    </div>
  );
}

export default Home;
