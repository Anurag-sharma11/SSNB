import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../assets/Logo.png";

import { Link, useNavigate, useLocation } from "react-router-dom";
import Fuse from "fuse.js";
import { useState } from "react";

import searchData from "../searchData";
import useIsMobile from "../hooks/useIsMobile";
import useIsTablet from "../hooks/useIsTablet";

import "./Navbar3D.css";


function Navbar3D() {
  const navigate = useNavigate();
  const location = useLocation();

  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

  const isMobile = useIsMobile();
  const isTablet = useIsTablet();


  const fuse = new Fuse(searchData, {
    keys: ["title", "keywords", "content"],
    threshold: 0.3,
  });


  const handleInputChange = (e) => {
    const value = e.target.value;

    setQuery(value);

    if (value.trim() === "") {
      setSuggestions([]);
      return;
    }

    const results = fuse.search(value);

    setSuggestions(
      results.map((res) => res.item)
    );
  };


  const handleSelect = (item) => {
    setQuery(item.title);
    setSuggestions([]);

    if (item.route.includes("#")) {
      const [path, hash] = item.route.split("#");

      if (location.pathname === path) {
        const el = document.getElementById(hash);

        if (el) {
          el.scrollIntoView({
            behavior: "smooth",
          });

          el.classList.add("highlighted");

          setTimeout(() => {
            el.classList.remove("highlighted");
          }, 1500);
        }
      } else {
        navigate(path || "/");

        setTimeout(() => {
          const el = document.getElementById(hash);

          if (el) {
            el.scrollIntoView({
              behavior: "smooth",
            });

            el.classList.add("highlighted");

            setTimeout(() => {
              el.classList.remove("highlighted");
            }, 1500);
          }
        }, 800);
      }
    } else {
      navigate(item.route);
    }
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    if (suggestions.length > 0) {
      handleSelect(suggestions[0]);
    }
  };


  return (
    <header className="ssnb-floating-nav">

      <div className="ssnb-nav-shell">

        {/* ================= LOGO ================= */}

        <Link
          to="/"
          className="ssnb-brand"
        >

          <div className="ssnb-logo-wrap">
            <img
              src={logo}
              alt="Seva Sai Nursing Bureau"
            />
          </div>

          {!isMobile && (
            <div className="ssnb-brand-text">
              <span>SEVA SAI</span>
              <small>NURSING BUREAU</small>
            </div>
          )}

        </Link>


        {/* ================= MOBILE BRAND ================= */}

        {isMobile && (
          <div className="ssnb-mobile-title">
            SEVA SAI
          </div>
        )}


        {/* ================= MOBILE TOGGLE ================= */}

        {isMobile && (
            <button
                className="ssnb-mobile-toggle"
                type="button"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-controls="ssnb-navigation"
                aria-expanded={menuOpen}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>
        )}


        {/* ================= NAVIGATION ================= */}

        <nav
            id="ssnb-navigation"
            className={`ssnb-navigation ${isMobile ? "ssnb-mobile-nav" : ""
                } ${menuOpen ? "open" : ""}`}
        >

          <div className="ssnb-links">

            <Link
              to="/"
              className={`ssnb-nav-link ${
                location.pathname === "/" ? "active" : ""
              }`}
            >
              Home
            </Link>


            <Link
              to="/about"
              className={`ssnb-nav-link ${
                location.pathname === "/about" ? "active" : ""
              }`}
            >
              About
            </Link>


            <Link
              to="/Services"
              className={`ssnb-nav-link ${
                location.pathname === "/Services" ? "active" : ""
              }`}
            >
              Services
            </Link>


            <NavDropdown
              title="More"
              id="ssnb-more-dropdown"
              className="ssnb-more-dropdown"
            >

              <NavDropdown.Item
                as={Link}
                to="/gallery"
              >
                Gallery
              </NavDropdown.Item>

              <NavDropdown.Item
                as={Link}
                to="/contact"
              >
                Contact
              </NavDropdown.Item>

              <NavDropdown.Divider />

              <NavDropdown.Item
                as={Link}
                to="/feedback"
              >
                Feedback
              </NavDropdown.Item>

            </NavDropdown>

          </div>


          {/* ================= SEARCH ================= */}

          <div className="ssnb-search-area">

            <Form
              className="ssnb-search"
              onSubmit={handleSubmit}
            >

              <div className="ssnb-search-input-wrap">

                <span className="ssnb-search-icon">
                  ⌕
                </span>

                <Form.Control
                  type="search"
                  placeholder="Search anything..."
                  aria-label="Search"
                  value={query}
                  onChange={handleInputChange}
                />

              </div>


              <Button
                type="submit"
                className="ssnb-search-button"
              >
                Search
              </Button>

            </Form>


            {/* ================= SUGGESTIONS ================= */}

            {suggestions.length > 0 && (

              <ul className="ssnb-suggestions">

                {suggestions.map((item, index) => (

                  <li
                    key={index}
                    onClick={() => handleSelect(item)}
                  >
                    {item.title}
                  </li>

                ))}

              </ul>

            )}

          </div>

        </nav>

      </div>

    </header>
  );
}


export default Navbar3D;