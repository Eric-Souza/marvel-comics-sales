import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import '../styles/components.css';

const InformationMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div id='information-menu'>

      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Informações
      </Button>

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >

        <MenuItem onClick={() => {window.location.href='https://www.linkedin.com/in/eric-souza-0157b618b/';}}> 
          <div>
            <h3> Desenvolvedor </h3>
            <div>
              Nome: Eric de Oliveira Souza
              <br/>
              Email: eric.bh18souza@gmail.com
            </div>
          </div>
        </MenuItem>

        <MenuItem onClick={() => {window.location.href='https://www.mutuus.net';}}>
        <div>
            <h3> Sobre </h3>
            <div>
              <p>
                Aplicativo de vendas (e-commerce) de comics da Marvel, feito como desafio para a Mutuus Seguros. 
              </p>
            </div>
          </div>
        </MenuItem>

      </Menu>
      
    </div>
  );
};

export default InformationMenu;