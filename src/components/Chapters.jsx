import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Chapters = ({ setImageId, descriptionId }) => {
    const [chaptersList, setChaptersList] = useState([]);

    const fetchChapters = async () => {
        const options = {
            method: 'GET',
            url: 'https://mangaverse-api.p.rapidapi.com/manga/chapter',
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
            setChaptersList(response.data.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchChapters();
    }, []);

    return (
        <div>
            {chaptersList.map(chapter => (
                <Link to='/chapter' key={chapter.id} onClick={() => setImageId(chapter.id)}>
                    <div className="mt-2 p-4 border rounded-lg bg-gray-100">
                        <p><strong>{chapter.title}</strong></p>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default Chapters;
