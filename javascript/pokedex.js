

const convertPokemonToLi = (pokemon) => {
    return `                <li class="pokemon">
    <div class="id">
        <span>${pokemon.name}</span>
        <span>${pokemon.number}</span>
    </div>
    <div class="imgs">
        <img src="${pokemon.photo}" alt="${pokemon.name}">
    </div>
    <div class="types">
        ${pokemon.types.map((type)=> `<span>${type}</span>`).join('')}
    </div>

</li>`
}


const pokemonList = document.getElementById("pokemonList")

pokeApi.getPokemons().then((pokemons = []) => {
    
    pokemonList.innerHTML = pokemons.map(convertPokemonToLi).join('')



})