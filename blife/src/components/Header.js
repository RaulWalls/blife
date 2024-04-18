import React from 'react';
import '../css/Header.css';

function Header(props) {
  return (
    <div className='container-header'>  
      <div className="container-nav">    
        <div className='header-company'>
          <img
          className='company-image'
          src={require(`../img/${props.image}.png`)}
          />
        </div>
        <div className='header-navegation'>
          <div className='navegation-page'>
            <a className='page' href='#'>{props.link1}</a>
            <a className='page' href='#'>{props.link2}</a>
            <a className='page' href='#'>{props.link3}</a>
          </div>
        </div>
        <div className='header-user'>
          <div className='user-tool'>
            <a href='#'>
              <img 
              className='tool'
              src={require(`../img/${props.user1}.png`)}
              alt='search'
              />
            </a>
          </div>
          <div className='user-tool'>
            <a href='#'>
              <img
              className='tool'
              src={require(`../img/${props.user2}.png`)}
              alt='user'
              />
            </a>
          </div>
          <div className='user-tool'>
            <div className='bubble-notification'>{props.notification}</div>
              <a href='#'>
                <img 
                className='tool'
                src={require(`../img/${props.user3}.png`)}
                alt='shopping-bag'
                />
              </a>
          </div>
        </div>
      </div>
      <div className='container-banner'>
        <img
          className='banner-img'
          src={require(`../img/${props.hero}.png`)}
        />
      </div>
    </div>
  );
}

export default Header;