import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const PhotoApi = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [dataApi, setDataApi] = useState({});

  const count = 1;
  const THUMBNAIL_WIDTH = 200;
  const THUMBNAIL_HEIGHT = 200;
  const SEARCH_QUERY = 'Siamese cats';

  useEffect(() => {
    setIsLoading(true);

    axios
      .get(
        `https://api.unsplash.com/search?&query=${SEARCH_QUERY}&client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}&h=${THUMBNAIL_HEIGHT}&w=${THUMBNAIL_WIDTH}`
      )
      .then((data) => {
        setDataApi(data.data.photos.results);
      });
  }, [count]);

  setIsLoading(false);

  return dataApi;
};
