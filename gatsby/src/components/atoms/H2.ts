import styled from "styled-components"
import { StyledAnimatedProps } from "../../lib/Animated"

export default styled.h2<StyledAnimatedProps>`
    font-size: ${props => props.theme.fontSizes.headerSmall}px;
    font-family: ${props => props.theme.fonts.title};
    color: ${props => props.theme.colors.neutral};
    margin: 0;

    line-height: 1.25;

    ${props => props.theme.breakpoints.tablet800} {
        font-size: ${props => props.theme.fontSizes.header}px;
    }

    ${props => props.animationStyle};
    ${props =>
        props.transition &&
        `
        transition: ${props.transition}
    `}
`
