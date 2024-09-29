import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Outlet } from 'react-router-dom';

const ImagePage = ({ imageId }) => {
  const [images, setImages] = useState([]);

  const fetchMangaImages = async () => {
    const options = {
      method: 'GET',
      url: 'https://mangaverse-api.p.rapidapi.com/manga/image',
      params: {
        id: imageId,
      },
      headers: {
        'x-rapidapi-key': 'b091830876mshdab95a55f052181p110829jsn923c63645bf2',
        'x-rapidapi-host': 'mangaverse-api.p.rapidapi.com',
      },
    };

    try {
      const response = await axios.request(options);
      setImages(response.data.data);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  useEffect(() => {
    fetchMangaImages();
  }, [imageId]);

  return (
    <div className='relative right-[-20vw]'>
      {images.length > 0 ? (
        images.map((image) => (
          //style it
          <img key={image.id} src={image.link} alt={`Manga ${image.index}`} />
        ))
      ) : (
        <p>Loading images...</p>
      )}
      <Outlet />
    </div>
  );
};

export default ImagePage;
