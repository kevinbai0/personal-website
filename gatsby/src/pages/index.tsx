import React from "react"
import Layout from "../components/templates/layout"
import SEO from "../components/templates/seo"
import ArtCanvas from "../components/molecules/ArtCanvas"
import styled from "styled-components"

const IndexPage = () => {
    return (
        <Layout>
            <SEO title="Home" />
            <LandingContainer>
                <ArtCanvas />
                <ContentLayer></ContentLayer>
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
    background-color: rgba(67, 31, 6, 0.22);
`
