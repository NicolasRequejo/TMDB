import React, { useEffect, useContext, useState } from "react";
import Grid from "./commons/Grid";
import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import Login from "./components/Login";
import axios from "axios";
import { LogContext } from "./context/LogContext";
import { SearchContext } from "./context/SearchContext";
import CardDetail from "./components/CardDetail";
import Home from "./components/Home";

const App = () => {
  const [movie, setMovie] = useState([]);
  const [serie, setSerie] = useState([]);

  const { isLoged, togleAuth, user, logOut } = useContext(LogContext);
  const { search } = useContext(SearchContext);

  useEffect(() => {
    axios.get("/movies").then((data) => setMovie(data.data));

    axios.get("/movies/tv").then((data) => setSerie(data.data));

    axios
      .get("/user/me")
      .then((res) => res.data)
      .then((user) => {
        console.log(`Welcome Again ${user.email}`);
        togleAuth(user);
      });
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie" element={<Grid movie={movie} />} />
        <Route path="/:movie/:id" element={<CardDetail />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/tv" element={<Grid movie={serie} />} />
        <Route path="/search" element={<Grid movie={search} />} />

        {user ? (
          <Route path="/favorites" element={<Grid movie={user.favorite} />} />
        ) : (
          ""
        )}
      </Routes>
    </>
  );
};

export default App;
