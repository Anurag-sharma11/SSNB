import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import FAQ from "./components/FAQ";
import FormPage from "./components/FormPage";
import Gallery from "./pages/Gallery";
import Services from "./pages/Services";
import Feedback from "./pages/Feedback";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} /> {/* ✅ Route added */}
        
        <Route path="/" element={<FAQ />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/gallery" element={<Gallery />} /> {/* ✅ Route added */}
        <Route path="/services" element={<Services />} /> {/* ✅ Route added */}
        <Route path="/contact" element={<Contacts />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </Router>
  );
}

export default App;
