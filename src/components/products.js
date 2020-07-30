import React, { useState } from 'react';
import api from '../services/api';

import '../styles/components.css';

const Products = () => {

  // ESTADOS

  // Renderização condicional
  const [isComicsVisible, setVisibleComics] = useState(false);
  const [isCharsVisible, setVisibleChars] = useState(false);
  const [isCartVisible, setCartVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // States dos Comics
  const [comics, setComics] = useState([]);
  const [comicsCount, setComicsCount] = useState(0);

  // States dos Personagens
  const [chars, setChars] = useState([]);

  // State do Carrinho
  const [chosenProducts, setChosenProducts] = useState([]);

  // MÉTODOS

  // Todos os Comics
  const showComics = async () => {

    setVisibleChars(false);
    setIsLoading(true);

    const apiKey = 'ts=1595879600&apikey=3e4689455ed92e49bc7607d9328ab0c6&hash=fbdacda12b4cb54ec2b3f1c51356fde6'
    const response = await api.get(`/comics?limit=100&${apiKey}`);
    const allComics = response.data.data.results;
    
    setVisibleComics(true);
    setComics(allComics);
    setIsLoading(false);
  };

  // Todos os Personagens
  const showCharacters = async () => {

    setVisibleComics(false);
    setCartVisible(false);
    setIsLoading(true);

    const apiKey = 'ts=1595879600&apikey=3e4689455ed92e49bc7607d9328ab0c6&hash=fbdacda12b4cb54ec2b3f1c51356fde6'
    const response = await api.get(`/characters?limit=100&offset=0&${apiKey}`);
    const allChars = response.data.data.results;
    
    setVisibleChars(true);
    setChars(allChars);
    setIsLoading(false);
  };

  // Carrinho
  const sendComics = (product) => {
    setChosenProducts([...chosenProducts, product.title, product.prices.map((indPrice) => (indPrice.price))]);
    setCartVisible(true);
    setComicsCount(comicsCount +1);
  };

  return (
    <>

    <div id='choices'>
      <button onClick={showComics}     > Todos os Comics      </button>
      {isLoading === true ? <h3>Carregando...</h3> : ''}
      <button onClick={showCharacters} > Todos os Personagens </button>
    </div>
 
    <div id='lists'>
      
      {isComicsVisible === true ? 
        <div>
          <h2> Escolha seus Comics: </h2>
          
          {comics.map(comic => (
            
          <article key={comic.id}>

            <div id='img'> <img alt='Sem imagem' src={`${comic.thumbnail.path + `/landscape_large.${comic.thumbnail.extension}`}`} /> </div>

            <strong> {comic.title} </strong>

            <p> ID: {comic.id} </p>

            <p> {comic.description ? comic.description : 'Sem descrição.'} </p>

            {comic.prices.map((individualPrice) => (
              <h4 key={individualPrice.price}> 
                {individualPrice.price ? 

                <div> 
                  <p>U$ {individualPrice.price}</p> 
                  <button onClick={(comics) => sendComics(comic)}> Adicionar ao Carrinho </button> 
                </div>
                
                : 'Não disponível'} 
              </h4>
            ))}

          </article> 
          ))}

      </div> 
      : ''}

      {isCharsVisible === true ? 
        <div>
          <h2> Personagens: </h2>

          {chars.map(char => (

          <article key={char.id}>
            
            <div id='img'> <img alt='Sem Imagem' src={`${char.thumbnail.path + `/landscape_large.${char.thumbnail.extension}`}`} /> </div> 

            <strong> {char.name} </strong>

            <p> ID: {char.id} </p>

            <p> {char.description ? char.description : 'Sem descrição.'} </p>

            <h4>Aparece nos comics: </h4>
            
            {char.comics.items.map((item) => (
              <div key={item.resourceURI}>
                <p> - {item.name} </p>
              </div>
            ))}

          </article>  
          ))}

      </div> 
      : ''}

    </div>

    <div id='cart'>

    {isCartVisible === true ?

        <>
          <h2> Carrinho </h2>

          <div>

            <span>Items no carrinho: {comicsCount}</span>

            {chosenProducts.map((product, index) => (
              <div key={index}>
                <h4>{product}</h4>
              </div>
            ))}
            
          </div>
          
          <button id='removeButton' onClick={() => setChosenProducts([])}> Limpar Lista </button>
          <button onClick={() => {window.location.href='/final'}}> Finalizar Compras </button>
        </>
     : ''
    }

    </div>

    </>
  );
};

export default Products;