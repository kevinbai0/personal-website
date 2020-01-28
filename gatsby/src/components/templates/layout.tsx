/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import Header from "./header"
import "./layout.css"
import { ThemeProvider } from "styled-components"
import theme from "../../theme"

const Layout = ({ children }) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <ThemeProvider theme={theme}>
            <Header siteTitle={data.site.siteMetadata.title} />
            <div>
                <main>{children}</main>
                <footer></footer>
            </div>
        </ThemeProvider>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
