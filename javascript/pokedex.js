


const convertTypes = (pokemonTypes) => {
    return pokemonTypes.map((typeSlot) => `<span>${typeSlot.type.name}</span>`
    )
}

const convertPokemonToLi = (pokemon) => {
    return `                <li class="pokemon">
    <div class="id">
        <span>${pokemon.name}</span>
        <span>${pokemon.order}</span>
    </div>
    <div class="imgs">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.order}.svg" alt="${pokemon.name}">
    </div>
    <div class="types">
        ${convertTypes(pokemon.types).join('')}
    </div>

</li>`
}


const pokemonList = document.getElementById("pokemonList")

pokeApi.getPokemons().then((pokemons = []) => {
    
    pokemonList.innerHTML = pokemons.map(convertPokemonToLi).join('')



})