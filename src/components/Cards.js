import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Confira nossos serviços</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.svg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='cabelos'
              path='/services'
            />
           
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.svg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='cabelos'
              path='/services'
            />
            <CardItem
              src='images/img-4.svg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Cabelos'
              path='/products'
            />
            <CardItem
              src='images/img-8.svg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Cabelos'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}


export default Cards;
