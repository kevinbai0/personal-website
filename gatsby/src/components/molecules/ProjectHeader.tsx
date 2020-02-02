import React from "react"
import styled from "styled-components"
import DynamicText from "./DynamicText"
import Img from "gatsby-image"
import FrontMatterStructure from "../../lib/FrontmatterStructure"

interface Props {
    frontMatter: FrontMatterStructure
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    mainImage: any
}

export default ({ frontMatter, mainImage }: Props) => {
    console.log(frontMatter)
    return (
        <Container>
            <DynamicText
                fetchUrl="https://api.github.com/users/kevinbai0/repos"
                handleResponse={(res, set) => {
                    res.json().then(json => {
                        const artgenKey = Object.keys(json).find(
                            key => json[key].name === frontMatter.repoName
                        )
                        set(json[artgenKey].description)
                    })
                }}
            />
            <Img fluid={mainImage} />
        </Container>
    )
}

const Container = styled.div``
