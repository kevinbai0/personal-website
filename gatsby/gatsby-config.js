module.exports = {
    siteMetadata: {
        title: "Personal Website",
        description: "Kevin Bai's personal website & portfolio",
        author: "@kevinbai0",
    },
    plugins: [
        "gatsby-plugin-typescript",
        "gatsby-plugin-react-helmet",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: "./src/images",
            },
        },
        {
            resolve: "gatsby-plugin-styled-components",
            options: {},
        },
        "gatsby-transformer-sharp",
        "gatsby-plugin-sharp",
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                name: "Kevin Bai",
                short_name: "kevinbai",
                start_url: "/",
                background_color: "#FAF7F5",
                theme_color: "#D18917",
                display: "minimal-ui",
                icon: "src/images/favicon.png", // This path is relative to the root of the site.
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}
