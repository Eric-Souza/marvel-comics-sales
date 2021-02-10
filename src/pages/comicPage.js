import React, { useState, useEffect } from 'react';

// Function imports
import { getAllComics } from '../services/services';

const CharPage = () => {
    // Pagination states
    const [offsetIncrementor, setIncrementor] = useState(0);
    const [offsetDecrementor, setDecrementor] = useState(0);

    // Comics state
    const [allComics, setAllComics] = useState([]);

    var offset = 0 + offsetIncrementor + offsetDecrementor;

    const getData = async offset => {
        const res = await getAllComics(offset)

        console.log('API response:', res)
        console.log('All comics:', res.data.data.results)

        return setAllComics(res.data.data.results)
    };
    
    useEffect(() => {
        getData()
    }, []);

    return (
        <>
        <div>
            {allComics.map( comic => (
                <div key={comic.id}> {comic.name} </div>
            ))}

            {/* Prev page button */}
            <button 
                onClick={e => {
                    e.preventDefault()

                    offset -= 20
                    setDecrementor(offsetDecrementor - 20)

                    return getData(offset)
                }}
            > 
                Prev Page
            </button>

            {/* Next page button */}
            <button 
                onClick={e => {
                    e.preventDefault()

                    offset += 20
                    setIncrementor(offsetIncrementor + 20)

                    return getData(offset)
                }}
            > 
                Next Page
            </button>
        </div>
        </>
    );
};

export default CharPage;