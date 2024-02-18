import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

function TestMonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    AOS.init();
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
    );
  };
  const testimonialsData = [
    {
      name: "Emma Thompson",
      role: "Senior Software Engineer",
      feedback:
        "Working with this team has been an incredible experience. Their dedication and expertise have truly elevated our projects. I highly recommend them!",
    },
    {
      name: "David Garcia",
      role: "Frontend Developer",
      feedback:
        "I've had the pleasure of collaborating with this team on several projects. Their attention to detail and commitment to excellence is unmatched. A fantastic team to work with!",
    },
    {
      name: "Sophia Martinez",
      role: "Product Manager",
      feedback:
        "The team's professionalism and efficiency have greatly contributed to the success of our projects. Their innovative solutions have exceeded our expectations. Highly recommend!",
    },
    {
      name: "Maxwell Nguyen",
      role: "UI/UX Designer",
      feedback:
        "It's been a pleasure working with this team. Their creativity and attention to user experience have greatly enhanced our products. I look forward to future collaborations!",
    },
  ];

  return (
    <div className="container" style={{ overflow: "hidden" }}>
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-12 px-3 text-center">
          <h6 className="themeColor my-2">Testmonials</h6>
          <h1 style={{ fontSize: "2em" }} className="my-4">
            What partners says about us{" "}
          </h1>
          <p className="text-muted mb-0">
            We Create dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod…{" "}
          </p>
        </div>
      </div>
      <div className="row my-5 ">
        <div className="col-sm-12 col-lg-6 col-md-6">
          <img
            src="images/testmonials.png"
            className="img-fluid"
            data-aos="fade-right"
            data-aos-delay="200"
          />
        </div>

        <div className="col-sm-12 col-lg-6 col-md-6">
          <h1 className="themeColor mt-2 mb-2" data-aos="fade-left">
            {testimonialsData[currentIndex].name}
          </h1>
          <p
            className="text-muted mb-3 mt-2"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            {testimonialsData[currentIndex].role}
          </p>
          <p className="text-muted" data-aos="fade-left" data-aos-delay="200">
            {testimonialsData[currentIndex].feedback}
          </p>
          <button
            className="btn btn-outline-primary btn-sm rounded-circle"
            style={{ marginRight: "5px", verticalAlign: "middle" }}
            onClick={handlePrev}
          >
            <FaArrowLeft
              style={{ fontSize: "0.8rem" }}
              className="m-0 align-self-center mb-1"
            />
          </button>
          <button
            className="btn btn-outline-primary btn-sm  rounded-circle ml-3"
            onClick={handleNext}
          >
            <FaArrowRight
              style={{ fontSize: "0.8rem" }}
              className="m-0 align-self-center mb-1"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TestMonials;
