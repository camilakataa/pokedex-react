import React, { useState, useEffect, useContext } from "react";
import getPokemonsDetails from "../../services/get-pokemons-details";
import styled from 'styled-components'
import { ThemeContext } from "../../contexts/theme-context";

const PokemonCard = (props) => {

    const { theme } = useContext(ThemeContext)
    const { pokemonName } = props
    const [pokemon, setPokemon] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            const response = await getPokemonsDetails(pokemonName)
            setPokemon(response)
        }
        fetchData()

    }, [pokemonName])


    return (
        <Card style={theme}>
            <Header>
                <h2>{pokemon.name}</h2>
                <p>id #{pokemon.id}</p>
            </Header>
            <Image alt={pokemon.name} src={pokemon.sprites?.other.dream_world.front_default} />
            <Ul style={theme}>
                {pokemon.types?.map( (element, index) => {
                    return (
                        <li key={index}>
                            {element.type?.name}
                        </li>
                    )
                })}
            </Ul>
        </Card>
    )
}

const Card = styled.div`
    background-color: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.color};
    opacity: 0.7;
    border: solid #B8860B;
    border-radius: 10px;
    box-shadow: 0 4px 8px #000000;
    width: 200px;
    height: 240px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin: 10px;
`

const Header = styled.div`
    font-size: 15px;
    margin: 10px;

    h2::first-letter {
        text-transform: uppercase;
    }
`

const Image = styled.img`
    height: 80px;
    margin: 10px;
`

const Ul = styled.ul`
    display: flex;
    margin: 15px;

    li {
        margin: 8px;
        color: #000000;
        background-color: #B8860B;
        width: 60px;
        height: 20px;
        border-radius: 5px;
        text-align: center;
    }
`

export default PokemonCard