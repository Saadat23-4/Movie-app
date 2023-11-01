import React, { useEffect } from "react";
import { MovieListing } from "../MovieListing/MovieListing";
import movieApi from "../../common/api/MovieApi";
import { APIKey } from "../../common/api/MovieApiKey";
import { useDispatch } from "react-redux";
import { addMovies } from "../../features/movies/movieSlice";

export const Home = () => {
  const movieText = "Harry";
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await movieApi
        .get(`/?apiKey=${APIKey}&s=${movieText}&type=movie`)
        .catch((err) => {
          console.log("Error:", err);
        });
      dispatch(addMovies(response.data));
    };
    fetchMovies();
  }, []);
  return (
    <div>
      <div className="banner"></div>
      <div>
        <MovieListing />
      </div>
    </div>
  );
};
