import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import styled from 'styled-components'
import PokemonCard from "../pokemon-card"
import createPokemonList from "../../services/create-pokemon-list"
import SearchBar from "../search-pokemon"

const PokemonList = () => {

    const [count, setOffset] = useState(10)
    const [pokemonList, setPokemonList] = useState([])

    useEffect( () => {
        const fetchData = async () => {
            const list = await createPokemonList(count)
            setPokemonList(list)
        }
        fetchData()

    }, [count])

    return (
        <Section>
            <SearchBar />
            <List>
                {pokemonList.map((pokemon, index) => (
                    <li key={index} >
                        <Link to={`/pokemon-details/${pokemon.name}`}>
                            <PokemonCard pokemonName={pokemon.name} />
                        </Link>
                    </li>
                ))}
            </List>
            <BtnLoadMore onClick={() => setOffset(count + 10)}>
                Load More
            </BtnLoadMore>
        </Section>
    )
}

const Section = styled.section`
    margin: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;

    button:hover {
        opacity: 0.8;
    }
`

const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100vw;

    li:hover {
        opacity: 0.6;
    }
`

const BtnLoadMore = styled.button`
    width: 100px;
    height: 30px;
    background-color: #000080;
    box-shadow: 0 5px 10px #000000;
    color: #fff;
    border-radius: 5px;
    margin: 20px;
`

export default PokemonList