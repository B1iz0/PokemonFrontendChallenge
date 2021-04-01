import React, { Component } from 'react';
import PokService from '../../services/pokService';
import PokemonBaseInfo from '../pokemon-info-base';
import PokemonStats from '../pokemon-stats';
import Spinner from '../spinner';
import ErrorLoading from '../error-loading';

export default class PokemonInfo extends Component {

    pokService = new PokService();
    state = {
        pokemon: {},
        loading: true,
        error: false,
        id: null
    }

    componentDidMount() {
        this.updateInfo();
    }

    componentDidUpdate(prevProps) {
        if (this.props.pokemonId !== prevProps.pokemonId) {
            this.updateInfo();
        }
    }

    updateInfo() {
        const {pokemonId} = this.props;
        // console.log(pokemonId);
        if (!pokemonId) {
            return;
        }
        this.pokService.getPokemon(pokemonId)
            .then(pokemon => {
                this.setState({
                    pokemon,
                    loading: false
                })
            });
    }

    render() {
        if (!this.state.pokemon) {
            return <span className='select-error'>Please select a pokemon</span>
        }
        const {pokemon, loading, error} = this.state;

        const errorLoading = error ? <ErrorLoading/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = !(loading || error) ? <View pokemon={pokemon}/> : null

        return (
            <div className="card">
                {errorLoading}
                {spinner}
                {content}
            </div>
        );
    };
};

const View = ({pokemon}) => {
    const {imageSrc, name} = pokemon;

    return(
        <>
            <div className="d-flex">
                <img src={imageSrc} alt={name}></img>
                <PokemonBaseInfo pokemon={pokemon}/> 
            </div>
            <PokemonStats stats={pokemon.stats}/>
        </>
    )
}