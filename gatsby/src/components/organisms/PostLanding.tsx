import React from "react"
import styled from "styled-components"
import H2 from "../atoms/H2"
import Body from "../atoms/Body"
import PersonalImage from "../molecules/PersonalImage"

export default () => {
    return (
        <Container>
            <SectionTitle>A bit more about me</SectionTitle>
            <ImageMe />

            <AboutMeBody>
                I’m a first year student studying Computer Science at the
                University of Waterloo in Canada. I consider myself both a
                designer and a developer. While I enjoy developing across the
                full stack, I’m a frontend developer at heart.
                <br /> <br />
                Currently, I’m in love with Javascript where I enjoy exploring
                the language itself, learning the newest front-end frameworks,
                and developing new libraries. As a designer, I love the process
                of designing the UI and UX of my projects before I develop them.
                <br /> <br />
                Outside of design and frontend development, I enjoy tinkering
                with hardware and robotics. I’m a proud alumni of FIRST
                Robotics, where I founded the team at my high school. They’re
                called Falcotronix.
                <br /> <br />
                At school, I enjoy spending my time at Waterloop—Waterloo’s
                Hyperloop student-design team—where I lead a web-based project
                and work with the embedded software team. In addition, I relax
                by playing intramural soccer and volleyball, singing at ACE
                Acapella, and chilling with friends.
            </AboutMeBody>

            <Section2Title>What I&apos;m Currently Working On</Section2Title>
        </Container>
    )
}

const Container = styled.div`
    padding: 50px ${props => props.theme.space.sidePaddingMobile} 0;

    ${props => props.theme.breakpoints.tablet800} {
        display: grid;
        padding: 50px ${props => props.theme.space.sidePadding} 0;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 80px;
    }
`

const SectionTitle = styled(H2)`
    ${props => props.theme.breakpoints.tablet800} {
        text-align: right;
    }
`

const AboutMeBody = styled(Body)`
    margin: 30px 0 50px;
    ${props => props.theme.breakpoints.tablet800} {
        margin: 80px 0 0;
    }
    grid-column: 2/4;
    grid-row: 1/3;
`

const ImageMe = styled(PersonalImage)`
    grid-column: 1/2;
    height: inherit;
    width: 100vw;
    align-self: start;
    justify-self: end;
    border-radius: 3px;
    margin: 20px -${props => props.theme.space.sidePaddingMobile} 0;

    ${props => props.theme.breakpoints.tablet800} {
        margin: 0;
        width: 275px;
        height: 275px;
    }
`

const Section2Title = styled(H2)`
    ${props => props.theme.breakpoints.tablet800} {
        grid-column: 3/4;
    }
`
