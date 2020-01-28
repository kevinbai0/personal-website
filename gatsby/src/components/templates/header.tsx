import React from "react"
import Helmet from "react-helmet"
import Nav from "../molecules/nav"

const Header: React.FC<{ siteTitle?: string }> = () => (
    <header>
        <Helmet>
            <link rel="stylesheet" href="https://use.typekit.net/mto5xfy.css" />
        </Helmet>
        <Nav />
    </header>
)

Header.defaultProps = {
    siteTitle: "",
}

export default Header
