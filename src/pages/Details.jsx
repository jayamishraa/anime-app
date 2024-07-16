import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Outlet } from 'react-router-dom';

const Details = ({ descriptionId }) => {
    const [details, setDetails] = useState([])
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
            console.log(response.data.data);
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
                <div className="grid grid-cols-4 md:grid-cols-6 gap-4">
                    {descriptionId}
                </div>
            )}
            <Outlet />
        </div>
    );
}

export default Details;
