import React from 'react';
import shigureUiDance from '/shigureUiDance.gif';

const Home = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <h1 className='text-3xl font-semibold text-center mb-2 text-gray-100 animate-bounce'>Welcome to Our Anime App</h1>
      <img src={shigureUiDance} alt="Shigure Ui Dance" className='w-1/2 h-auto rounded-lg shadow-lg ' />
    </div>
  );
}

export default Home;
