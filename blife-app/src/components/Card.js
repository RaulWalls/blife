import React from 'react';
import {FaStar} from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import Carousel from './Carousel';
import '../css/Card.css';

function Card(props) {
  return (
    <div className='container-card'>
      <div className='status-card'>
        <div className='liked-tag'>
          <FaHeart className='heart' size={15}/>
          <p>{props.heart}</p>
        </div>
        <div className='sale-tag'>-{props.discount}%</div>
      </div>
      <div className='header-card'>
        <div className='card-product'>
          {/* <img 
          className='product-img' 
          src={require(`../img/${props.product}.png`)} 
          alt=''
          /> */}
          <Carousel 
          product='product' />
        </div>
        <div className='card-info'>
          <p className='info-name'>{props.nameProduct}</p>
          <p className='info-price'>${props.price}</p>
        </div>
        <div className='card-info'>
          <p className='info-description'>{props.description}</p>
          <p className='info-lastprice'>${props.lastPrice}</p>
        </div>
        <div className='card-rating'>
          {[...Array(5)].map(star =>{
            return (
              <FaStar className='star' size={15}/>
            );
          })}
        </div>
      </div>
      <div className='footer-card'>
        <div className='social'>
          <p className='social-title'>{props.share}</p>
          <div className='redes'>
            <a className='social-facebook kumbh-sans' href='#'> <img className='social-img' src={require(`../img/${props.facebook}.svg`)} /></a>
            <a className='social-twitter kumbh-sans' href='#'> <img className='social-img' src={require(`../img/${props.twitter}.svg`)} /> </a>
            <a className='social-instagram kumbh-sans' href='#'> <img className='social-img' src={require(`../img/${props.instagram}.svg`)} /> </a>
          </div>
        </div>
        <div className='button-card'>
          <a className='button' href='#'>{props.button}</a>
        </div>
      </div>
    </div>
  );
}

export default Card;