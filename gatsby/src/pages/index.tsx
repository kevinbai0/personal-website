import React from "react"
import Layout from "../components/templates/layout"
import SEO from "../components/templates/seo"
import LandingScreen from "../components/organisms/LandingScreen"
import PostLanding from "../components/organisms/PostLanding"

const IndexPage = () => {
    return (
        <Layout>
            <SEO title="Home" />
            <LandingScreen />
            <PostLanding />
        </Layout>
    )
}

export default IndexPage
