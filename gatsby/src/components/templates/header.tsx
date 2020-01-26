import React from "react"
import Helmet from "react-helmet"

const Header: React.FC<{ siteTitle?: string }> = () => (
    <header>
        <Helmet>
            <link rel="stylesheet" href="https://use.typekit.net/mto5xfy.css" />
        </Helmet>
    </header>
)

Header.defaultProps = {
    siteTitle: "",
}

export default Header
