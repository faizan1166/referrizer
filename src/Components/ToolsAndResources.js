import React from "react";

function ToolsAndResources() {
  return (
    <div className="container ">
      <div className="row py-3">
        <div className="col-sm-12 col-md-6 col-lg-6">
          <p className="themeColor">Tools & Resourses</p>
          <h2>Tools & Other Resourses</h2>
          <p style={{ color: "#6B7B9C" }}>
            Consectetur adipiscing elit, consectetur adipiscing amet.
          </p>
          <div className="d-flex py-3">
            <div
              className="rounded-2"
              style={{
                marginRight: "13px",
                backgroundColor: "#EBECEF",
                width: "3px",
              }}
            ></div>
            <h5 className="py-2">Visual Builder</h5>
          </div>
          <div className="d-flex py-3">
            <div
              className="rounded-2 "
              style={{
                marginRight: "13px",
                backgroundColor: "blue",
                width: "6px",
              }}
            ></div>
            <div className="py-2">
              <h5>Videos library</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur laoreet. Video library
                of what our customers say, Tutorials, App integration and more.
              </p>
              <a
                href="#"
                className="themeColor text-sm"
                style={{ textDecoration: "none" }}
              >
                View More
              </a>
            </div>
          </div>
          <div className="d-flex py-3">
            <div
              className="rounded-2"
              style={{
                marginRight: "13px",
                backgroundColor: "#EBECEF",
                width: "3px",
              }}
            ></div>
            <h5 className="py-2">Quick Support</h5>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6">
          <img src="images/Frame 55611629.png" className="img-fluid" />
        </div>
      </div>
    </div>
  );
}

export default ToolsAndResources;
