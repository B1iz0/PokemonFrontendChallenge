export default class PokService {
    constructor() {
        this._apiBase = 'https://pokeapi.co/api/v2';
    }

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);
    
        if(!res.ok){
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
    
        return await res.json();
    }

    async getPokemon(id) {
        const res = await this.getResource(`/pokemon/${id}`);
        return this._transformPokemon(res);
    }

    async getAllPokemons() {
        const data = [];
        let allPokemons1 = []
        await fetch('https://pokeapi.co/api/v2/pokemon?limit=1118')
            .then(response => response.json())
            .then(allPokemons => {
                allPokemons1 = allPokemons;
                
            });
        for (let i = 0; i < allPokemons1.results.length; i++) {
            let currentPokemon = await this.fetchPokemonData(allPokemons1.results[i])
            if (currentPokemon !== null) {
                data.push(currentPokemon);
            }
        }
        console.log(data);
        return data;
    }

    async fetchPokemonData(pokemon) {
        let url = pokemon.url;
        const res =  await fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    return null;
                }
            });
        return this._transformPokemon(res);
    }

    async getTypes() {
        const data = [];
        const res = await this.getResource('/type');
        for (let i = 0; i < res.results.length; i++) {
            let currentType = this._transformType(res.results[i]);
            data.push(currentType);
        }
        return data;
    }

    _transformPokemon(pokemon) {
        if (pokemon === null) {
            return {};
        }
        return {
            id: pokemon.id,
            imageSrc: pokemon.sprites.other['official-artwork'].front_default,
            name: pokemon.name,
            types: pokemon.types,
            species: pokemon.species.name,
            height: pokemon.height,
            weight: pokemon.weight,
            abilities: pokemon.abilities,
            stats: pokemon.stats
        }
    }

    _transformType(type) {
        return {
            name: type.name
        }
    }
}