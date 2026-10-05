import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import FAQ from "./components/FAQ";
import FormPage from "./components/FormPage";
import GalleryTest from "./pages/GalleryTest";
import Services from "./pages/Services";
import Feedback from "./pages/Feedback";
import HeroScrollTest from "./components/HeroScrollTest";
import MobileHomePage from "./pages/MobileHomePage/MobileHomePage";
import MobileImpactEditorial from "./pages/MobileHomePage/MobileImpactEditorial";

function ResponsiveHome() {
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(() =>
    window.matchMedia("(max-width: 1023px)").matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1023px)");

    const handleChange = (event) => {
      setIsMobileOrTablet(event.matches);
    };

    // Listen for screen-size changes
    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return isMobileOrTablet ? <MobileHomePage /> : <Home />;
}

function App() {
  return (
    <Router>

      <ScrollToTop />

      <Routes>
        <Route
          path="/"
          element={
            <ResponsiveHome />
          }
        />

        <Route path="/impact-test" element={<MobileImpactEditorial />} />
        <Route path="/about" element={<About />} /> {/* ✅ Route added */}
        
        <Route path="/" element={<FAQ />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/gallery" element={<GalleryTest />} /> {/* ✅ Route added */}
        <Route path="/services" element={<Services />} /> {/* ✅ Route added */}
        <Route path="/contact" element={<Contacts />} />
        <Route path="/feedback" element={<Feedback />} />

        {/* Experimental 3D/Scroll Hero */}
        <Route path="/hero-test" element={<HeroScrollTest />} />

        <Route path="/gallery-test" element={<GalleryTest />} />
      </Routes>
    </Router>
  );
}

export default App;
