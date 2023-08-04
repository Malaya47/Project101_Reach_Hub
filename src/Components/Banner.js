import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div class="image-container">
      <img
        className="banner__Image"
        src="https://img.freepik.com/premium-vector/banner-online-cinema-with-movie-projector_600765-1167.jpg"
        alt="Image"
      />
      <div class="text-overlay">
        <h2>
          Grab Upto 10% Off On <br />
          Selected Movies
        </h2>
        <button>Buy Now</button>
      </div>
    </div>
  );
};

export default Banner;
