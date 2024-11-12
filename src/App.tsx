import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="*" Component={NotFound} />
      <Route path="/" Component={Home} />
      <Route path="/registration" Component={Home} />
      <Route path="/about-us" Component={Home} />
      <Route path="/contact-us" Component={Home} />
      <Route path="/careers" Component={Home} />
      <Route path="/faqs" Component={Home} />
      <Route path="/other" Component={Home} />
      <Route path="/privacy-policy" Component={Home} />
    </Routes>
  );
}

export default App;
