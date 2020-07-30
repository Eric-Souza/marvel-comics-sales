import React from 'react';

import InformationMenu from './informationMenu';

const Header = () => {
    return (
        <div id='header'>
            <span id='greeting'> Bem vindo/a ao Marvel Sales App, sua diversão a apenas um clique! </span>
            <InformationMenu />
        </div>
    );
};

export default Header;