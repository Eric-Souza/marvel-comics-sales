import React, { useState, useEffect } from 'react';

// Component imports

// Function imports
import { getAllComics, getAllChars } from '../services/services';

const MainPage = () => {
    // Loading state
    const [isLoading, setLoading] = useState(true)

    // Comics states
    const [allComics, setAllComics] = useState([])
    const [allChars, setAllChars] = useState([])

    // Renders initial data
    const getData = async () => {
        const comicsResponse = await getAllComics() // Gets all comics
        const charsResponse = await getAllChars() // Gets all characters
        
        console.log("'getAllComics()' response: ", comicsResponse)
        console.log("'getAllChars()' response: ", charsResponse)

        const comics = comicsResponse.data.data.results
        const chars = charsResponse.data.data.results

        setAllComics(comics)
        setAllChars(chars)

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
                    <h3 key={ comic.id }>{ comic.title }</h3>
                ))}

                {allChars.map(char => (
                    <h3 key={ char.id }>{ char.name }</h3>
                ))}
                </div>
            }
        </>
    );
};

export default MainPage;