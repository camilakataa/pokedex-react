import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import getPokemonsDetails from "../../services/get-pokemons-details";
import { ThemeContext } from "../../contexts/theme-context";
import "./style.css"

const SearchBar = () => {

    const { theme } = useContext(ThemeContext)
    const [searchPokemon, setSearch] = useState("")
    const [pokemon, setPokemon] = useState([])
    const [showCard, setShowCard] = useState(false)

    const handleOnChange = (e) => {
        setSearch(e.target.value)
    }

    const handleOnClick = () => {
        const fetchData = async () => {
            const response = await getPokemonsDetails(searchPokemon)
            setPokemon(response)
            setShowCard(true)
        }
        fetchData()
    }

    const handleOnKeyUp = (event) => {
        const key = event.which || event.keyCode
        const isEnterKeyPressed = key === 13

        if (isEnterKeyPressed) {
            const fetchData = async () => {
                const response = await getPokemonsDetails(searchPokemon)
                setPokemon(response)
            }
            fetchData()
            setShowCard(true)
        }
    }

    return (
        <Div>
            <input placeholder=" Pokémon name or ID" onChange={handleOnChange} onKeyUp={handleOnKeyUp} />
            <button onClick={handleOnClick}>Search</button>
            {pokemon ? (
                <Link to={`/pokemon-details/${pokemon.name}`}>
                    <Card style={theme} className={showCard ? 'searched' : 'not-searched'}>
                        <h2>{pokemon.name}</h2>
                        <img alt={pokemon.name} src={pokemon.sprites?.other.dream_world.front_default} />
                    </Card>
                </Link>
            ) : null}
        </Div>
    )
}

export default SearchBar

const Div = styled.div`
    margin: 15px;

    input {
        box-shadow: 0 4px 8px #000000;
        margin: 0px 5px 15px 5px;
        width: 180px;
        height: 20px;
        border-radius: 5px;
        padding: 2px;
    }

    button {
        margin: 0px 5px;
        width: 60px;
        height: 25px;
        background-color: #000080;
        box-shadow: 0 4px 8px #000000;
        color: #fff;
        border-radius: 5px;
    }

    button:hover {
        opacity: 0.8;
    }
`
const Card = styled.div`
    background-color: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.color};
    opacity: 0.7;
    border: solid #B8860B;
    border-radius: 10px;
    box-shadow: 0 4px 8px #000000;
    width: 200px;
    height: 180px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 10px;

        h2::first-letter {
            text-transform: uppercase;
        }

        img {
            height: 80px;
            margin: 10px;
        }
`