import React, { useState, useEffect } from 'react'

// Component imports
import Nav from 'react-bootstrap/Nav'
import Spinner from 'react-bootstrap/Spinner'

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
        <>
        {isLoading === true ? 
            <Spinner animation="border" role="status" variant="danger">
                <span className="sr-only"> Loading... </span>
            </Spinner>
        :      
            <div>
                <Nav>
                    <Nav.Item>
                        <Nav.Link href="/main"> Main </Nav.Link>
                    </Nav.Item>
                    
                    <Nav.Item>
                        <Nav.Link disabled> Characters </Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link href="/comics"> Comics </Nav.Link>
                    </Nav.Item>
                </Nav>

                {allChars.map( char => (
                    <div key={char.id}> {char.name} </div>
                ))}

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
                    Prev Page
                </button>

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
        }
        </>
    )
}

export default CharPage