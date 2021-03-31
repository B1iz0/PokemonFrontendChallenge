import React, { Component } from 'react';
import PokemonList from '../pokemon-list';
import PokemonInfo from '../pokemon-info';

import './app.css';

export default class App extends Component {
    state = {
        currentPokemon: 1
    }

    onClickPokemon = (id) => {
        this.setState({
            currentPokemon: id
        })
    }

    render() {
        return (
            <div className="app">
                <PokemonList onClickPokemon={this.onClickPokemon} />
                <PokemonInfo pokemonId={this.state.currentPokemon} />
            </div>
        );
    };
};