import React from 'react';
import '../css/Card.css';

function Card(props) {
  return (
    <div className='container-card'>
      <div className='header-card'>
        <div className='card-product'>
          <img 
          className='product-img' 
          src={require(`../img/${props.product}.png`)} 
          alt=''
          />
        </div>
        <div className='card-info'>
          <p className='info-name'>{props.nameProduct}</p>
          <p className='info-price'>${props.price}</p>
        </div>
        <div className='card-info'>
          <p className='info-description'>{props.description}</p>
          <p className='info-lastprice'>${props.lastPrice}</p>
        </div>
        <div className='card-puntuation'></div>
      </div>
      <div className='footer-card'>
        <div className='social'>
          <p className='social-title'>{props.share}</p>
          <div className='redes'>
            <a className='social-facebook' href='#'> <img className='social-img' src={require(`../img/${props.facebook}.png`)} /></a>
            <a className='social-instagram' href='#'> <img className='social-img' src={require(`../img/${props.instagram}.png`)} /> </a>
            <a className='social-twitter' href='#'> <img className='social-img' src={require(`../img/${props.twitter}.png`)} /> </a>
          </div>
        </div>
        <div className='button-card'>
          <a className='button'>{props.button}</a>
        </div>
      </div>
    </div>
  );
}

export default Card;