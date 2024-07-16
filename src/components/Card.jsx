import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Card = ({ id, title, thumb, setDescriptionId }) => {
  return (
    <div className="max-w-[12rem] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-72 flex flex-col">
      <a href="#">
        <img className="rounded-t-lg h-[12rem] w-full object-cover" src={thumb} alt="Profile" />
      </a>
      <div className="p-2 flex flex-col items-center justify-between flex-grow">
        <a href="#">
          <h5 className="mb-2 text-xs font-bold tracking-tight text-gray-900 dark:text-white text-center">{title}</h5>
        </a>
        <Link to='/description'>
          <button onClick={() => setDescriptionId(id)} className="inline-flex items-center px-2 py-1 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-2">
            Read
          </button>
        </Link> 
      </div>
      <Outlet />
    </div>
  );
}

export default Card;
