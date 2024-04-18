import React from 'react';
import Card from './Card';
import '../css/Body.css';

function Body(props) {
  return (
    <div className='container-body'>
      <div className='body-card'>
        <Card
          product='product'
          nameProduct='Citrate Mag'
          price='273.00'
          description='240 Cápsulas | 800 Mg'
          lastPrice='134.00'
          share='COMPARTE'
          facebook='fb'
          instagram='instagram'
          twitter='twitter'
          button='Agregar'
        />
        <Card
          product='product'
          nameProduct='Citrate Mag'
          price='273.00'
          description='240 Cápsulas | 800 Mg'
          lastPrice='134.00'
          share='COMPARTE'
          facebook='fb'
          instagram='instagram'
          twitter='twitter'
          button='Agregar'
        />
        <Card
          product='product'
          nameProduct='Citrate Mag'
          price='273.00'
          description='240 Cápsulas | 800 Mg'
          lastPrice='134.00'
          share='COMPARTE'
          facebook='fb'
          instagram='instagram'
          twitter='twitter'
          button='Agregar'
        />
        <Card
          product='product'
          nameProduct='Citrate Mag'
          price='273.00'
          description='240 Cápsulas | 800 Mg'
          lastPrice='134.00'
          share='COMPARTE'
          facebook='fb'
          instagram='instagram'
          twitter='twitter'
          button='Agregar'
        />
      </div>
    </div>
  );
}

export default Body;