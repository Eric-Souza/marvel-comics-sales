import { api } from './api';

// Gets all comics (default limit is 20) 
const getAllComics = async offset => {
    const apiKey = 'ts=1595879600&apikey=3e4689455ed92e49bc7607d9328ab0c6&hash=fbdacda12b4cb54ec2b3f1c51356fde6'
    const allComics = await api.get(`/comics?${apiKey}&offset=${offset}`)

    return allComics
};

// Gets all characters (default limit is 20)
const getAllChars = async offset => {
    const apiKey = 'ts=1595879600&apikey=3e4689455ed92e49bc7607d9328ab0c6&hash=fbdacda12b4cb54ec2b3f1c51356fde6'
    const allChars = await api.get(`/characters?${apiKey}&offset=${offset}`)

    return allChars
};

export { getAllComics, getAllChars };