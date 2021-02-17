import React, { useContext } from "react"
import Logo from "../atoms/Logo"
import styled, { ThemeContext } from "styled-components"
import { navigate } from "@reach/router"

const Nav: React.FC<{
    light?: boolean
    selected: "Home" | "About" | "Contact" | "Portfolio"
}> = ({ light, selected }) => {
    const { colors } = useContext(ThemeContext)

    const selectedColor = light ? colors.actionLight : colors.action
    const notSelectedColor = light ? colors.light : colors.dark

    function updatePage(page: typeof selected) {
        if (page === "Portfolio") {
            navigate("/portfolio")
            return
        }
        navigate("/")
    }

    return (
        <StyledNav>
            <Row onClick={() => updatePage("Home")}>
                <NavLogo
                    color={
                        selected === "Home" ? selectedColor : notSelectedColor
                    }
                />
                <NavTitle
                    noTransition
                    color={
                        selected === "Home" ? selectedColor : notSelectedColor
                    }
                >
                    Home
                </NavTitle>
            </Row>
            <NavTitle
                onClick={() => updatePage("Home")}
                color={selected === "About" ? selectedColor : notSelectedColor}
            >
                About
            </NavTitle>
            <NavTitle
                onClick={() => updatePage("Home")}
                color={
                    selected === "Contact" ? selectedColor : notSelectedColor
                }
            >
                Contact
            </NavTitle>
            <NavTitle
                onClick={() => updatePage("Home")}
                color={
                    selected === "Portfolio" ? selectedColor : notSelectedColor
                }
            >
                Portfolio
            </NavTitle>
        </StyledNav>
    )
}

export default Nav

const StyledNav = styled.nav`
    position: absolute;
    z-index: 5;
    padding: 5vw ${props => props.theme.space.sidePaddingMobile} 0;

    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    ${props => props.theme.breakpoints.tablet800} {
        display: grid;
        grid-template-rows: 1fr;
        grid-auto-flow: column;
        grid-auto-columns: min-content;
        grid-gap: 4vw;
        justify-content: inherit;
        padding: 5vw ${props => props.theme.space.sidePadding} 0;
    }
`

const NavLogo = styled(Logo)`
    width: 40px;
    height: 40px;
    margin: 0 ${props => props.theme.space.sidePaddingMobile} 0 0;
`

const Row = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: all 0.2s ease;
    &:hover {
        opacity: 0.5;
    }
`

const NavTitle = styled.span<{ color: string; noTransition?: boolean }>`
    color: ${props => props.color};
    font-size: ${props => props.theme.fontSizes.navSmall}px;
    font-weight: ${props => props.theme.fontWeights.bold};
    cursor: pointer;

    ${props => props.theme.breakpoints.tablet800} {
        font-size: ${props => props.theme.fontSizes.nav}px;
    }

    ${props =>
        props.noTransition
            ? ""
            : `
        transition: all 0.2s ease;
        &:hover {
            opacity: 0.5;
        }
    `}
`
