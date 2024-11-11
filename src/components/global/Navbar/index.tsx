import React from "react";
import "./navbar.css";

function Navbar({ activeSectionId = "" }) {
  const [isSticky, setIsSticky] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="navbar_container">
      <nav id="navbar" className={`navbar ${isSticky ? "sticky" : ""}`}>
        <a href="/">
          <img src={"i2c_logo.svg"} className="i2c_logo" alt="i2c logo" />
        </a>

        <div className="navbar_links_container">
          <a className={activeSectionId === "about" ? "active_link" : ""} href="#about">
            About us
          </a>
          <a
            className={activeSectionId === "registration" ? "active_link" : ""}
            href="#registration"
          >
            Registration
          </a>
          <a className={activeSectionId === "careers" ? "active_link" : ""} href="#careers">
            Careers
          </a>
          <a className={activeSectionId === "contact_us" ? "active_link" : ""} href="#contact_us">
            Contact us
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
