import React, { useEffect, useState } from "react";

import { useFetchingAlbums } from "../hooks/useFetchingAlbums";

import AlbumsGrid from "../components/AlbumsGrid";
import AlbumCard from "../components/AlbumCard";
import LoadMoreBtn from "../components/elements/LoadMoreBtn";
import Spinner from "../components/elements/Spinner/Spinner";
import Footer from "../components/Footer";

const TopAlbums = () => {
  const visibleQuantity = 20;
  const [{ state, loading, error }, fetchAlbums] = useFetchingAlbums();
  const [search, setSearch] = useState("");
  const [visible, setVisible] = useState(visibleQuantity);
  const [isReversed, setIsReversed] = useState(false);

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

  if (error) return <div>Something went wrong!</div>;

  return (
    <>
      <button
        className="text-center mt-2"
        onClick={() => setIsReversed(!isReversed)}
      >
        Reverse
      </button>
      <AlbumsGrid header="Top 100 Albums" callback={word => setSearch(word)}>
        {!isReversed ? (
          <>
            {showAlbums.slice(0, visible).map(album => (
              <AlbumCard
                key={album.id.attributes["im:id"]}
                album={album}
                index={state.albums.indexOf(album)}
              />
            ))}
          </>
        ) : (
          <>
            {showAlbums
              .reverse()
              .slice(0, visible)
              .map(album => (
                <AlbumCard
                  key={album.id.attributes["im:id"]}
                  album={album}
                  index={state.albums.indexOf(album)}
                />
              ))}
          </>
        )}
      </AlbumsGrid>
      {loading && <Spinner />}
      {visible < showAlbums.length && !loading && (
        <LoadMoreBtn text={`Load more albums`} callback={loadMoreAlbums} />
      )}
      <Footer />
    </>
  );
};

export default TopAlbums;
