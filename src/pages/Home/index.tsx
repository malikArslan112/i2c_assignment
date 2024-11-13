import React from "react";
import Navbar from "../../components/global/Navbar";
import { about_data, features_data, slider_images } from "../../utils/GlobalContants";
import { formValidationRules } from "../../utils/validations";
import "./home.css";

function Home() {
  const [state, setState] = React.useState({
    IsRequiredActive: false,
    name: localStorage.getItem("name") ?? "",
    companyName: localStorage.getItem("companyName") ?? "",
    email: localStorage.getItem("email") ?? "",
    IsRegistered: localStorage.getItem("IsRegistered") ?? false,
  });
  const sliderRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        const maxScrollLeft = sliderRef.current.scrollWidth - sliderRef.current.clientWidth;

        if (sliderRef.current.scrollLeft >= maxScrollLeft) {
          sliderRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
        }
      }
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState((p) => ({
      ...p,
      [e.target.name]: e.target.value,
    }));
    localStorage.setItem(e.target.name, e.target.value);
  };

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const checkErrors = (value: string, fieldName: string): string => {
    const rule = formValidationRules[fieldName];

    if (!rule) {
      return "";
    }

    if (rule.isRequired && value === "") {
      return `${fieldName} field is required`;
    }

    if (value !== "" && !rule.regex.test(value)) {
      return rule.errorMessage;
    }

    return "";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e?.preventDefault();
    setState((p) => ({
      ...p,
      IsRequiredActive: true,
    }));
    if (
      checkErrors(state.name, "Name") != "" ||
      checkErrors(state.companyName, "companyName") != "" ||
      checkErrors(state.email, "Email") != ""
    ) {
      return;
    }
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
                Lorem ipsum{" "}
                <span className="blue_text">
                  dolor
                  <svg
                    width="126"
                    height="11"
                    viewBox="0 0 126 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="curve_underline"
                  >
                    <path
                      d="M2.04198 8.50584C24.8536 4.70635 81.1524 -1.34187 123.855 4.86114"
                      stroke="#F97C00"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>{" "}
                sit amet yo 👋
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
                      <img className="about_avatar" src={item?.avatar} alt={item?.title} />
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
              <img className="about_right_img" src="about_right.svg" alt="about right" />
            </div>
          </section>

          <section id="features">
            {features_data?.map((item, index) => (
              <div key={index?.toString()} className={`feature_item`}>
                <div>
                  <img className="feature_avatar" src={item?.avatar} alt={item?.title} />
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
              <h2 className="slider_heading underlined_heading">
                Trusted by
                <svg
                  width="209"
                  height="10"
                  viewBox="0 0 209 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="curve_underline"
                >
                  <path
                    d="M2.45029 7.28623C40.6142 3.84683 134.855 -1.31147 206.508 5.57055"
                    stroke="#F97C00"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </h2>
              <p className="slider_desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique
                senectus dui pharetra sit.
              </p>
            </div>

            <div className="slider_container">
              <button
                onClick={scrollLeft}
                style={{
                  border: "none",
                  cursor: "pointer",
                }}
              >
                <img src={slider_images.chevron_left} alt="scroll left" />
              </button>

              <div ref={sliderRef} className="slider">
                <img src={slider_images.microsoft_logo} alt="microsoft logo" />
                <img src={slider_images.twitter_logo} alt="twitter logo" />
                <img src={slider_images.cola_logo} alt="cola logo" />
                <img src={slider_images.twitter_logo} alt="twitter logo" />
                <img src={slider_images.cola_logo} alt="cola logo" />
                <img src={slider_images.microsoft_logo} alt="microsoft logo" />
              </div>

              <button
                onClick={scrollRight}
                style={{
                  border: "none",
                  cursor: "pointer",
                }}
              >
                <img src={slider_images.chevron_right} alt="scroll right" />
              </button>
            </div>
          </section>

          <section id="contact_us">
            <div className="reg_left">
              <img
                className="reg_left_img"
                src={slider_images.reg_left_img}
                alt="registration left"
              />
            </div>

            <div className="reg_right">
              {state.IsRegistered ? (
                <div className="registered_container">
                  <h2 className="slider_heading green_color">Registration</h2>
                  <p className="reg_desc">
                    Hi <strong>{state.name}</strong>, thanks for registering. Somebody will contact
                    you soon.
                  </p>
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
                      />
                      {state.IsRequiredActive && (
                        <small className="error_text">{checkErrors(state.name, "Name")}</small>
                      )}
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
                      {state.IsRequiredActive && (
                        <small className="error_text">
                          {checkErrors(state.companyName, "companyName")}
                        </small>
                      )}
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
                      />
                      {state.IsRequiredActive && (
                        <small className="error_text">{checkErrors(state.email, "Email")}</small>
                      )}
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
