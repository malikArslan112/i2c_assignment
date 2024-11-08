import "./App.css";
import i2c_logo from "/i2c_logo.svg";

function App() {
  return (
    <>
      <nav className="navbar">
        <a href="https://react.dev" target="_blank">
          <img src={i2c_logo} className="i2c_logo" alt="i2c logo" />
        </a>

        <div className="navbar_links_container">
          <a className="nav_link" href="#about">About us</a>
          <a className="nav_link" href="/">Registration</a>
          <a className="nav_link" href="/">Careers</a>
          <a className="nav_link" href="/">Contact us</a>
        </div>
      </nav>

      <section id="#about">
        <h1>Lorem ipsum dolor sit amet yo 👋</h1>
      </section>
    </>
  );
}

export default App;
