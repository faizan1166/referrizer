import React from "react";

function Marketplace() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        backgroundSize: "cover", // Adjusted property
        backgroundImage: "url(images/marketplace.png)",
        backgroundRepeat: "no-repeat",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // color: "white",
        textAlign: "center",
      }}
    >
      <div className="p-3">
        <h6 className="themeColor">App Partners</h6>
        <h1 style={{ fontSize: "2em" }}>Join our thriving App Marketplace</h1>
        <p className="text-muted">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel aliquam,
          massa nec hendrerit laoreet.
        </p>
      </div>
    </div>
  );
}

export default Marketplace;
