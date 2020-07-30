import React, { useState } from 'react';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 

const Final = () => {

    const [userName, setUserName] = useState('');

    const saveClient = (e) => {
        e.preventDefault();
        
        if (userName === '') {
            toast.warning('Favor digitar o seu nome no campo especificado');
            return;
        };

        localStorage.setItem('Nome', userName);
        toast.success('Compra finalizada, volte sempre!');

        setTimeout(() => {
            window.location.href='https://www.mutuus.net'
        }, 2000);
    };

    return (
        <>
        <div id='final'>
            <h3> Nos informe o seu nome, para podermos comunicar qualquer problema: </h3>
            <form onSubmit={saveClient}>
                <input type='text' placeholder='Nome' value={userName} onChange={e => setUserName(e.target.value)}/> <br/>
                <button type='submit'> Finalizar </button>
            </form>
            <h1>Obrigado por utilizar a Marvel Sales App</h1>
            <ToastContainer />
        </div>
        </>
    );
};

export default Final;