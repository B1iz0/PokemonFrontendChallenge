import React, { Component } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import PokService from '../../services/pokService';

import './pokemon-type-filter.css';

export default class PokemonTypeFilter extends Component {

    state = {
        buttons: [],
        loading: true
    }
    pokService = new PokService();

    onTypesLoaded = (types) => {
        this.setState({
            buttons: types,
            loading: false
        });
    }

    componentDidMount() {
        this.pokService.getTypes()
                .then(this.onTypesLoaded)
    }

    render() {
        let buttons = [];
        if (this.state.buttons.length === 0) {
            buttons.push(
                <Dropdown.Item 
                    key="default"
                    href="#">Default</Dropdown.Item>
            );
        } else {
            const {onFilterSelect} = this.props;
            buttons.push(
                <Dropdown.Item 
                    key="all"
                    onClick={() => onFilterSelect('all')}
                    href="#">all</Dropdown.Item>
            )
            buttons = buttons.concat(this.state.buttons.map(name => {
                return (
                    <Dropdown.Item 
                        key={name.name} 
                        onClick={() => onFilterSelect(name.name)}
                        href="#">{name.name}</Dropdown.Item>
                )
            }));
        }
         

        return (
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Types
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {buttons}
                </Dropdown.Menu>
            </Dropdown>
        );
    }
};