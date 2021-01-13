import React, { useState, useEffect } from 'react';

import { getAllChars } from '../services/services';

const CharPage = () => {
    const [allChars, setAllChars] = useState([]);

    const getData = async () => {
        const res = await getAllChars()

        console.log("'getAllChars()' API response:", res)
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
        </div>
        </>
    );
};

export default CharPage;