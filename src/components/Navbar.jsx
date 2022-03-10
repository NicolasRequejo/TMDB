import React, { useContext, useState } from "react";
import { SearchContext } from "../context/SearchContext";
import { Link, useNavigate } from "react-router-dom";
import { LogContext } from "../context/LogContext";
import axios from "axios";

const Navbar = () => {
  const [searchInput, setSearchInput] = useState("");
  const { user, logOut } = useContext(LogContext);
  const { search, setSearch } = useContext(SearchContext);
  const navigate = useNavigate();

  const searchOnChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://api.themoviedb.org/3/search/multi?api_key=63aa754d735da83b25e4202e55b48f0d&language=es&query=${searchInput}`
      )
      .then((data) => setSearch(data.data.results))
      .then(() => {
        navigate("/search");
      });
    setSearchInput("");
  };

  return (
    <nav
      className="navbar is-dark"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <p className="has-text-centered is-size-3">NRMovies</p>

        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          {user ? (
            <>
              <Link to="/movie" className="navbar-item">
                <p>Peliculas</p>
              </Link>
              <Link to="/tv" className="navbar-item">
                <p>Series/Tv</p>
              </Link>
              <Link to="/favorites" className="navbar-item">
                <p>Mis Favorites</p>
              </Link>
              <form onSubmit={handleSubmit}>
                <div className="panel-block">
                  <p className="control has-icons-left">
                    <input
                      className="input is-info"
                      type="text"
                      placeholder="Buscar peliculas o series..."
                      value={searchInput}
                      onChange={searchOnChange}
                    />
                    <span className="icon is-left">
                      <i className="fas fa-search" aria-hidden="true"></i>
                    </span>
                  </p>
                </div>
              </form>
            </>
          ) : (
            ""
          )}
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              {user ? (
                <>
                  <p className="has-text-centered is-size-4 mr-2">
                    {user.name}
                  </p>

                  <Link
                    to="/"
                    className="button is-light"
                    onClick={() => logOut()}
                  >
                    Cerrar sesion
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/register" className="button is-primary mr-2">
                    <strong>Registrarse</strong>
                  </Link>
                  <Link to="/login" className="button is-light">
                    Ingresar
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
