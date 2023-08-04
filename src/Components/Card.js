import React, { useState, useEffect } from "react";
import axios from "../axios";
import "./Card.css";

const base_url = "https://image.tmdb.org/t/p/original/";

const Card = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // if [], run once when the row loads, and dont run again.
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="card__category">
      <h2 className="movie__Category">{title}</h2>

      <div className="card__container">
        {movies.map((movie) => {
          return (
            <div className="wrapper">
              <img
                className="poster__Image"
                key={movie.id}
                src={`${base_url}${movie.poster_path}`}
                alt={movie.name}
              />

              <h3>Movies running now</h3>
              <p>{movie.title}</p>
              <p>
                <img
                  src="	https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e9d9ee08987e0ffb064bca_Star.svg"
                  alt=""
                />
                <img
                  src="	https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e9d9ee08987e0ffb064bca_Star.svg"
                  alt=""
                />
                <img
                  src="	https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e9d9ee08987e0ffb064bca_Star.svg"
                  alt=""
                />
                <img
                  src="	https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e9d9ee08987e0ffb064bca_Star.svg"
                  alt=""
                />
                <img
                  src="	https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e9d9ee08987e0ffb064bca_Star.svg"
                  alt=""
                />
              </p>
              <button>Add to Cart</button>
              <div class="text">
                <span class="dollar">$</span>20
              </div>
              <img
                className="add__Tofavourite"
                src="	https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e9df775b939f51a0b22f6d_Icon.svg
"
                alt=""
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
