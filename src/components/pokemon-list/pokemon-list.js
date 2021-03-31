import React, { Component } from 'react';
import PokService from '../../services/pokService';
import Spinner from '../spinner';
import ErrorLoading from '../error-loading';
// import PokemonListItem from '../pokemon-list-item'

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
        for (let i = 1; i <= 898; i++) {
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
            const {id, imageSrc, name, type, species} = item;
            return (
                <li key={id} onClick={() => onClickPokemon(id)} className="list-group-item">
                    <img src={imageSrc} width="120px" alt='pokemon'></img>
                    <h5>{name}</h5>
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
