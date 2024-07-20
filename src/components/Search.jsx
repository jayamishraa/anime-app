import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';

const Search = () => {
  const [search, setSearch] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [getSearchData, setSearchData] = useState([]);
  const [error, setError] = useState(null);

  const fetchSearchData = async () => {
    if (searchTerm) {
      const options = {
        method: 'GET',
        url: 'https://mangaverse-api.p.rapidapi.com/manga/search',
        params: {
          text: searchTerm,
          nsfw: 'true',
          type: 'all'
        },
        headers: {
          'x-rapidapi-key': 'b091830876mshdab95a55f052181p110829jsn923c63645bf2',
          'x-rapidapi-host': 'mangaverse-api.p.rapidapi.com'
        }
      }
    
      try {
        const response = await axios.request(options);
        setSearchData(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        setError(error);
        console.error('Error fetching data:', error);
      }
    }
  }

  useEffect(() => {
    fetchSearchData();
  }, [searchTerm]);

  return (
    <div className='mb-6'>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search..."
        className="p-2 border-b border-gray-300 focus:outline-none focus:border-blue-500"
      />
      <button onClick={() => setSearchTerm(search)}>Search</button>
      {error && <div>Error: {error.message}</div>}
      <div className="grid grid-cols-4 md:grid-cols-6 gap-4"> 
        {getSearchData.map((manga, index) => (
          <div key={index} className='mt-6'>
            <Card 
              title={manga.title} 
              thumb={manga.thumb}
            />
          </div>
        ))}
      </div> 
    </div>
  );
};

export default Search;
