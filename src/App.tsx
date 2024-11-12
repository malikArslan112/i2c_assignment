import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/global/Navbar";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/registration" Component={Home} />
        <Route path="/about-us" Component={Home} />
        <Route path="/contact-us" Component={Home} />
        <Route path="/careers" Component={Home} />
      </Routes>
    </div>
  );
}

export default App;
