import React, { Component } from 'react';
import PokService from '../../services/pokService';
import Spinner from '../spinner';
import ErrorLoading from '../error-loading';
import PokemonListItem from '../pokemon-list-item'

import './pokemon-list.css';

export default class PokemonList extends Component {

    pokService = new PokService();
    state = {
        pokemons: [],
        loading: true,
        error: false
    }

    onPokemonLoaded = (pokemon) => {
        this.setState({
            pokemons: this.state.pokemons.concat(pokemon),
            loading: false
        });
    }

    componentDidMount() {
        for (let i = 1; i <= 100; i++) {
            this.pokService.getPokemon(i)
                .then(this.onPokemonLoaded)
                .catch(this.onError);
        }
    }

    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        })
    }

    render() {
        const {pokemons, loading, error} = this.state;
        const {onClickPokemon} = this.props;
        
        const errorLoading = error ? <ErrorLoading/> : null;
        const spinner = loading ? <Spinner/> : null;

        const visiblePokemons = pokemons.map((item) => {
            const {id, ...pokemonProps} = item;
            return (
                <li key={id} onClick={() => onClickPokemon(id)} className="list-group-item pokemon">
                    <PokemonListItem {...pokemonProps}/>
                </li>
            );
        });

        const content = !(loading || error) ? visiblePokemons : null

        return (
            <ul>
                {errorLoading}
                {spinner}
                {content}
            </ul>
        );
    };
};
