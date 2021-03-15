import React, { useState, useEffect } from 'react'

// Style imports
import './charPageStyle.css'

// Component imports
import Spinner from 'react-bootstrap/Spinner'
import Card from 'react-bootstrap/Card'

// Function imports
import { getAllChars } from '../../services/services'

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
        const res = await getAllChars(offset)

        console.log('API response:', res)
        console.log('All characters:', res.data.data.results)

        setAllChars(res.data.data.results)
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
                    <button disabled style={{color: 'white'}}> Characters </button>
                    <button onClick={() => window.location.href='/comics'}> Comics </button>
                </div>

                <div id='charactersList'>
                    {allChars.map( char => (
                        <Card id='characterCard' key={char.id}>
                            <Card.Img style={{width:"300px", height:"200px"}} variant="left" src={`${char.thumbnail.path}${char.thumbnail.extension}`} />
                            <Card.Body>
                                <Card.Title>{char.name}</Card.Title>
                                <Card.Text>
                                    {char.description === "" ? <>No description avalable for this character :(</> : <>{char.description}</>}
                                </Card.Text>
                            </Card.Body>
                            
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
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