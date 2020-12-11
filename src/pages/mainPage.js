import React, { Component } from 'react';

// Services Import
import api from '../services/api';

export default class Products extends Component {
    constructor() {
        super()
    };
      
    componentWillMount () {
        this.showAllComics()
    };
      
    showAllComics = async () => {
        const apiKey = 'ts=1595879600&apikey=3e4689455ed92e49bc7607d9328ab0c6&hash=fbdacda12b4cb54ec2b3f1c51356fde6'
        const response = await api.get(`/comics?limit=20&offset=${this.state.offset}&${apiKey}`)
    };

    render () {
        return (
            <div>
                Olá Mundo
            </div>
        );
    };
};