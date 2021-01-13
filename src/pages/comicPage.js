import React, { useState, useEffect } from 'react';

import { getAllComics } from '../services/services';

const CharPage = () => {
    const [allComics, setAllComics] = useState([]);

    const getData = async () => {
        const res = await getAllComics()

        console.log("'getAllComics()' API response:", res)
        console.log('All comics:', res.data.data.results)

        return setAllComics(res.data.data.results)
    };
    
    useEffect(() => {
        getData()
    }, []);

    return (
        <>
            {allComics.map( comic => (
                <div key={comic.id}> {comic.title} </div>
            ))}
        </>
    );
};

export default CharPage;