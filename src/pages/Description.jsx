import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Outlet } from 'react-router-dom';
import Details from '../components/Details';

const Description = ({ descriptionId }) => {
    const [details, setDetails] = useState({})
    const [error, setError] = useState(null);

    const fetchDetails = async () => {
        const options = {
            method: 'GET',
            url: 'https://mangaverse-api.p.rapidapi.com/manga',
            params: {
                id: descriptionId
            },
            headers: {
                'x-rapidapi-key': 'b091830876mshdab95a55f052181p110829jsn923c63645bf2',
                'x-rapidapi-host': 'mangaverse-api.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            setDetails(response.data.data);
        } catch (error) {
            setError(error);
        }

        console.log(details);
        
    }

    useEffect(() => {
        fetchDetails();
    }, []);



    return (
        <div>
            {error ? (
                <p>Error: {error.message}</p>
            ) : (
                <div >
                    <Details 
                        thumb ={details.thumb} 
                        title = {details.title}
                        status = {details.status}
                        summary = {details.summary}
                        authors = {details.authors}
                        genres = {details.genres}
                        type = {details.type}
                        chapters = {details.total_chapter}
                    />
                </div>
            )}
            <Outlet />
        </div>
    );
}

export default Description;
