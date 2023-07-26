async function createPokemonList(count) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${count}`)
    const pokemonList = await response.json()
    return await pokemonList.results
}

export default createPokemonList;