import React from 'react';

// Componentes Importados
import Header from '../components/header';
import MarvelTitle from '../components/marvelTitle';
import Final from '../components/final';

const FinalPage = () => {
    
    return (
        <>

        <div>
            <Header />
        </div>

        <div>
            <MarvelTitle />
        </div>
        
        <div>
            <Final />
        </div>
        
        </>
    );
};

export default FinalPage;