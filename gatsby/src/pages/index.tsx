import React from "react"
import Layout from "../components/templates/layout"
import SEO from "../components/templates/seo"
import LandingScreen from "../components/organisms/LandingScreen"
import PostLanding from "../components/organisms/PostLanding"
import repos from "../lib/repos"

const IndexPage = () => {
    repos.then(pos => {
        const artgenKey = Object.keys(pos).find(
            key => pos[key].name === "ArtGen"
        )
        console.log(pos[artgenKey].description)
    })
    return (
        <Layout>
            <SEO title="Home" />
            <LandingScreen />
            <PostLanding />
        </Layout>
    )
}

export default IndexPage
