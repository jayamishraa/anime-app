import React, { useState, useEffect } from 'react';
import loadingAnime from '/loadingAnime.gif';
import Chapters from './Chapters';

const Details = ({ thumb, title, status, summary, authors, genres, type, total_chapter, setImageId, descriptionId }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isChapter, setIsChapter] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500); 
  }, []);

  return (
    <div className='flex items-center justify-center min-h-screen'>
      {isLoading ? (
        <div className='flex items-center justify-center'>
          <img src={loadingAnime} alt="Loading" className='w-32 h-32' />
        </div>
      ) : (
        <div className='flex flex-row gap-5 p-4 bg-white shadow-md rounded-lg'>
          <div className='w-64'>
            <img src={thumb} alt={title} className='w-full h-full object-cover rounded-lg' />
          </div>
          <div className='flex flex-col justify-center space-y-2'>
            <h2 className='text-xl font-bold'>Title: {title}</h2>
            <p>Status: {status}</p>
            <p>Summary: {summary}</p>
            <p>Authors: {authors}</p>
            <p>Genres: {genres}</p>
            <p>Country: {type}</p>
            <p>Chapters: {total_chapter}</p>
            <button 
              onClick={() => setIsChapter(!isChapter)}
              className='mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700'
            >
              {isChapter ? 'Hide Chapters' : 'Show Chapters'}
            </button>
            {isChapter && <Chapters setImageId={setImageId} descriptionId={descriptionId} />}
          </div>
        </div>
      )}
    </div>
  );
}

export default Details;
