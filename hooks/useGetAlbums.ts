import { useState, useEffect } from "react";
import { getAlbums } from "./../api/user";

export const useGetAlbums = (userId: number) => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    (async () => {
      const listAlbums = await getAlbums(userId);
      setAlbums(listAlbums);
    })();
  }, []);

  return {
    albums,
  };
};
