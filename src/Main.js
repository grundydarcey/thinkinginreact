import React, { Component } from 'react';
import Items from './Items';
import Cart from './Cart';

export default class Main extends Component {
    render() {
        return (
            <main className="holder">
                <Items flexBasis={2}>
                </Items>
                <Cart>
                </Cart> 
            </main>
        )
    }
}