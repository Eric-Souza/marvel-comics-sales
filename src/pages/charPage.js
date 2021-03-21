import React, { useState, useEffect } from 'react'

// Style imports
import '../styles/pagesStyling.css'

// Component imports
import Spinner from 'react-bootstrap/Spinner'
import Card from 'react-bootstrap/Card'

// Function imports
import { getAllChars } from '../services/services'

const CharPage = () => {
    // Loading state
    const [isLoading, setLoading] = useState(true)

    // Pagination states
    const [pageCount, setPage] = useState(1)
    const [offsetIncrementor, setIncrementor] = useState(0)
    const [offsetDecrementor, setDecrementor] = useState(0)

    // Chars state
    const [allChars, setAllChars] = useState([])

    var offset = 0 + offsetIncrementor + offsetDecrementor

    const getData = async offset => {
        const foundChars = await getAllChars(offset)

        console.log('All characters:', foundChars.data.data.results)

        setAllChars(foundChars.data.data.results)
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
                    <button disabled> Characters </button>
                    <button onClick={() => window.location.href='/comics'}> Comics </button>
                </div>

                <div id='list'>
                    {allChars.map( char => (
                        <Card id='card' key={char.id}>
                            <Card.Img style={{width:"300px", height:"200px"}} variant="top" 
                                src={`${char.thumbnail.path}/standard_xlarge.${char.thumbnail.extension}`} 
                                alt="Character image"
                            />

                            <Card.Body>
                                <Card.Title><h4> {char.name} </h4></Card.Title>
                                <Card.Text>
                                    {char.description === "" ? <span> No description available for this character :(</span> : <span> {char.description} </span>}
                                </Card.Text>
                            </Card.Body>
                            
                            <Card.Footer>
                                <small className="text-muted">
                                    {char.urls.map(url => (
                                        <button key={url.type} onClick={() => window.location.href=`${url.url}`}> 
                                            {url.type === "detail" ? <span> Details </span> : ""} 
                                            {url.type === "wiki" ? <span> Wiki </span> : ""}
                                            {url.type === "comiclink" ? <span> Comics Appearances </span> : ""}
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

export default CharPage