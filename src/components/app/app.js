import React, { Component } from 'react';
import SearchPanel from '../search-panel';
import PokemonTypeFilter from '../pokemon-type-filter';
import PokemonList from '../pokemon-list';
import PokemonInfo from '../pokemon-info';

import './app.css';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.onUpdateSearch = this.onUpdateSearch.bind(this);
        this.onFilterSelect = this.onFilterSelect.bind(this);
    }

    state = {
        currentPokemon: 1,
        term: '',
        filter: 'all'
    }

    onClickPokemon = (id) => {
        this.setState({
            currentPokemon: id
        })
    }

    onUpdateSearch(term) {
        this.setState({term});
    }

    onFilterSelect(filter) {
        this.setState({filter});
    }

    render() {
        const {filter} = this.state;

        return (
            <div className="app">
                <div className="search-panel d-flex">
                    <SearchPanel 
                        onUpdateSearch={this.onUpdateSearch}/>
                    <PokemonTypeFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
                </div>
                <PokemonList filter={filter} onClickPokemon={this.onClickPokemon} term={this.state.term}/>
                <PokemonInfo pokemonId={this.state.currentPokemon} />
            </div>
        );
    };
};