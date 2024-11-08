// Navbar.js
import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";
import logo from '../../assets/Images/logo.png'; // Import your logo image

const Navbar = () => {
  React.useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY >= 0) {
        navbar.classList.add('sticky');
      } else {
        navbar.classList.remove('sticky');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close the navbar toggler on link click
  const closeNavbar = () => {
    const navbarToggler = document.querySelector(".navbar-collapse");
    navbarToggler.classList.remove("show");
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light nav-bg p-3">
        <NavLink to="/" className="navbar-brand">
          <img src={logo} alt="Logo" className="navbar-logo" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" 
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
          
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" onClick={closeNavbar} activeClassName="active">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Aboutus" onClick={closeNavbar} activeClassName="active">About Us</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Services" onClick={closeNavbar} activeClassName="active">Services</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Price" onClick={closeNavbar} activeClassName="active">Price</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/team" onClick={closeNavbar} activeClassName="active">Our Team</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Contactus" onClick={closeNavbar} activeClassName="active">Contact Us</NavLink>
            </li>
          </ul>
          <button className="animated-button">
          CB LMS <span className="arrow-icon">→</span> {/* Right arrow icon */}
        </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
