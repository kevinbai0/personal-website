import styled from "styled-components"
import { StyledAnimatedProps } from "../../lib/Animated"

const Title = styled.h1<StyledAnimatedProps>`
    font-size: ${props => props.theme.fontSizes.titleSmall}px;
    font-weight: ${props => props.theme.fontWeights.black};
    color: ${props => props.theme.colors.light};
    margin: 0;

    ${props => props.theme.breakpoints.tablet_768} {
        font-size: ${props => props.theme.fontSizes.title}px;
    }

    ${props => props.animationStyle};
    ${props =>
        props.transition &&
        `
        transition: ${props.transition}
    `}
`

export default Title
