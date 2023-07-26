import React, { useContext } from "react"
import { ThemeContext, themes } from "../../contexts/theme-context"
import moonImage from "../../images/moon.png"
import sunImage from "../../images/sun.png"
import { styled } from "styled-components"

export const ThemeTogglerButton = () => {

    const { theme, setTheme } = useContext(ThemeContext)

    return (
        <div>
            <ThemeButton
            onClick={() => setTheme(theme === themes.light ? themes.dark : themes.light)}
            style={theme}>
                <img alt='light dark theme' src={(theme === themes.light ? sunImage : moonImage)} />
            </ThemeButton>
        </div>
    )
}


const ThemeButton = styled.button`
    background-color: ${props => props.theme.backgroundColor};
    border-radius: 20px;
    width: 60px;
    height: 35px;
    box-shadow: 0 4px 8px #000000;

    img {
        width: 24px;
        height: 24px;
    }

    img:hover{
        opacity: 0.6;
    }
`
