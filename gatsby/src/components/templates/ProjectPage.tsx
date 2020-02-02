import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql } from "gatsby"
import Layout from "./layout"
import SEO from "./seo"
import DynamicText from "../molecules/DynamicText"
import Img from "gatsby-image"
import styled from "styled-components"

export default ({ data: { mdx } }) => {
    return (
        <Layout>
            <SEO title={mdx.frontmatter.name} />
            <Image fluid={mdx.frontmatter.mainImage.childImageSharp.fluid} />
            <MDXRenderer scope={{ React, DynamicText }}>{mdx.body}</MDXRenderer>
        </Layout>
    )
}

const Image = styled(Img)`
    width: 400px;
`

export const pageQuery = graphql`
    query BlogPostQuery($id: String) {
        mdx(id: { eq: $id }) {
            id
            body
            frontmatter {
                name
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
