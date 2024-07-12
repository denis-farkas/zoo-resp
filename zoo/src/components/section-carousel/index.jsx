import React from "react";
import "./carousel.css";

const Carousel = () => {
  return (
    <div
      id="carouselExampleInterval"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="10000">
          <img
            src="https://www.cerza.com/wp-content/uploads/2021/05/Safaritrain-compress-scaled.jpg"
            className="d-block w-100"
            alt="..."
          ></img>
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img
            src="https://www.zoo-mulhouse.com/wp-content/uploads/2020/08/photo-zoo-express.jpg"
            className="d-block w-100"
            alt="..."
          ></img>
        </div>
        <div className="carousel-item">
          <img
            src="https://i.ytimg.com/vi/EIR722skGFk/maxresdefault.jpg"
            className="d-block w-100"
            alt="..."
          ></img>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
