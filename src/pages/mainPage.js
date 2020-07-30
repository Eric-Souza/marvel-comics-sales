import React from 'react';

// Componentes Importados
import Header from '../components/header';
import Products from '../components/products';
import MarvelTitle from '../components/marvelTitle';

const MainPage = () => {
    
    return (
        <>

        <div>
            <Header />
        </div>

        <div>
            <MarvelTitle />
        </div>
        
        <div>
            <Products />
        </div>
        
        </>
    );
};

export default MainPage;