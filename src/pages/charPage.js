import React, { useState, useEffect } from 'react';

// Function imports
import { getAllChars } from '../services/services';

const CharPage = () => {
    // Pagination states
    const [offsetIncrementor, setIncrementor] = useState(0);
    const [offsetDecrementor, setDecrementor] = useState(0);

    // Chars state
    const [allChars, setAllChars] = useState([]);

    var offset = 0 + offsetIncrementor + offsetDecrementor;

    const getData = async offset => {
        const res = await getAllChars(offset)

        console.log('API response:', res)
        console.log('All characters:', res.data.data.results)

        return setAllChars(res.data.data.results)
    };
    
    useEffect(() => {
        getData()
    }, []);

    return (
        <>
        <div>
            {allChars.map( char => (
                <div key={char.id}> {char.name} </div>
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