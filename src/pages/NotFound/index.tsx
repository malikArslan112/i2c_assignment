import Navbar from "../../components/global/Navbar";
import "./notFound.css";

function NotFound() {
  return (
    <div className="app">
      <Navbar />
      <div className="not-found-container">
        <div className="error-code">404</div>
        <div className="error-message">
          <h1>Oops! Page Not Found</h1>
          <p>Sorry, the page you're looking for doesn't exist or has been moved.</p>
        </div>
        <a href="/" className="home-btn">
          Go Back Home
        </a>
      </div>
    </div>
  );
}

export default NotFound;
