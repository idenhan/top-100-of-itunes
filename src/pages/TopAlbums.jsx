import React, { useState } from "react";

import { useFetchingAlbums } from "../hooks/useFetchingAlbums";

const TopAlbums = () => {
  const [{ state, laoding, error }, fetchAlbums] = useFetchingAlbums();

  const show = state.albums;

  const showButton = () => {
    console.log(show);
  };

  return (
    <>
      <button onClick={showButton}>Try</button>
    </>
  );
};

export default TopAlbums;
