import React, { useState, useEffect } from 'react'

// Style imports
import '../styles/pagesStyling.css'

// Component imports
import Spinner from 'react-bootstrap/Spinner'
import Card from 'react-bootstrap/Card'

// Function imports
import { getAllComics } from '../services/services'

const ComicsPage = () => {
    // Loading state
    const [isLoading, setLoading] = useState(true)

    // Pagination states
    const [pageCount, setPage] = useState(1)
    const [offsetIncrementor, setIncrementor] = useState(0)
    const [offsetDecrementor, setDecrementor] = useState(0)

    // Chars state
    const [allComics, setAllComics] = useState([])

    var offset = 0 + offsetIncrementor + offsetDecrementor

    const getData = async offset => {
        const foundComics = await getAllComics(offset)

        console.log('All comics:', foundComics.data.data.results)

        setAllComics(foundComics.data.data.results)
        return setLoading(false)
    }
    
    useEffect(() => {
        getData()
    }, [])

    return (
        <div id='fullPage'>
        {isLoading === true ?
            <div id='loadingIcon'>
                <Spinner animation="border" role="status" variant="danger" />
            </div>
        :      
            <div>
                <div id='navigation'>
                    <button onClick={() => window.location.href='/main'}> Home </button>
                    <button onClick={() => window.location.href='/characters'}> Characters </button>
                    <button disabled> Comics </button>
                </div>

                <div id='list'>
                    {allComics.map(comic => (
                        <Card id='card' key={comic.id}>
                            <Card.Img style={{width:"300px", height:"200px"}} variant="top" 
                                src={`${comic.thumbnail.path}/standard_xlarge.${comic.thumbnail.extension}`} 
                                alt="Comic image"
                            />

                            <Card.Body>
                                <Card.Title><h4> {comic.title} </h4></Card.Title>
                                <Card.Text>
                                    {comic.description === null ? <span> No description available for this comic
                                         :(</span> : <span> {comic.description} </span>}
                                </Card.Text>
                            </Card.Body>
                            
                            <Card.Footer>
                                <small className="text-muted">
                                    {comic.urls.map(url => (
                                        <button key={url.type} onClick={() => window.location.href=`${url.url}`}> 
                                            {url.type === "detail" ? <span> Details </span> : ""} 
                                            {url.type === "wiki" ? <span> Wiki </span> : ""}
                                            {url.type === "purchase" ? <span> Purchase </span> : ""}
                                        </button>
                                    ))}
                                </small>
                            </Card.Footer>
                        </Card>
                    ))}

                    
                </div>

                <div id='buttons'>
                    {/* Prev page button */}
                    <button disabled={pageCount === 1 ? true : false}
                        onClick={async e => {
                            e.preventDefault()
                            setLoading(true)

                            offset -= 20
                            setDecrementor(offsetDecrementor - 20)
                            setPage(pageCount - 1)

                            await getData(offset)
                            return setLoading(false)
                        }}
                    > 
                        Previous Page
                    </button>

                    <span>{pageCount}</span>

                    {/* Next page button */}
                    <button 
                        onClick={async e => {
                            e.preventDefault()
                            setLoading(true)

                            offset += 20
                            setIncrementor(offsetIncrementor + 20)
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

export default ComicsPage