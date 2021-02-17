import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql } from "gatsby"
import Layout from "./layout"
import SEO from "./seo"
import ProjectHeader from "../molecules/ProjectHeader"
import styled from "styled-components"
import Title from "../atoms/Title"

export default ({ data: { mdx } }) => {
    return (
        <Layout selected="Portfolio">
            <SEO title={mdx.frontmatter.name} />
            <Container>
                <MDXRenderer
                    scope={{ React, ProjectHeader }}
                    mainImage={mdx.frontmatter.mainImage.childImageSharp.fluid}
                    frontmatter={mdx.frontmatter}
                    components={{
                        h1: Title,
                        h2: Title,
                    }}
                >
                    {mdx.body}
                </MDXRenderer>
            </Container>
        </Layout>
    )
}

export const pageQuery = graphql`
    query BlogPostQuery($id: String) {
        mdx(id: { eq: $id }) {
            id
            body
            frontmatter {
                name
                github
                repoName
                languages
                frameworks
                devTools
                type
                mainImage {
                    childImageSharp {
                        fluid {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }
`

const Container = styled.div`
    padding: 100px ${props => props.theme.space.sidePaddingMobile};

    ${props => props.theme.breakpoints.tablet800} {
        padding: 200px ${props => props.theme.space.sidePadding};
    }
`
