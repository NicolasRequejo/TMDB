import axios from "axios";
import React, { createContext, useState } from "react";

const initialState = {
  user: null, // iniciamos el User como null
  isAuthenticate: false,
  togleAuth: () => {},
};

export const LogContext = createContext(initialState);

const LogContextProvider = ({ children }) => {
  const [isLoged, setIsLoged] = useState({
    user: null,
    isAuthenticate: false,
  });

  const logOut = () => {
    axios.post("/user/logout").then(() => {
      setIsLoged({ user: null, isAuthenticated: false });
    });
  };

  const isFavorite = (favorit) => {
    isLoged.user.favorite.push(favorit);
    setIsLoged({ user: isLoged.user, isAuthenticate: isLoged.isAuthenticate });
  };

  const favoriteDelete = (id) => {
    isLoged.user.favorite = isLoged.user.favorite.filter(
      (e) => e.movieId !== id
    );
    console.log(isLoged.user.favorite);
    setIsLoged({ user: isLoged.user, isAuthenticate: isLoged.isAuthenticate });
  };

  const togleAuth = (user) => {
    setIsLoged({
      user: user,
      isAuthenticate: !isLoged.isAuthenticate,
    });
  };

  return (
    <LogContext.Provider
      value={{ ...isLoged, togleAuth, logOut, isFavorite, favoriteDelete }}
    >
      {children}
    </LogContext.Provider>
  );
};

export default LogContextProvider;
