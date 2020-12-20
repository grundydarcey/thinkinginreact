import React, { Component } from 'react';
import slugify from 'slugify';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});


export default class Processor extends Component {

  render() {
  //want to loop/map through my features file so i can display my radio buttons with appropriate info
    return (<div className='Processing'>
      <h3>Processor</h3>
      <p>
      processor info</p>
      </div>
    )
  }
  }