import React from "react";
import Card from "./Card";
import "../styles/grid.css";

const Grid = ({ movie }) => {
  return movie === [] || movie === null || movie === undefined ? (
    <h1 className="is-size-1 has-text-centered mt-6 ">
      No se encontraron resultados
    </h1>
  ) : (
    <ul className="grid">
      {movie.map((m, i) => (
        <Card program={m} key={i} />
      ))}
    </ul>
  );
};
export default Grid;
