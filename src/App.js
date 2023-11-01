import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "../src/components/Home/Home";
import { Footer } from "../src/components/Footer/Footer";
import { Header } from "../src/components/Header/Header";
import { MovieDetails } from "../src/components/MovieDetails/MovieDetails";
import { PageNotFound } from "../src/components/PageNotFound/PageNotFound";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/movie/:imdbID" element={<MovieDetails />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
