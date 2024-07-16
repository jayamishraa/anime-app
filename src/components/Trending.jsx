import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';
import Search from './Search';

const Trending = ({setDescriptionId}) => {
  const [mangaData, setMangaData] = useState([]);
  const [error, setError] = useState(null);

  const fetchMangaData = async () => {
    const options = {
      method: 'GET',
      url: 'https://mangaverse-api.p.rapidapi.com/manga/fetch',
      params: {
        page: '1',
        genres: 'Harem,Fantasy',
        nsfw: 'true',
        type: 'all'
      },
      headers: {
        'X-RapidAPI-Key': 'b091830876mshdab95a55f052181p110829jsn923c63645bf2',
        'X-RapidAPI-Host': 'mangaverse-api.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      setMangaData(response.data.data);
      // console.log(response.data.data);
    } catch (error) {
      setError(error);
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMangaData();
  }, []); 

  return (
    <div>

      <Search />
      
      {error ? (  
        <p>Error: {error.message}</p>
      ) : ( 
        <div className="grid grid-cols-4 md:grid-cols-6 gap-4"> 
          {mangaData.map((manga, index) => (
            <div key={index}>
              <Card 
                id = {manga.id}
                title={manga.title} 
                thumb={manga.thumb}
                setDescriptionId={setDescriptionId}
              />
            </div>
          ))}
        </div> 
      )}
    </div>
  );
};

export default Trending;
