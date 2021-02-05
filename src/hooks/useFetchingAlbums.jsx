import { useState, useEffect } from "react";
import { ITUNES_API } from "../configs/config";

export const useFetchingAlbums = () => {
  const [state, setState] = useState({ albums: [] });
};
