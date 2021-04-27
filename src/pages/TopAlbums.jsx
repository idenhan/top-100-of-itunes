import React, { useState } from "react";

import { useFetchingAlbums } from "../hooks/useFetchingAlbums";

import AlbumsGrid from "../components/AlbumsGrid";
import AlbumCard from "../components/AlbumCard";
import LoadMoreBtn from "../components/elements/LoadMoreBtn";
import Spinner from "../components/elements/Spinner/Spinner";
import Footer from "../components/Footer";
import SortBtn from "../components/elements/SortBtn";

const TopAlbums = () => {
  const visibleQuantity = 20;
  const [{ state, loading, error }] = useFetchingAlbums();
  const [search, setSearch] = useState("");
  const [visible, setVisible] = useState(visibleQuantity);
  const [isReversed, setIsReversed] = useState(false);
  const [isByName, setIsByName] = useState(false);
  const [data, setData] = useState([]);

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

  const reverseBtn = () => {
    setIsReversed(!isReversed);
  };

  const nameBtn = () => {
    setIsByName(!isByName);
    let temp = [];
    temp.push(state.albums);
    console.log("temp", temp);
    temp[0].sort((a, b) => (a["im:name"].label > b["im:name"].label ? 1 : -1));
    console.log("after temp", temp);

    return (
      <>
        {showAlbums.slice(0, visible).map(album => (
          <AlbumCard
            key={album.id.attributes["im:id"]}
            album={album}
            index={temp.indexOf(album)}
          />
        ))}
      </>
    );
  };

  // const dateBtn = () => {}

  const showData = () => {
    if (!isReversed && !isByName) {
      return (
        <>
          {showAlbums.slice(0, visible).map(album => (
            <AlbumCard
              key={album.id.attributes["im:id"]}
              album={album}
              index={state.albums.indexOf(album)}
            />
          ))}
        </>
      );
    } else if (isByName) {
      // eslint-disable-next-line no-lone-blocks
      {
        nameBtn();
      }
    } else {
      return (
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
      );
    }
  };

  console.log(state);
  if (error) return <div>Something went wrong!</div>;

  return (
    <>
      <section className="top-albums container">
        <div className="top-albums-right section-headline">
          <div className="top-albums-right-btn">
            <SortBtn text={`Reverse`} callback={reverseBtn} />
            {/* <SortBtn text={`By Name`} callback={nameBtn} />
            <SortBtn text={`By Date`} callback={reverseBtn} /> */}
          </div>
        </div>
      </section>
      <AlbumsGrid header="Top 100 Albums" callback={word => setSearch(word)}>
        {showData()}
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
