import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  return (
    <footer
      className="text-center text-lg-start text-white"
      style={{ backgroundColor: "#23283B", overflow: "hidden" }}
    >
      <div className="container p-4 pb-0">
        <section className="">
          <div className="row">
            <div className="col-md-12 col-lg-3 col-xl-3 col-sm-12 mx-auto mt-3">
              <img src="images/Group (1).png" className="d-none d-lg-block" />
            </div>
            <div className="col-md-6 col-lg-2 col-xl-2 col-6 mx-auto mt-3 text-start text-start">
              <h6 className="text-uppercase mb-4 font-weight-bold ">Company</h6>
              <p className="footertext" style={{ cursor: "pointer" }}>
                <a className="text-secondary text-decoration-none text-decoration-none ">
                  About Us
                </a>
              </p>
              <p className="footertext">
                <a className="text-secondary  text-decoration-none">
                  We're Hiring
                </a>
              </p>
              <p className="footertext">
                <a className="text-secondary text-decoration-none">Investors</a>
              </p>
              <p className="footertext">
                <a className="text-secondary text-decoration-none">Contact</a>
              </p>
            </div>
            <div className="col-md-6 col-lg-2 col-xl-2 col-6 mx-auto mt-3 text-start">
              <h6 className="text-uppercase mb-4 font-weight-bold">
                Resources
              </h6>
              <p className="footertext">
                <a className="text-secondary text-decoration-none">Blog</a>
              </p>
              <p className="footertext">
                <a className="text-secondary text-decoration-none">Videos</a>
              </p>
              <p className="footertext">
                <a className="text-secondary text-decoration-none">
                  Case Studies
                </a>
              </p>
              <p className="footertext">
                <a className="text-secondary text-decoration-none">
                  Marketplace
                </a>
              </p>
              <p className="footertext">
                <a className="text-secondary text-decoration-none">
                  Industries
                </a>
              </p>
            </div>
            <div className="col-md-6 col-lg-2 col-xl-2 col-6 mx-auto mt-3 text-start">
              <h6 className="text-uppercase mb-4 font-weight-bold">Help</h6>
              <p className="footertext">
                <i className="fas fa-home mr-3"></i> Support
              </p>
              <p className="footertext">Knowledge Base</p>
              <p className="footertext">Live Chat</p>
            </div>
            <div className="col-md-6 col-lg-2 col-xl-2 col-6 mx-auto mt-3 text-start">
              <h6 className="text-uppercase mb-4 font-weight-bold">
                Partners{" "}
              </h6>
              <p className="footertext">
                <a className="text-secondary text-decoration-none">
                  Development Partners
                </a>
              </p>
              <p className="footertext">
                <a className="text-secondary text-decoration-none">
                  Affiliate Program
                </a>
              </p>
              <p className="footertext">
                <a className="text-secondary text-decoration-none">
                  Partner Offers
                </a>
              </p>
            </div>
          </div>
        </section>
        <hr className="my-3" />
        <section className="p-3 pt-0">
          <div className=" mt-3 d-flex justify-content-center mt-3">
            <img
              src="images/Group (1).png"
              className="d-md-block d-sm-block d-lg-none d-xl-none"
            />
          </div>
          <div className="row d-flex align-items-center">
            <div className="col-md-6 col-lg-6 ml-lg-0 my-3">
              <a className="btn-floating m-2 " role="button">
                <FaLinkedin style={{ color: "White" }} />
              </a>

              <a className="btn-floating m-2" role="button">
                <FaTwitter style={{ color: "White" }} />
              </a>
              <a className="btn-floating m-2 " role="button">
                <FaInstagram style={{ color: "White" }} />
              </a>
              <a className="btn-floating m-2 " role="button">
                <FaFacebook style={{ color: "White" }} />
              </a>
              <a className="btn-floating m-2 " role="button">
                <FaYoutube style={{ color: "White" }} />
              </a>
            </div>

            <div className="col-md-2 col-lg-2  text-md-start">
              <div className="footertext">© 2013-2021 Referrizer Inc.</div>
            </div>
            <div className="col-md-2 col-lg-2 col-sm-6  text-md-end">
              <div className="p-2 footertext">
                <a>Login</a>
              </div>
            </div>
            <div className="col-md-2 col-lg-2 col-sm-6 text-md-end">
              <div className="p-2 footertext">
                <a>Sign up for Free</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
