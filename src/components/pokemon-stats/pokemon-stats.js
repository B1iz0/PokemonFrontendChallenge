import React, { Component } from 'react';
import './pokemon-stats.css';

export default class PokemonStats extends Component {
    render() {
        const {stats} = this.props;
        let maxStat = stats[0].base_stat;
        for (let i = 1; i < stats.length; i++) {
            if (maxStat < stats[i].base_stat) {
                maxStat = stats[i].base_stat;
            }
        }
        

        const pokemonStats = stats.map((item, i) => {
            const {stat, base_stat} = item;
            let transformStatName = stat.name[0].toUpperCase() + stat.name.slice(1);
            let className = "progress-bar"
            if (maxStat === base_stat) {
                className += ' bg-success';
            } else {
                className += ' bg-warning';
            }

            return(
                <li key={i} className="list-group-item d-flex justify-content-center">
                    <div className="stat">
                        <span className="statTerm">{transformStatName}:</span>
                        <span className="statNumber">{base_stat}</span>
                    </div>
                    <div className="progress statProgress">
                        <div className={className} role="progressbar" style={{width: `${base_stat}%`}} aria-valuenow={base_stat} aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </li>
            )
        })

        return(
            <ul className="list-group list-group-flush">
                <h3 className="baseStatsTitle">Base stats</h3>
                {pokemonStats}
            </ul>
        );
    };
};