import React, { useState } from "react";

import { useFetchingAlbums } from "../hooks/useFetchingAlbums";

import AlbumsGrid from "../components/AlbumsGrid";
import AlbumCard from "../components/AlbumCard";
import LoadMoreBtn from "../components/elements/LoadMoreBtn";

const TopAlbums = () => {
  const visibleQuantity = 20;
  const [{ state, loading, error }, fetchAlbums] = useFetchingAlbums();
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
      <AlbumsGrid header="Top 100 Albums" callback={word => setSearch(word)}>
        {showAlbums.slice(0, visible).map(album => (
          <AlbumCard
            key={album.id.attributes["im:id"]}
            album={album}
            index={state.albums.indexOf(album)}
          />
        ))}
      </AlbumsGrid>
      {visible < showAlbums.length && !loading && (
        <LoadMoreBtn text={`Load more albums`} callback={loadMoreAlbums} />
      )}
    </>
  );
};

export default TopAlbums;
