import React from "react";
import { Link } from "react-router-dom";
import { toTitleCase, getFullYear } from "../helper";

const SingleAlbum = props => {
  const { album, topNumber } = props.location.state;
  const albumName = toTitleCase(album["im:name"].label);
  const albumArtist = album["im:artist"].label;
  const albumImage = album["im:image"][2].label;
  const albumCategory = album.category.attributes.label;
  const albumDate = getFullYear(album["im:releaseDate"].label);
  const albumCount = album["im:itemCount"].label;

  return (
    <section>
      <div className="container wrapper">
        <div className="single-album">
          <div className="row">
            <div className="col-2" />
            <div className="col-sm-6 col-lg-5 col-xl-4">
              <div className="single-album__thumbnail-wrapper">
                <img
                  src={albumImage}
                  alt="Album Cover"
                  className="single-album__thumbnail"
                />
              </div>
            </div>
            <div className="col-sm-6 col-lg-5 col-xl-4">
              <div className="single-album__content">
                <p className="single-album__content-number">{topNumber}</p>
                <h2 className="single-album__content-title">{albumName}</h2>
                <h4 className="single-album__content-artist">{albumArtist}</h4>
                <p className="single-album__content-text">
                  {albumCategory} · {albumDate}
                </p>
                <p className="single-album__content-text">{albumCount} Songs</p>
                <Link to="/">
                  <button type="button" className="button button-dark">
                    &#8592; See all albums
                  </button>
                </Link>
              </div>
            </div>
            <div className="col-2" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleAlbum;
