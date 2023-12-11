import React, { useEffect } from "react";
import { MovieListing } from "../MovieListing/MovieListing";
import { useDispatch } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
  fetchAsyncMovieOrShowDetail,
} from "../../features/movies/movieSlice";

export const Home = () => {
  const dispatch = useDispatch();
  const movieText = "Harry";
  const showText = "Friends";
  useEffect(() => {
    dispatch(fetchAsyncMovies(movieText));
    dispatch(fetchAsyncShows(showText));
    dispatch(fetchAsyncMovieOrShowDetail());
  }, [dispatch]);
  return (
    <div>
      <div className="banner"></div>
      <div>
        <MovieListing />
      </div>
    </div>
  );
};
