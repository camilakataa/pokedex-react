import React, { useEffect, useState } from "react";
import getPokemonsAbilities from "../../services/get-pokemon-abilities";
import { styled } from "styled-components";

const PokemonAbilities = (props) => {

    const { abilitiesUrl } = props
    const [ability, setAbility] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            const response = await getPokemonsAbilities(abilitiesUrl)
            setAbility(response)
        }
        fetchData()

    }, [abilitiesUrl])


    return (
        <Div>
            <h4>{ability.name}</h4>
            <p>{ability.effect_entries?.filter((effect) => effect.language?.name === 'en').map((element, index) => {
                return (
                    <li key={index}>
                        {element.effect}
                    </li>
                )
            })}</p>
        </Div>
    )
}

export default PokemonAbilities

const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    h4 {
        background-color: #B8860B;
        color: #000000;
        padding: 4px;
        border-radius: 5px;
        text-align: center;
        margin: 8px;
        font-size: 18px;
    }

    p {
        text-align: center;
    }
`