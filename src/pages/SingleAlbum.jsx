import React from "react";
import { Link } from "react-router-dom";

const SingleAlbum = props => {
  const { album, topNumber } = props.location.state;
  const albumId = album.id.attributes["im:id"];
  const albumName = "";
};

export default SingleAlbum;
