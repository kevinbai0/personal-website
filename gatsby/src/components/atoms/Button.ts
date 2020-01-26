import styled from "styled-components"
import { StyledAnimatedProps } from "../../lib/Animated"

export default styled.button<StyledAnimatedProps>`
    font-size: ${props => props.theme.fontSizes.caption}px;
    line-height: 1.2;
    font-weight: ${props => props.theme.fontWeights.regular};
    color: ${props => props.theme.colors.light};
    background-color: ${props => props.theme.colors.action};
    padding: 5px 28px;
    margin: 0;
    border: none;
    border-radius: 3px;
    box-shadow: 0 2px 18px 0 rgba(0, 0, 0, 0.2);
    cursor: pointer;
    outline: none;
    ${props => props.theme.breakpoints.tablet_768} {
        font-size: ${props => props.theme.fontSizes.caption}px;
    }

    &:hover {
        transform: scale(1.02);
        box-shadow: 0 3px 24px 0 rgba(0, 0, 0, 0.3);
    }
    &:active {
        transform: scale(1.04);
        box-shadow: 0 3px 24px 0 rgba(0, 0, 0, 0.4);
    }

    ${props => props.animationStyle};
    ${props =>
        props.transition
            ? `
        transition: box-shadow 0.1s ease, transform 0.1s ease, ${props.transition}
    `
            : "transition: all 0.1s ease;"}
`
