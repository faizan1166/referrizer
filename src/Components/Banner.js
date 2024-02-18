import React, { useEffect } from "react";
import { FaCirclePlay } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";

function Banner() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="bannerback">
      <div className="container">
        <div className="text-center p-4 px-md-5 px-sm-0">
          <h1
            className="display-5 fw-bold text-white pt-4 px-5"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Become a Referrizer
            <br /> API Integration Partner
          </h1>
          <p className="fw-bold text-white py-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          </p>
          <div className="d-flex justify-content-center">
            <button className="btn btn-light btn-sm px-4 themeColor">
              Get Started
            </button>
            <button
              className="btn btn-primary btn-sm px-4"
              style={{ backgroundColor: "transparent", border: "none" }}
            >
              <FaCirclePlay /> Play Video
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-12 d-lg-none ">
            <div className="d-flex justify-content-center">
              <img
                src="images/Frame 55611631.png"
                className="img-fluid"
                alt="Editor"
                data-aos="fade-down"
                data-aos-delay="200"
              />
            </div>
          </div>
          <div className="col col-lg-2 d-flex flex-column justify-content-around">
            <img
              src="images/Group 55611513.png"
              className="img-fluid"
              alt="Image1"
              data-aos="fade-up"
              data-aos-delay="200"
              style={{ marginRight: "-40px" }}
            />
            <div
              className="d-flex justify-content-center bg-white rounded-4 shadow-sm"
              style={{ cursor: "pointer"  }}
              data-aos="fade-down"
              data-aos-delay="200"

            >
              <img
                src="images/Group 55611656.png"
                className="img-fluid mt-2"
                alt="Image2"
                
              />
            </div>
          </div>
          <div className="col-sm-6 col-lg-8 d-none d-lg-flex justify-content-center">
            <img
              src="images/Frame 55611631.png"
              className="img-fluid"
              alt="Editor"
              data-aos="fade-down"
              data-aos-delay="200"
            />
          </div>
          <div className="col col-lg-2 d-flex flex-column ">
            <img
              src="images/Group 55611512.png"
              className="img-fluid"
              // style={{ marginLeft: "-20px" }}
              alt="Image3"
              data-aos="fade-up"
              data-aos-delay="200"
            />
            <div
              className="d-flex justify-,self-center justify-content-center align-items-center bg-white rounded-4 shadow-sm"
              style={{ cursor: "pointer" }}
              data-aos="fade-down"
              data-aos-delay="200"
            >
              <img
                src="images/Frame 55611501.png"
                className="img-fluid p-3"
                // style={{height:"100px",width:"150px"}}
                alt="Image4"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
