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
    getAllPokemons() {
        return this.getResource('/pokemon');
    }
    getPokemon(id) {
        return this.getResource(`/pokemon/${id}`);
    }
}