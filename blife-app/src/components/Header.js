import React from 'react';
import '../css/Header.css';

function Header(){
    return(
        <div className="container-header">
            <div className='header-company'>
            Logotipo
            </div>
            <div className='header-navegation'>
            Navegacion
            <div ></div>
            </div>
            <div className='header-user'>
            Usuario
            </div>
        </div>
    );
}

export default Header;