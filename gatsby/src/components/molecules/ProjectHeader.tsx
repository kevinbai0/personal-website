import React, { useEffect } from "react"
import styled from "styled-components"
import DynamicText from "./DynamicText"
import Img from "gatsby-image"
import FrontMatterStructure from "../../lib/FrontmatterStructure"
import Title from "../atoms/Title"
import Button from "../atoms/Button"
import { useAnimated } from "../../lib/Animated"

interface Props {
    frontMatter: FrontMatterStructure
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    mainImage: any
}

export default ({ frontMatter, mainImage }: Props) => {
    const introAnimated = useAnimated("default", {
        default: "opacity: 0; transform: translateY(100%);",
        in: "opacity: 1; transform: translateY(0);",
    })
    useEffect(() => {
        console.log(introAnimated.style)
        introAnimated
            .updateState("in", 500)
            .then(() => console.log(introAnimated.style))
    }, [])
    return (
        <Container>
            <LeftColumn>
                <H1
                    animationStyle={introAnimated.style}
                    transition="all 0.2s ease;"
                >
                    {frontMatter.repoName}
                </H1>
                <ButtonRow>
                    <Button>
                        {frontMatter.github.replace(
                            "https://www.github.com/",
                            ""
                        )}
                    </Button>
                </ButtonRow>

                <Caption
                    handleResponse={(json, set) => {
                        const artgenKey = Object.keys(json).find(
                            key => json[key].name === frontMatter.repoName
                        )
                        set(json[artgenKey].description)
                    }}
                />
            </LeftColumn>
            <Image fluid={mainImage} />
        </Container>
    )
}

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 40px;
`

const LeftColumn = styled.div``

const H1 = styled(Title)`
    color: ${props => props.theme.colors.neutral};
`

const Caption = styled(DynamicText)`
    color: ${props => props.theme.colors.dark};
    grid-column: 1/2;
    align-self: start;
`

const Image = styled(Img)`
    grid-row: 1/3;
    grid-column: 2/3;
    width: min(400px, 30vw);
    height: min(400px, 30vw);
    border-radius: 3px;
`

const ButtonRow = styled.div`
    display: flex;
    margin: 15px 0 40px;
`
