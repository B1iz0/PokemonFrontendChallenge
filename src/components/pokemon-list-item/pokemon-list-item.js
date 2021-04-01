import React, { Component } from 'react';
import './pokemon-list-item.css';

export default class PokemonListItem extends Component {
    render() {
        const {imageSrc, name} = this.props;
        return (
            <>
                <img src={imageSrc} width="120px" alt='pokemon'></img>
                <h5 className="list-item-title">{name}</h5>
            </>
        );
    }
}