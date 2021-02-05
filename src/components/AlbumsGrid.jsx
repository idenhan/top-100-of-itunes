import React, { useState, useRef } from "react";
import searchIcon from "../assets/images/searchIcon.svg";

const AlbumsGrid = ({ header, callback, children }) => {
  const [state, setState] = useState("");
  const timeOut = useRef(null);

  const searchAlbum = event => {
    const { value } = event.target;

    clearTimeout(timeOut.current);
    setState(value);

    timeOut.current = setTimeout(() => {
      callback(value);
    }, 500);
  };

  return (
    <section className="albums-grid container">
      <div className="albums-grid-headline section-headline">
        <h2>{header}</h2>
        <div className="albums-grid-headline-search">
          <input
            type="text"
            className="search-input"
            placeholder="Search"
            onChange={searchAlbum}
            value={state}
          />
          <img src={searchIcon} alt="Search" />
        </div>
      </div>
      <ul className="albums-grid-list">{children}</ul>
    </section>
  );
};

export default AlbumsGrid;
