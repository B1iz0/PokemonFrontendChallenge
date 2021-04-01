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
            if (i === 164) {
                continue;
            }
            let currentPokemon = await this.fetchPokemonData(allPokemons1.results[i]);
            data.push(currentPokemon);
        }
        return data;
    }

    async fetchPokemonData(pokemon) {
        let url = pokemon.url;
        const res =  await fetch(url)
            .then(response => response.json());
        return this._transformPokemon(res);
    }

    _transformPokemon(pokemon) {
        // console.log(pokemon);
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
}