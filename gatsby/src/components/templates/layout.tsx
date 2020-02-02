import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import Header from "./header"
import "./layout.css"
import { ThemeProvider } from "styled-components"
import theme from "../../theme"
import Nav from "../molecules/nav"

interface Props {
    children: any
    lightNav?: boolean
}
const Layout: React.FC<Props> = ({ children, lightNav }) => {
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
            <div style={{ backgroundColor: theme.colors.light }}>
                <Nav light={lightNav} />
                <main>{children}</main>
                <footer></footer>
            </div>
        </ThemeProvider>
    )
}

export default Layout
