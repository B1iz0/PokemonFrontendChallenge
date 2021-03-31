import React, { Component } from 'react';

export default class PokemonBaseInfo extends Component {
    constructor() {
        super();
        
    }

    render() {
        return(
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
        )
    }
} 