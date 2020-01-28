import styled from "styled-components"
import { StyledAnimatedProps } from "../../lib/Animated"

export default styled.p<StyledAnimatedProps>`
    font-size: ${props => props.theme.fontSizes.caption}px;
    line-height: 1.5;
    font-weight: ${props => props.theme.fontWeights.regular};
    color: ${props => props.theme.colors.light};
    margin: 0;

    ${props => props.theme.breakpoints.tablet800} {
        font-size: ${props => props.theme.fontSizes.caption}px;
    }

    ${props => props.animationStyle};
    ${props =>
        props.transition &&
        `
        transition: ${props.transition}
    `}
`
