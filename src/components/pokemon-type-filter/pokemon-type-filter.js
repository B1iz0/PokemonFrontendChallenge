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
        const {onFilterSelect} = this.props;
        if (this.state.buttons.length === 0) {
            buttons.push(
                <Dropdown.Item 
                    key="all"
                    onClick={() => onFilterSelect('all')}
                    href="#">All</Dropdown.Item>
            );
        } else {
            buttons.push(
                <Dropdown.Item 
                    key="all"
                    onClick={() => onFilterSelect('all')}
                    href="#">All</Dropdown.Item>
            )
            buttons = buttons.concat(this.state.buttons.map(name => {
                let transformFilter = name.name[0].toUpperCase() + name.name.slice(1);
                return (
                    <Dropdown.Item 
                        key={name.name} 
                        onClick={() => onFilterSelect(name.name)}
                        href="#">{transformFilter}</Dropdown.Item>
                )
            }));
        }
        let transformFilter = this.props.filter[0].toUpperCase() + this.props.filter.slice(1);

        return (
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    {transformFilter}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {buttons}
                </Dropdown.Menu>
            </Dropdown>
        );
    }
};