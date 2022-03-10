import { Link } from "react-router-dom";
import { useMatch, useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/cardDetail.css";

const CardDetail = () => {
  const { id, movie } = useParams();
  const [card, setCard] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/${movie}/${id}?api_key=63aa754d735da83b25e4202e55b48f0d&language=es`
      )
      .then((data) => setCard(data.data));
  }, [id]);

  return (
    <div>
      <div className="card">
        <div className="card-image pt-6">
          <figure>
            <img
              src={`https://image.tmdb.org/t/p/w300${card.poster_path}`}
              alt="Placeholder image"
              height={"auto"}
              width={400}
            />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-left"></div>
            <div className="media-content">
              <p className="title is-2">Titulo: {card.title || card.name}</p>
            </div>
          </div>

          <div className="content">
            <h4>Descripcion</h4>
            <p>
              {card.overview === ""
                ? "Lo sentimos, descripcion actualmente no disponible"
                : card.overview}
            </p>
            <br />
          </div>
        </div>
        <Link to="/" className="button is-primary mr-2 mb-6">
          <p>Ir a Home</p>
        </Link>
      </div>
    </div>
  );
};

export default CardDetail;
//<p className="subtitle is-6">@johnsmith</p>
