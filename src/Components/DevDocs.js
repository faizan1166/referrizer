import React, { useState, useEffect } from "react";
import { FaJava, FaAngular, FaNodeJs, FaPython, FaAndroid, FaCode, FaApple, FaFileAlt } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css";


  
function DevDocs() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showAllCards, setShowAllCards] = useState(windowWidth > 768);
  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setShowAllCards(window.innerWidth > 768);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const cardsData = [
    { icon: <FaJava />, title: "Java" },
    { icon: <FaNodeJs />, title: "Node JS" },
    { icon: <FaAngular />, title: "Angular" },
    // { icon: <FaPython />, title: "Python" },
    // { icon: <FaAndroid />, title: "Android" },
    { icon: <FaCode />, title: "Api Ref" },
    { icon: <FaApple />, title: "IOS" },
  ];

  const handleShowAll = () => {
    setShowAllCards(!showAllCards);
  };

  return (
    <div style={{ backgroundColor: "#F6F8FE", overflow: "hidden" }} className="py-5">
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-12 px-3 text-center">
            <h6 className="themeColor my-2">Dev Docs</h6>
            <h1 style={{ fontSize: "2em" }} className="my-4">
              Dev Documentation
              <br />
              Integrate your application in minutes
            </h1>
            <p className="text-muted mb-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel aliquam, massa nec hendrerit laoreet.
            </p>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <img src="images/Frame 55611631.png" className="img-fluid" alt="Editor" data-aos="fade-up"   data-aos-delay="200" />
        </div>
        <div className="row d-flex justify-content-center my-4">
          {cardsData.map((item, index) => (
            (!showAllCards && index > 1) ? null :
              <div key={index} className="col-lg-2  col-md-4 mb-4" style={{ flex: windowWidth<768 && "0 0 33.333333%", maxWidth:windowWidth<768 && "33.333333%", important:windowWidth<768 && true }}>
                <div className="card d-flex justify-content-center align-items-center p-3 border-0 shadow-sm rounded-4">
                  <h1>{item.icon}</h1>
                </div>
                <h6 className="text-center mt-2 titleHover">{item.title}</h6>
              </div>
          ))}
          <div className="col-lg-2 col-sm-4 mb-4" style={{ flex: windowWidth<768 &&"0 0 33.333333%", maxWidth:windowWidth<768 && "33.333333%", important:windowWidth<768 && true }}>
            <div
              className="card d-flex justify-content-center align-items-center p-3 border-0 shadow-sm rounded-4"
              onClick={handleShowAll}
              style={{ cursor: "pointer" }}
            >
              <h1>{showAllCards ? <IoIosArrowBack /> : <IoIosArrowForward />}</h1>
            </div>
            <h6 className="text-center mt-2">{showAllCards ? "Less" : "More"}</h6>
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center">
        <button className="btn btn-outline-primary btn-sm px-5" style={{backgroundColor:"themeColor"}}><FaFileAlt/> View All Docs</button></div>
      </div>
    </div>
  );
}

export default DevDocs;
