import React, { Component } from 'react';
import PokService from '../../services/pokService';
import Spinner from '../spinner';
import ErrorLoading from '../error-loading';
import PokemonListItem from '../pokemon-list-item'

import './pokemon-list.css';

export default class PokemonList extends Component {
    constructor(props) {
        super(props);

        this.onClickNext = this.onClickNext.bind(this);
        this.onClickPrev = this.onClickPrev.bind(this);
    }

    pokService = new PokService();
    state = {
        pokemons: [],
        loading: true,
        error: false,
        minIndex: 0,
        maxIndex: 9
    }

    onPokemonLoaded = (pokemons) => {
        this.setState({
            pokemons: pokemons,
            loading: false
        });
    }

    componentDidMount() {
        this.pokService.getAllPokemons()
                .then(this.onPokemonLoaded)
                .catch(this.onError);
    }

    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        })
    }

    onClickNext() {
        const {pokemons, maxIndex, minIndex} = this.state;
        if (maxIndex === pokemons.length) {
            return;
        }
        this.setState({
            maxIndex: maxIndex + 10,
            minIndex: minIndex + 10
        });
    };

    onClickPrev() {
        const {maxIndex, minIndex} = this.state;
        if (minIndex === 0) {
            return;
        }
        this.setState({
            maxIndex: maxIndex - 10,
            minIndex: minIndex - 10
        });
    };

    render() {
        const {pokemons, loading, error, minIndex, maxIndex} = this.state;
        const {onClickPokemon, filter, term} = this.props;
        
        const errorLoading = error ? <ErrorLoading/> : null;
        const spinner = loading ? <Spinner/> : null;

        const visiblePokemons = pokemons.slice(minIndex, maxIndex + 1).map((item) => {
            const {id, ...pokemonProps} = item;
            return (
                <li key={id} onClick={() => onClickPokemon(id)} className="list-group-item d-flex pokemon">
                    <PokemonListItem {...pokemonProps}/>
                </li>
            );
        });

        const content = !(loading || error) ? visiblePokemons : null

        return (
            <div>
                <ul className="list-group pokemonList">
                    {errorLoading}
                    {spinner}
                    {content}
                </ul>
                <div className="navigation d-flex justify-content-center">
                    <button type="button" onClick={this.onClickPrev} className="btn btn-light navigation-prev">Previous</button>
                    <button type="button" onClick={this.onClickNext} className="btn btn-light navigation-next">Next</button>
                </div>
            </div>
        );
    };
};
