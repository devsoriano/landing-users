import { useState, useEffect } from "react";
import { getPhotos } from "./../api/user";

export const useGetPhotos = (albumId: number) => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    (async () => {
      const listPhotos = await getPhotos(albumId);
      setPhotos(listPhotos);
    })();
  }, []);

  return {
    photos,
  };
};
