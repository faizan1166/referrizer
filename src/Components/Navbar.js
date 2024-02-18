import React from "react";
import { FaSearch } from "react-icons/fa";
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";

const NavBar = () => {
  return (
    <div className="container">
      <nav class="navbar navbar-expand-lg navbar-light bg-white p-3">
        <div class="container-fluid">
          {/* <a class="navbar-brand" href="#">
          Referrizer
        </a> */}
          <img src="/images/group.png" className="img-fluid" />

          <div class="ml-auto d-flex align-items-center">
            <button class="navbar-toggler" type="button">
              <FaSearch className=" d-lg-none" style={{ color: "#4C70F0" }} />
            </button>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <HiOutlineBars3CenterLeft
                style={{ fontSize: "30px", color: "#6B7B9C" }}
              />
            </button>
          </div>

          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a
                  class="nav-link mx-2 active fw-bold"
                  aria-current="page"
                  href="#"
                  style={{ color: "#6D7287" }}
                >
                  Solutions
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link mx-2 fw-bold"
                  href="#"
                  style={{ color: "#6D7287" }}
                >
                  Pricing
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link mx-2 fw-bold"
                  href="#"
                  style={{ color: "#6D7287" }}
                >
                  Testimonials
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link mx-2 fw-bold"
                  href="#"
                  style={{ color: "#6D7287" }}
                >
                  Resources
                </a>
              </li>
            </ul>
            <ul class="navbar-nav ms-auto  d-lg-inline-flex">
              <li class="nav-item mx-2 mb-2">
                <button type="button" class="btn btn-outline-primary">
                  Login
                </button>
              </li>
              <li class="nav-item mx-2 ">
                <button type="button" class="btn btn-primary">
                  Sign Up For Free
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
