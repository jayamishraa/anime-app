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
    <div className='min-h-screen flex items-center justify-center'>
      {isLoading ? (
        <div className='flex items-center justify-center h-screen'>
          <img src={loadingAnime} alt="Loading" className='w-32 h-32' />
        </div>
      ) : (
        <div className='flex flex-col items-center w-full h-full'>
          <div className='flex flex-col md:flex-row w-full md:w-[60vw] gap-5 p-4 bg-white shadow-md rounded-lg'>
            <div className='w-full md:w-[20vw]'>
              <img src={thumb} alt={title} className='w-full h-full object-cover rounded-lg' />
            </div>
            <div className='flex w-full md:w-[40vw] flex-col justify-center space-y-2'>
              <h2 className='text-xl font-bold truncate'>Title: {title}</h2>
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
            </div>
          </div>

          {isChapter && (
            <div className='mt-2 w-full md:w-[60vw] p-4 bg-white shadow-md rounded-lg'>
              <Chapters setImageId={setImageId} descriptionId={descriptionId} />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Details;
