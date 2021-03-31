import React, { Component } from 'react';
import PokService from '../../services/pokService';
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
            <div className="card d-flex">
                {errorLoading}
                {spinner}
                {content}
            </div>
        );
    };
};

const View = ({pokemon}) => {
    const {id, imageSrc, name, type, species} = pokemon;

    return(
        <>
            <img src={imageSrc} alt={name}></img>
            <ul className="list-group list-group-flush pokemonInfo">
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Name</span>
                    <span className="pokemonName">{name}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Id</span>
                    <span className="pokemonId">{id}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Type</span>
                    <button type="button" className="btn btn-warning btn-lg" disabled>{type}</button>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Species</span>
                    <span>{species} Pokemon</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Height</span>
                    <span></span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Weight</span>
                    <span></span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Abilities</span>
                    <span></span>
                </li>
            </ul>
        </>
    )
}