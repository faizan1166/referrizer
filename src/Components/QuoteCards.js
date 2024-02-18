import React, { useState, useEffect } from "react";
import ItemsCarousel from "react-items-carousel";
import { Icon } from "@iconify/react";
import { Card } from "react-bootstrap";
import { FaEye, FaFileAlt, FaLinkedin } from "react-icons/fa";
// import { NavLink } from "react-router-dom";

const QuoteCards = () => {
  const chevronWidth = 40;
  const [numberOfCards, setNumberOfCards] = useState(2);
  const isSmallScreen = window.matchMedia("(max-width: 576px)").matches;
  const isMediumScreen = window.matchMedia("(max-width: 1024px)").matches;
  const [index, setIndex] = React.useState(0);
  const autoScrollInterval = 7000; // Adjust this value for the desired auto-scroll speed

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Calculate the next index and wrap around if necessary
      const nextIndex = (index + 1) % data.length;
      setIndex(nextIndex);
    }, autoScrollInterval);

    return () => {
      // Clean up the interval when the component unmounts
      clearInterval(intervalId);
    };
  }, [index]);

  const data = [
    {
      title: `Helped me grow my small business...`,
      desc: " It makes it easy to communicate and send out marketing campaigns through email and text templates.",
      fName: "Jason King",

      position: "Owner at Core & More Fitness",
      image: "images/Ellipse 3.png",
    },
    {
      title: `All-in-one Marketing Automation...`,
      desc: " It makes it easy to communicate and send out marketing campaigns through email and text templates.",
      fName: "Meteus Felipe",

      position: "Owner at Goosebumps Cryotherapy",
      image: "images/unsplash_JoM_lC1WAnE.png",
    },
    {
      title: `We're able to spread the word...`,
      desc: " It makes it easy to communicate and send out marketing campaigns through email and text templates.",
      fName: "Meteus Felipe",

      position: "Owner at Goosebumps Cryotherapy",
      image: "images/unsplash_ag4jTq3O2e4.png",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      const isExtraSmallScreen =
        window.matchMedia("(max-width: 992px)").matches;
      const isSmallScreen = window.matchMedia("(max-width: 576px)").matches;
      const isMediumScreen = window.matchMedia("(max-width: 1199px)").matches;
      setNumberOfCards(
        isSmallScreen ? 1 : isExtraSmallScreen ? 2 : isMediumScreen ? 3 : 3
      );
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [index]);

  return (
    <>
      <div className="pb-5">
        <div className="d-flex justify-content-center align-items-center">
          <div className="px-3 text-center ">
            <h6 className="themeColor">Success Stories</h6>
            <h1 style={{ fontSize: "2em" }}>Success Stories</h1>
            <p className="text-muted">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel
              aliquam, massa nec hendrerit laoreet.
            </p>
          </div>
        </div>
        <div
          style={{
            textAlign: "center",
            lineHeight: "0.9",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
          id="new_insights"
        >
          <div className="new_insights-style">
            <div className="container ">
              <ItemsCarousel
                slidesToScroll={1}
                requestToChangeActive={setIndex}
                activeItemIndex={index}
                numberOfCards={numberOfCards}
                infiniteLoop={true}
                gutter={30}
                //   leftChevron={
                //     isSmallScreen ? null : (
                //       <div style={{ marginRight: 50 }}>
                //         <button
                //           type="button"
                //           id="news-prev"
                //           className=" style_button btn btn-prev btn-icon shadow btn-sm position-absolute rounded-circle"
                //           tabindex="0"
                //           style={{
                //             border: "1px solid white",
                //             height: "35px",
                //             width: "35px",
                //           }}
                //           aria-label="Previous slide"
                //         >
                //           <Icon
                //             icon="grommet-icons:previous"
                //             fontSize={20}
                //             color="white"
                //           />
                //         </button>
                //       </div>
                //     )
                //   }
                //   rightChevron={
                //     isSmallScreen ? null : (
                //       <div style={{ marginLeft: "-35px" }}>
                //         <button
                //           type="button"
                //           id="news-next"
                //           className=" btn btn-prev btn-icon bg-transparent shadow btn-sm position-absolute rounded-circle"
                //           style={{
                //             border: "1px solid white",
                //             height: "35px",
                //             width: "35px",
                //           }}
                //           tabindex="0"
                //           aria-label="next slide"
                //         >
                //           <Icon
                //             icon="grommet-icons:next"
                //             fontSize={20}
                //             color="white"
                //           />
                //         </button>
                //       </div>
                //     )
                //   }
                outsideChevron
                chevronWidth={chevronWidth}
              >
                {data.map((item, i) => {
                  return (
                    <>
                      <div>
                        <Card
                          className=" dialog_box  bottom service-card position-relative  rounded-3  mb-2 mx-2  d-flex shadow"
                          style={{
                            marginTop: "80px",
                            backgroundColor: "white",
                            marginLeft: 20,
                            transition: "0.3s",
                            color: "#000",
                          }}
                        >
                          <div className="d-flex mx-5 justify-content-start pb-3">
                            <div
                              className="d-inline-block bg-white rounded-4 position-absolute top-0 translate-middle-y p-3 card-icon d-flex justify-content-center rounded-circle"
                              style={{ border: "1px solid #8080803b" }}
                            >
                              <Icon
                                icon="codicon:quote"
                                style={{ fontSize: 30, color: "#4C70F0" }}
                              />
                            </div>
                          </div>
                          <Card.Body className=" p-0 px-1">
                            <Item key={index} item={item} />
                          </Card.Body>
                        </Card>

                        <div
                          className="d-flex justify-content-start  "
                          style={{ marginLeft: "20px" }}
                        >
                          <div className=" rounded-circle d-flex align-items-center justify-content-center">
                            <img
                              src={item.image}
                              style={{ height: "80px", width: "80px" }}
                            />
                            <div>
                              <h6 className="mt-2 text-start"> {item.fName}</h6>
                              <p style={{ fontSize: "12px", color: "grey" }}>
                                {item.position}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </ItemsCarousel>
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center mt-5">
            <button
              className="btn btn-outline-primary btn-sm px-5"
              style={{ backgroundColor: "themeColor" }}
            >
              {" "}
              Read All Stories
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

function Item({ item }) {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="p-4 my-4" style={{ position: "relative" }}>
      <div className="mb-2 h6 text-start">{item.title}</div>
      <p
        className="text-start text-muted"
        style={{ fontSize: "14px", lineHeight: 1.3 }}
      >
        {item.desc}
      </p>
      <div
        className="d-flex"
        style={{ position: "absolute", bottom: 0, cursor: "pointer" }}
      >
        <a className="themeColor" style={{ textDecoration: "none" }}>
          <FaLinkedin />
          <span style={{ fontSize: "12px", marginLeft: "2px" }}>LinkedIn</span>
        </a>
        <a
          className="themeColor ml-3"
          style={{ textDecoration: "none", marginLeft: "12px" }}
        >
          <FaEye />
          <span style={{ fontSize: "12px", marginLeft: "2px" }}>
            View Story
          </span>
        </a>
      </div>
    </div>
  );
}
export default QuoteCards;
