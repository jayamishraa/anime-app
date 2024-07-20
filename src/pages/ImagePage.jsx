import React from 'react'
import axios from 'axios';

const ImagePage = () => {
    const fetchMangaImages = async () => {
        const options = {
          method: 'GET',
          url: 'https://mangaverse-api.p.rapidapi.com/manga/image',
          params: {
            id: '659524e9597f3b00281f070d'
          },
          headers: {
            'x-rapidapi-key': 'b091830876mshdab95a55f052181p110829jsn923c63645bf2',
            'x-rapidapi-host': 'mangaverse-api.p.rapidapi.com'
        }

    }
    try {
        const response = await axios.request(options);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }

  }
  return (
    <div>
      
    </div>
  )
}

export default ImagePage
