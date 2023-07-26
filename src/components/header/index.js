import React from 'react'
import styled from 'styled-components'
import { ThemeTogglerButton } from '../theme-toggler-button'

const Header = () => {
    return (
        <Nav>
            <div>
                <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png" alt='Logo-Pokemon' />
            </div>
            <ThemeTogglerButton />
        </Nav>
    )
}

const Nav = styled.nav`
    padding: 5px;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 50px 5px 50px;
    box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.5);
`

const Image = styled.img`
    height: 50px;
`

export default Header

