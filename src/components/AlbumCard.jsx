import React from "react";
import { Link } from "react-router-dom";
import { toTitleCase, truncateWithEllipses } from "../helper";

const AlbumCard = ({ album, callback, index }) => {
  const albumId = album.id.attributes["im:id"];
  const albumName = truncateWithEllipses(
    toTitleCase(album["im:name"].label),
    45
  );
  const albumArtist = album["im:artist"].label;
  const albumImage = album["im:image"][2].label;
  const topNumber = index + 1;

  return (
    <li className="album-card">
      <Link
        to={{
          pathname: `/top-100-of-itunes/album/${albumId}`,
          state: {
            album,
            topNumber,
          },
        }}
      >
        <div className="album-card__mobile-link" />
      </Link>
      <div
        className="album-card__thumbnail"
        style={{ backgroundImage: `url(${albumImage})` }}
      ></div>
      <h3 className="album-card__title">{albumName}</h3>
      <p className="album-card__artist">{albumArtist}</p>
      <div className="album-card__overlay" />
      <p className="album-card__overlay-number">{topNumber}</p>
      <Link
        to={{
          pathname: `/top-100-of-itunes/album/${albumId}`,
          state: {
            album,
            topNumber,
          },
        }}
      >
        <span className="album-card__overlay-rect">
          <p>See album</p>
        </span>
      </Link>
      <span className="album-card__overlay-shadow" />
    </li>
  );
};

export default AlbumCard;
