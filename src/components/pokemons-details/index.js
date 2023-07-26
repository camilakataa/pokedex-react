import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import getPokemonsDetails from "../../services/get-pokemons-details";
import { styled } from "styled-components";
import PokemonAbilities from "../pokemon-abilities";
import { ThemeContext } from "../../contexts/theme-context";

const PokemonsDetails = (props) => {

    const { theme } = useContext(ThemeContext)
    const [pokemon, setPokemon] = useState({})
    const { name } = useParams() || props

    useEffect(() => {
        
        const fetchData = async () => {
            const card = await getPokemonsDetails(name)
            setPokemon(card)
        }
        fetchData()

    }, [name])

    return (
        <Div>
            <Link to='/'>Return to the previous page</Link>
            <Card className="pokemon-card" style={theme}>
                <h2>{pokemon.name}</h2>
                <p>id #{pokemon.id}</p>
                <img alt={pokemon.name} src={pokemon.sprites?.other.dream_world.front_default} />
                <div>
                    <h3>Type(s)</h3>
                    <Types>
                        {pokemon.types?.map((element, index) => {
                            return (
                                <li key={index}>
                                    {element.type?.name}
                                </li>
                            )
                        })}
                    </Types>
                </div>
                <div>
                    <h3>Abilities</h3>
                    <Abilities>
                        {pokemon.abilities?.slice(0,5).map((element, index) => {
                            return (
                                <li key={index}>
                                    <PokemonAbilities abilitiesUrl={element.ability?.url} />
                                </li>
                            )
                        })}
                    </Abilities>
                </div>
                <div>
                    <h3>Moves</h3>
                    <Moves>
                        {pokemon.moves?.slice(0, 10).map((element, index) => {
                            return (
                                <li key={index}>
                                    {element.move?.name}
                                </li>
                            )
                        })}
                    </Moves>
                </div>
            </Card>
        </Div>
    )
}

export { PokemonsDetails }

const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
`

const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${props => props.theme.backgroundColor};
    opacity: 0.8;
    border-radius: 10px;
    border: solid #B8860B;
    box-shadow: 0 4px 8px #000000;
    margin: 15px;

    h2 {
        margin: 15px 15px 0px 15px;
        font-size: 35px;
    }

    h2::first-letter {
        text-transform: uppercase;
    }

    h3 {
        margin: 10px;
        font-size: 22px;
        text-align: center;
    }

    img {
        width: 200px;
        margin: 15px;
    }
`

const Types = styled.ul`
    display: flex;
    
    li {
        margin: 5px;
        color: #000000;
        background-color: #B8860B;
        width: 60px;
        height: 20px;
        border-radius: 5px;
        text-align: center;
        font-size: 18px;
    }
`

const Abilities = styled.ul`
    margin: 10px;
    max-width: 600px;
`

const Moves = styled.ul`
    display: flex;
    width: 300px;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 20px;

    li {
        padding: 5px;
        margin: 5px;
        background-color: #B8860B;
        color: #000000;
        border-radius: 5px;
        font-size: 18px;
    }
`