import React, { useState, useEffect } from 'react';

// Function imports
import { getAllComics } from '../services/services';

const MainPage = () => {
    // Loading state
    const [isLoading, setLoading] = useState(true)

    // Comics states
    const [allComics, setAllComics] = useState([])

    // Renders initial data
    const getData = async () => {
        const response = await getAllComics()
        
        console.log("'getAllComics()' response: ", response)
        const comics = response.data.data.results

        setAllComics(comics)
        setLoading(false)
    };

    // Configures component mounting
    useEffect(() => {
        getData()
    }, []);

    return (
        <>
            {isLoading === true ? <h3> Loading... </h3> :
                <div>
                    {allComics.map(comic => (
                        <h3 key={comic.id}> {comic.title} </h3>
                    ))}
                </div>
            }
        </>
    );
};

export default MainPage;