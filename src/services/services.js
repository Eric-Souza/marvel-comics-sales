import { api } from './api';

// Gets all comics (limit set to 10 comics)
const getAllComics = async offset => {
    const apiKey = 'ts=1595879600&apikey=3e4689455ed92e49bc7607d9328ab0c6&hash=fbdacda12b4cb54ec2b3f1c51356fde6'
    const allComics = await api.get(`/comics?${apiKey}&offset=${offset}&limit=10`)

    return allComics
};

// Gets all characters (limit set to 10 chars)
const getAllChars = async offset => {
    const apiKey = 'ts=1595879600&apikey=3e4689455ed92e49bc7607d9328ab0c6&hash=fbdacda12b4cb54ec2b3f1c51356fde6'
    const allChars = await api.get(`/characters?${apiKey}&offset=${offset}&limit=10`)

    return allChars
};

export { getAllComics, getAllChars };