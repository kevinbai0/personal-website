import React, { useEffect } from "react"
import Layout from "../components/templates/layout"
import SEO from "../components/templates/seo"
import ArtCanvas from "../components/molecules/ArtCanvas"
import styled from "styled-components"
import Title from "../components/atoms/Title"
import { useAnimated } from "../lib/Animated"
import Caption from "../components/atoms/Caption"
import Button from "../components/atoms/Button"

const IndexPage = () => {
    const titleAnim = useAnimated("default", {
        default: "opacity: 0; transform: translateY(100%);",
        in: "opacity: 1; transform: translateY(0);",
    })

    useEffect(() => {
        titleAnim.updateState("in", 200)
    }, [])

    return (
        <Layout>
            <SEO title="Home" />
            <LandingContainer>
                <ArtCanvas />
                <ContentLayer>
                    <InlineTitle>
                        <Title>Hi, I&apos;m&nbsp;</Title>
                        <Title
                            animationStyle={titleAnim.style}
                            transition="all 0.2s ease"
                        >
                            Kevin Bai
                        </Title>
                    </InlineTitle>
                    <MyCaption>
                        I’m a developer interested in UI/UX Design, front-end
                        websites, and mobile apps.
                    </MyCaption>
                    <InlineTitle>
                        <Button>Portfolio</Button>
                    </InlineTitle>
                </ContentLayer>
            </LandingContainer>
        </Layout>
    )
}

export default IndexPage

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
    padding: 30vh 10px 0;
    ${props => props.theme.breakpoints.tablet_768} {
        padding: 40vh 10vw 0;
    }
`

const InlineTitle = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const MyCaption = styled(Caption)`
    margin: 10px 0 20px;
    max-width: 700px;
`
