import React, { useContext } from "react"
import Logo from "../atoms/Logo"
import styled, { ThemeContext } from "styled-components"

const Nav: React.FC<{}> = () => {
    const { colors } = useContext(ThemeContext)

    return (
        <StyledNav>
            <Row>
                <NavLogo color={colors.actionLight} />
                <NavTitle noTransition color={colors.actionLight}>
                    Home
                </NavTitle>
            </Row>
            <NavTitle color={colors.light}>About</NavTitle>
            <NavTitle color={colors.light}>Contact</NavTitle>
            <NavTitle color={colors.light}>Portfolio</NavTitle>
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
