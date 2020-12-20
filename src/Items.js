import React, { Component } from 'react';
import Processor from './Processor';
import Os from './Os';
import Video from './Video';
import Display from './Display';

export default class Items extends Component {
    render() {
    return (
        <div className="items">
            Customize your laptop
            <Processor />
            <Os />
            <Video />
         
        </div>
    )
  }
}