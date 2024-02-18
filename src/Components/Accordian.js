import React from "react";
import { FaLeftLong } from "react-icons/fa6";
import { GoPlus } from "react-icons/go";

function Accordian() {
  return (
    <div className="container">
      <div className="d-flex justify-content-center align-items-center">
        <div className="px-3 text-center ">
          <h6 className="themeColor mb-3">FAQ's</h6>
          <h1 style={{ fontSize: "2em" }}>Frequently Asked Questions</h1>
          <p className="text-muted my-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel
            aliquam, massa nec hendrerit laoreet.
          </p>
        </div>
      </div>

      <div class="accordion" id="myAccordion">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button
              type="button"
              class="accordion-button collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
            >
              <b>Lorem ipsum dummy text here</b>
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse"
            data-bs-parent="#myAccordion"
          >
            <div class="card-body">
              <p className="p-3 py-4 m-0">
                Lorem ipsum dolor sit amet, te est inani solet laoreet, an
                corpora expetenda democritum has. Ut sit prima laboramus
                eloquentiam. An eos labore aliquip. Minim iusto detracto eu pri,
                qui ut periculis argumentum ullamcorper, velit habemus tibique
                an eos.
              </p>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button
              type="button"
              class="accordion-button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
            >
              <b>Lorem ipsum dummy text here</b>{" "}
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse show"
            data-bs-parent="#myAccordion"
          >
            <div class="card-body">
              <p className="p-3 py-4 m-0">
                Lorem ipsum dolor sit amet, te est inani solet laoreet, an
                corpora expetenda democritum has. Ut sit prima laboramus
                eloquentiam. An eos labore aliquip. Minim iusto detracto eu pri,
                qui ut periculis argumentum ullamcorper, velit habemus tibique
                an eos.
              </p>{" "}
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button
              type="button"
              class="accordion-button collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
            >
              <b>Lorem ipsum dummy text here</b>{" "}
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            data-bs-parent="#myAccordion"
          >
            <div class="card-body">
              <p className="p-3 py-4 m-0">
                Lorem ipsum dolor sit amet, te est inani solet laoreet, an
                corpora expetenda democritum has. Ut sit prima laboramus
                eloquentiam. An eos labore aliquip. Minim iusto detracto eu pri,
                qui ut periculis argumentum ullamcorper, velit habemus tibique
                an eos.
              </p>{" "}
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingFour">
            <button
              type="button"
              class="accordion-button collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
            >
              <b>Lorem ipsum dummy text here</b>{" "}
            </button>
          </h2>
          <div
            id="collapseFour"
            class="accordion-collapse collapse"
            data-bs-parent="#myAccordion"
          >
            <div class="card-body">
              <p className="p-3 py-4 m-0">
                Lorem ipsum dolor sit amet, te est inani solet laoreet, an
                corpora expetenda democritum has. Ut sit prima laboramus
                eloquentiam. An eos labore aliquip. Minim iusto detracto eu pri,
                qui ut periculis argumentum ullamcorper, velit habemus tibique
                an eos.
              </p>{" "}
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingFive">
            <button
              type="button"
              class="accordion-button collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
            >
              <b>Lorem ipsum dummy text here</b>{" "}
            </button>
          </h2>
          <div
            id="collapseFive"
            class="accordion-collapse collapse"
            data-bs-parent="#myAccordion"
          >
            <div class="card-body">
              <p className="p-3 py-4 m-0">
                Lorem ipsum dolor sit amet, te est inani solet laoreet, an
                corpora expetenda democritum has. Ut sit prima laboramus
                eloquentiam. An eos labore aliquip. Minim iusto detracto eu pri,
                qui ut periculis argumentum ullamcorper, velit habemus tibique
                an eos.
              </p>{" "}
            </div>
          </div>
        </div>
      </div>

      <div className="p-5 bg-primary shadow-sm my-5 rounded-3 position-relative">
        {/* <img src="images/Group 55611577.png"/> */}
        <div
          className="rounded-circle position-absolute"
          style={{
            height: "40px",
            width: "40px",
            backgroundColor: "#96D38C",
            marginLeft: "-65px",
          }}
        ></div>
        <div className="d-flex justify-content-center">
          <div
            className=" rounded-circle position-absolute"
            style={{ height: "130px", width: "130px", marginTop: "-105px" }}
          >
            <img
              src="images/Group 55611474.png"
              className="position-relative"
              style={{ height: "130px", width: "130px", objectFit: "cover" }}
            />
          </div>
          <div
            className=" rounded-circle position-absolute"
            style={{
              height: "100px",
              width: "100px",
              marginLeft: "122px",
              marginTop: "-93px",
            }}
          >
            <img
              src="images/Group 55611472 (2).png"
              className="position-relative"
              style={{ height: "100px", width: "100px", objectFit: "cover" }}
            />
          </div>
          <div
            className=" rounded-circle position-absolute"
            style={{
              height: "90px",
              width: "90px",
              marginRight: "120px",
              marginTop: "-83px",
            }}
          >
            <img
              src="images/Group 55611475.png"
              className="position-relative"
              style={{ height: "80px", width: "80px", objectFit: "cover" }}
            />
          </div>

          <div
            className=" rounded-circle position-absolute"
            style={{
              height: "75px",
              width: "75px",
              marginLeft: "195px",
              marginTop: "-83px",
            }}
          >
            <img
              src="images/Group 55611467.png"
              className="position-relative"
              style={{ height: "75px", width: "75px", objectFit: "cover" }}
            />
          </div>
          <div
            className=" rounded-circle position-absolute"
            style={{
              height: "75px",
              width: "75px",
              marginRight: "206px",
              marginTop: "-83px",
            }}
          >
            <img
              src="images/avril.png"
              className="position-relative"
              style={{ height: "75px", width: "75px", objectFit: "cover" }}
            />
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-center py-4 ">
          <div className="text-center">
            <h1 className="text-white">
              Free Account for Developers, No Cost to join
            </h1>
            <p className="text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <button className="btn btn-light btn-sm px-4 themeColor">
              Join the Community{" "}
            </button>
          </div>
        </div>

        <div
          className="rounded-circle position-absolute"
          style={{
            height: "70px",
            width: "70px",
            backgroundColor: "#FB3E05",
            marginTop: "-8px",
          }}
        ></div>
        <div className="d-flex justify-content-end">
          <div
            className="rounded-circle position-absolute"
            style={{
              height: "50px",
              width: "50px",
              backgroundColor: "#FFC107            ",
              marginTop: "-10px",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Accordian;
