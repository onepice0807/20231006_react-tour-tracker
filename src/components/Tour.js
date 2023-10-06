import React from "react";

const Tour = ({ firstImage, title, addr }) => {
  return (
    <div className="card" style={{ width: "400px" }}>
      <img
        className="card-img-top"
        src={
          firstImage === ""
            ? "https://img.icons8.com/color/48/no-image.png"
            : firstImage
        }
        alt="Card image"
        style={{ width: "100%" }}
      />
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        <p className="card-text">{addr}</p>
        <a href="#" className="btn btn-primary">
          See Profile
        </a>
      </div>
    </div>
  );
};

Tour.defaultProps = {
  firstImage: "https://img.icons8.com/color/48/no-image.png",
  title: "",
  addr: "",
};

export default Tour;
