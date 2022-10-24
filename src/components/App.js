import React, { useState, useEffect } from "react";
import "../App.css";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import RandomQuote from "./RandomQuote";
import Route from "./Route";
import Header from "./Header";

function App() {
  const [images, setImages] = useState([]);
  const [color, setColor] = useState("#16a085");
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const getColor = () => {
    let colors = [
      "#16a085",
      "#27ae60",
      "#2c3e50",
      "#f39c12",
      "#e74c3c",
      "#9b59b6",
      "#FB6964",
      "#342224",
      "#472E32",
      "#BDBB99",
      "#77B1A9",
      "#73A857",
    ];

    let ranNum = Math.floor(Math.random() * colors.length);
    setColor(colors[ranNum]);
  };

  const getQuotes = () => {
    fetch(
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    )
      .then((res) => res.json())
      .then((data) => {
        let dataQ = data.quotes;
        let ranNum = Math.floor(Math.random() * dataQ.length);
        let ranQ = dataQ[ranNum];
        setQuote(ranQ.quote);
        setAuthor(ranQ.author);
      });
  };

  const NewQuote = () => {
    getQuotes();
    getColor();
  };

  useEffect(() => {
    getQuotes();
    getColor();
  }, []);

  const onSearchSubmit = async (term) => {
    const res = await unsplash.get("/search/photos", {
      params: { query: term, per_page: 20 },
    });
    setImages(res.data.results);
    getColor();
  };

  return (
    <div
      className="min-vw-100 min-vh-100 pt-3"
      style={{ backgroundColor: color }}
    >
      <Header path={window.location.pathname} />
      <Route path="/">
        <RandomQuote
          quote={quote}
          author={author}
          color={color}
          newQuote={NewQuote}
        />
      </Route>
      <Route path="/search-image">
        <div className="container" style={{ marginTop: "50px" }}>
          <SearchBar onSubmit={onSearchSubmit} />
          <ImageList images={images} />
        </div>
      </Route>
    </div>
  );
}

export default App;
