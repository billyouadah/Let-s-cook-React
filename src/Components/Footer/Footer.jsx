import React from "react";
import footer from "../../assets/footer.svg";

function Footer() {
  return (
    <div>
      <div style={{ display: "flex", gap: "20px" }}>
        <img src={footer} style={{ width: "100px", height: "100px" }} alt="image footer" />
      </div>
      <footer className="audiowide-regular"
        style={{
          width: "100%",
          marginTop: "16px",
          backgroundColor: "orange",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100px",
        }}>
        <p>© Copyright 2024 Let's Cook</p>
      </footer>
    </div>
  );
}

export default Footer;