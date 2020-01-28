import React, { useEffect } from "react"
import styled from "styled-components"

import ArtCanvas from "../molecules/ArtCanvas"
import Title from "../atoms/Title"
import Caption from "../atoms/Caption"
import Button from "../atoms/Button"

import { useAnimated } from "../../lib/Animated"

export default () => {
    const titleAnim = useAnimated("default", {
        default: "opacity: 0; transform: translateY(100%);",
        in: "opacity: 1; transform: translateY(0);",
    })

    useEffect(() => {
        titleAnim.updateState("in", 200)
    }, [])
    return (
        <LandingContainer>
            <ArtCanvas />
            <ContentLayer>
                <InlineRow>
                    <Title>Hi, I&apos;m&nbsp;</Title>
                    <Title
                        animationStyle={titleAnim.style}
                        transition="all 0.2s ease"
                    >
                        Kevin Bai
                    </Title>
                </InlineRow>
                <MyCaption>
                    I’m a growing developer interested in almost everything! I
                    enjoy learning about front-end, UI/UX, DevOps, robotics, and
                    embedded systems.
                </MyCaption>
                <InlineRow>
                    <Button>Portfolio</Button>
                    <SecondaryButton variant="secondary">
                        Resume
                    </SecondaryButton>
                </InlineRow>
            </ContentLayer>
        </LandingContainer>
    )
}

const LandingContainer = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
`

const ContentLayer = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(67, 31, 6, 0.32);
    padding: 40vh ${props => props.theme.space.sidePaddingMobile} 0;
    ${props => props.theme.breakpoints.tablet800} {
        padding: 40vh ${props => props.theme.space.sidePadding} 0;
    }
`

const InlineRow = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const MyCaption = styled(Caption)`
    margin: 10px 0 30px;
    max-width: 800px;
`

const SecondaryButton = styled(Button)`
    margin: 0 0 0 20px;
`
