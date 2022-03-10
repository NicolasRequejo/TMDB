import React, { useEffect, useContext } from "react";
import { useMatch } from "react-router";
import "../styles/card.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { LogContext } from "../context/LogContext";

const Card = ({ program }) => {
  const movie = useMatch("/movie");
  const tv = useMatch("/tv");
  const searching = useMatch("/search");
  const favorite = useMatch("/favorites");
  const { user, isFavorite, favoriteDelete } = useContext(LogContext);

  let condId = favorite ? program.movieId : program.id;

  let movieType = program.media_type;

  let path = "";
  if (movie) {
    path = `/movie/${condId}`;
    movieType = "movie";
  } else if (searching) {
    path = `/${program.media_type}/${condId}`;
  } else if (favorite) {
    path = `/${program.media_type}/${condId}`;
  } else {
    path = `/tv/${condId}`;
    movieType = "tv";
  }

  const favoriteHandler = () => {
    user.favorite.find((element) => element.movieId === condId)
      ? axios
          .delete("/favorite", {
            data: { movieId: condId },
          })
          .then(() => {
            favoriteDelete(condId);
          })
      : axios
          .post("/favorite", {
            title: program.title || program.name,
            movieId: condId,
            overview: program.overview,
            poster_path: program.poster_path,
            media_type: movieType,
          })
          .then((data) => {
            isFavorite(data.data);
          });
  };
  return (
    <li className="card">
      <Link to={`${path}`}>
        <img
          src={`https://image.tmdb.org/t/p/w300${program.poster_path}`}
          alt={program.title || program.name}
          className="cardImage"
          width={270}
          height={345}
        />
      </Link>
      <h3>{program.title || program.name}</h3>
      <div className="fav">
        <div className="fav-bottom">
          {user ? (
            <i
              className={
                user.favorite.find(
                  (element) => element.movieId === program.id || program.movieId
                ) === undefined
                  ? "fa fa-heart "
                  : "fa fa-heart has-text-danger "
              }
              onClick={favoriteHandler}
            ></i>
          ) : (
            ""
          )}
        </div>
      </div>
    </li>
  );
};

export default Card;
