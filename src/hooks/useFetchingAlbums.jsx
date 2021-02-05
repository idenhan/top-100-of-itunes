import { useState, useEffect } from "react";
import { ITUNES_API } from "../configs/config";

export const useFetchingAlbums = () => {
  const [state, setState] = useState({ albums: [] });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchAlbums = async endpoint => {
    setError(false);
    setLoading(true);

    try {
      const result = await (await fetch(endpoint)).json();

      setState(prev => ({
        ...prev,
        albums: [...result.feed.entry],
      }));
    } catch (error) {
      setError(true);
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchAlbums(ITUNES_API);
  }, []);

  return [{ state, loading, error }, fetchAlbums];
};
