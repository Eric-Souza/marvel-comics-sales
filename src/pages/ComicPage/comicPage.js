import React, { useState, useEffect } from 'react'

// Component imports
import Spinner from 'react-bootstrap/Spinner'

// Function imports
import { getAllComics } from '../../services/services'

const CharPage = () => {
    // Loading state
    const [isLoading, setLoading] = useState(true)

    // Pagination states
    const [pageCount, setPage] = useState(1)
    const [offsetIncrementor, setIncrementor] = useState(0)
    const [offsetDecrementor, setDecrementor] = useState(0)

    // Comics state
    const [allComics, setAllComics] = useState([])

    var offset = 0 + offsetIncrementor + offsetDecrementor

    const getData = async offset => {
        const res = await getAllComics(offset)

        console.log('API response:', res)
        console.log('All comics:', res.data.data.results)

        setAllComics(res.data.data.results)
        return setLoading(false)
    }
    
    useEffect(() => {
        getData()
    }, [])

    return (
        <div id='charPage'>
        {isLoading === true ?
            <div id='loadingIcon'>
                <Spinner animation="border" role="status" variant="danger" />
            </div>
        :      
            <div>
                <div id='navigation'>
                    <button onClick={() => window.location.href='/main'}> Home </button>
                    <button onClick={() => window.location.href='/characters'} > Characters </button>
                    <button disabled style={{color: 'white'}}> Comics </button>
                </div>

                <div id='comicsList'>
                    {allComics.map( comic => (
                        <div key={comic.id}> {comic.title} </div>
                    ))}
                </div>

                <div id='buttons'>
                    {/* Prev page button */}
                    <button disabled={pageCount === 1 ? true : false}
                        onClick={async e => {
                            e.preventDefault()
                            setLoading(true)

                            offset -= 10
                            setDecrementor(offsetDecrementor - 10)
                            setPage(pageCount - 1)

                            await getData(offset)
                            return setLoading(false)
                        }}
                    > 
                        Previous Page
                    </button>

                    {/* Next page button */}
                    <button
                        onClick={async e => {
                            e.preventDefault()
                            setLoading(true)

                            offset += 10
                            setIncrementor(offsetIncrementor + 10)
                            setPage(pageCount + 1)

                            await getData(offset)
                            return setLoading(false)
                        }}
                    > 
                        Next Page
                    </button>
                </div>
            </div>
        }
        </div>
    )
}

export default CharPage