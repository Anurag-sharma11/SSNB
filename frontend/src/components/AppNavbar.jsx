import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../assets/Logo.png";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./NavbarCustom.css";
import Fuse from "fuse.js";
import { useState } from "react";
import searchData from "../searchData";
import useIsMobile from "../hooks/useIsMobile";
import useIsTablet from "../hooks/useIsTablet";



function AppNavbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
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
    setSuggestions(results.map((res) => res.item));
  };

  const handleSelect = (item) => {
    setQuery(item.title);
    setSuggestions([]);

    // Check if route contains a hash (like #faq or #services)
    if (item.route.includes("#")) {
      const [path, hash] = item.route.split("#");

      // Case 1: Already on the correct page
      if (location.pathname === path) {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
          el.classList.add("highlighted");
          setTimeout(() => el.classList.remove("highlighted"), 1500);
        }
      }
      // Case 2: On a different page (e.g., searching FAQ while on Home)
      else {
        navigate(path || "/"); // navigate to the correct page

        // Wait for page to render, then scroll
        setTimeout(() => {
          const el = document.getElementById(hash);
          if (el) {
            el.scrollIntoView({ behavior: "smooth" });
            el.classList.add("highlighted");
            setTimeout(() => el.classList.remove("highlighted"), 1500);
          }
        }, 800); // delay (tune if your page loads slower)
      }
    }
    // Case 3: Regular route navigation (no section)
    else {
      navigate(item.route);
    }
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if (suggestions.length > 0) handleSelect(suggestions[0]);
  };

  return (
    <Navbar expand="lg" fixed="top" className="custom-navbar shadow-sm py-2">
      <Container fluid className="align-items-center justify-content-between">
        {/* Logo Section */}
        <Navbar.Brand
  as={Link}
  to="/"
  className={`d-flex align-items-center m-0 p-0 ${
  isMobile ? "d-none" : "gap-3 ms-2"
}`}

>
  {/* Desktop/Tablet: Show logo, Mobile: hide logo */}
  {!isMobile && (
    <img
      src={logo}
      alt="SSNB Logo"
      width="80"
      height="65"
      className="d-inline-block align-top logo-style"
    />
  )}

  {/* Title (always visible) */}
  <span
    className="brand-title"
    style={{
      fontSize: isMobile ? "1.2rem" : "2rem",
      transform: isMobile ? "scaleY(1)" : "scaleY(1.6)",
    }}
  >
    Seva Sai Nursing Bureau
  </span>
</Navbar.Brand>

        
        <div className="mobile-header-wrapper">
  <Navbar.Toggle aria-controls="navbarScroll" />

  {isMobile && (
    <span className="mobile-brand-title">
      Seva Sai Nursing Bureau
    </span>
  )}
</div>



        <Navbar.Collapse
          id="navbarScroll"
          className={`justify-content-end ${isMobile ? "w-100 mt-3" : ""}`}
        >

          <Nav className="me-auto my-2 my-lg-0 ms-4 gap-2" navbarScroll>
            <Nav.Link as={Link} to="/" className="nav-link-custom">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="nav-link-custom">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/Services" className="nav-link-custom">
              Services
            </Nav.Link>

            <NavDropdown
              title="More"
              id="navbarScrollingDropdown"
              className="nav-link-custom"
            >
              <NavDropdown.Item as={Link} to="/gallery">
                Gallery
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/contact">
                Contact
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/feedback">
                Feedback
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

          {/* 🔍 Smart Search */}
          <div
            className="position-relative me-3"
            style={{
              minWidth: isMobile ? "100%" : isTablet ? "260px" : "320px",
              marginTop: isMobile ? "10px" : "0",
            }}
          >

            <Form
              className="d-flex"
              style={{ width: isMobile ? "100%" : "auto" }}
              onSubmit={handleSubmit}
            >

              <Form.Control
                type="search"
                placeholder="Search anything..."
                className="me-2 rounded-pill border-primary"
                aria-label="Search"
                value={query}
                onChange={handleInputChange}
              />
              <Button
                variant="primary"
                className="rounded-pill px-3"
                type="submit"
              >
                Search
              </Button>
            </Form>

            {/* Suggestions Dropdown */}
            {suggestions.length > 0 && (
              <ul className="suggestion-box">
                {suggestions.map((item, index) => (
                  <li key={index} onClick={() => handleSelect(item)}>
                    {item.title}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
