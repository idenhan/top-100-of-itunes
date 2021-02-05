import React, { useState } from "react";

import { useFetchingAlbums } from "../hooks/useFetchingAlbums";

import AlbumsGrid from "../components/AlbumsGrid";

const TopAlbums = () => {
  const visibleQuantity = 20;
  const [{ state, laoding, error }, fetchAlbums] = useFetchingAlbums();
  const [search, setSearch] = useState("");
  const [visible, setVisible] = useState(visibleQuantity);

  const showAlbums = state.albums.filter(album => {
    return (
      album["im:artist"].label.toLowerCase().indexOf(search.toLowerCase()) !==
        -1 ||
      album["im:name"].label.toLowerCase().indexOf(search.toLowerCase()) !== -1
    );
  });

  const loadMoreAlbums = () => {
    setVisible(prev => prev + visibleQuantity);
  };

  return (
    <>
      <AlbumsGrid
        header="Top 100 Albums"
        callback={word => setSearch(word)}
      ></AlbumsGrid>
    </>
  );
};

export default TopAlbums;
