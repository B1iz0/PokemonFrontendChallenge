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

    _transformPokemon(pokemon) {
        return {
            id: pokemon.id,
            imageSrc: pokemon.sprites.other['official-artwork'].front_default,
            name: pokemon.name,
            type: pokemon.types[0].type.name.toUpperCase(),
            species: pokemon.species.name
        }
    }
}