import React, { Component } from 'react';
import './pokemon-info-base.css';

export default class PokemonBaseInfo extends Component {

    render() {
        const {id, types, species, height, weight, abilities} = this.props.pokemon;
        let transformSpecies = species[0].toUpperCase() + species.slice(1);

        const components = abilities.map(item => {
            if (!item.is_hidden) {
                return(
                    <li key={item.slot} className="list-group-item">
                        {item.slot}. {item.ability.name}
                    </li>
                );
            } else {
                return(
                    <li key={item.slot} className="list-group-item">
                        {item.ability.name} (hidden)
                    </li>
                );
            };
        });

        const currentTypes = types.map((item, i)=> {
            return(
                <button key={i} type="button" className="btn btn-warning btn-sm" disabled>
                    {item.type.name.toUpperCase()}
                </button>
            );
        });

        return(
            <div className="pokemonBaseInfo">
                <h3 className="pokemonBaseInfoTitle">Pokedex data</h3>
                <ul className="list-group list-group-flush pokemonInfo">
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">National №</span>
                        <span className="pokemonId">{id}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Type</span>
                        <span>{currentTypes}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Species</span>
                        <span>{transformSpecies} Pokemon</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Height</span>
                        <span>{height / 10} m</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Weight</span>
                        <span>{weight / 10} kg</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Abilities</span>
                        <ul className="list-group list-group-flush list-abilities">{components}</ul>
                    </li>
                </ul>
            </div>
        )
    }
} 