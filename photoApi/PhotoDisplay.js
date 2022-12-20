import React from 'react';
import { PhotoApi } from './PhotoApi.js';
import Atom from './Spinner.js';

const PhotoDisplay = () => {
  let images = PhotoApi();

  console.log(images[0]?.urls.raw);

  return (
    <>
      {isLoading && <Atom size='200' color='#54a8f1' animationDuration='700' />}

      {Object.keys(images).length > 0 ? (
        <ul
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            margin: '10px',
          }}
        >
          {images?.map((image, index) => (
            <li key={index}>
              <img
                src={image?.urls.raw}
                alt={image?.alt}
                style={{
                  width: '180px',
                  heigh: 'auto',
                  // aspectRatio: '16/9',
                }}
              />
            </li>
          ))}
        </ul>
      ) : (
        <h2>Images must load first</h2>
      )}
    </>
  );
};

export default PhotoDisplay;
