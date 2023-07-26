async function getPokemonsAbilities(url) {
    const response = await fetch(url)
    const ability = await response.json()
    return await ability
}

export default getPokemonsAbilities