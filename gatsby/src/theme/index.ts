import {} from "styled-components"

const light = "#FAF7F5"
const lightShade = "#F4EBDE"
const orange = "#D18917"
const orangeTint = "#FFCB7E"
const orangeShade = "#C9B290"
const brown = "#462E08"

interface Breakpoints {
    [key: number]: number
    mobile_576?: string
    tablet_768?: string
    desktop_992?: string
    desktop_1200?: string
}

const breakpoints: Breakpoints = [576, 768, 992, 1200]
breakpoints.mobile_576 = `@media only screen and (min-width: ${breakpoints[0]}px)`
breakpoints.tablet_768 = `@media only screen and (min-width: ${breakpoints[1]}px)`
breakpoints.desktop_992 = `@media only screen and (min-width: ${breakpoints[2]}px)`
breakpoints.desktop_1200 = `@media only screen and (min-width: ${breakpoints[3]}px)`

interface FontSize {
    [key: number]: number
    body?: number
    caption?: number
    nav?: number
    navSmall?: number
    header?: number
    headerSmall?: number
    title?: number
    titleSmall?: number
}

const fontSizes: FontSize = [18, 24, 36, 54, 84]
fontSizes.body = fontSizes[0]
fontSizes.caption = fontSizes[1]
fontSizes.nav = fontSizes[1]
fontSizes.navSmall = fontSizes[0]
fontSizes.header = fontSizes[2]
fontSizes.headerSmall = fontSizes[1]
fontSizes.title = fontSizes[4]
fontSizes.titleSmall = fontSizes[3]

type Weight =
    | "100"
    | "200"
    | "300"
    | "400"
    | "500"
    | "600"
    | "700"
    | "800"
    | "900"
interface FontWeight {
    regular: Weight
    bold: Weight
    black: Weight
}

const fontWeights: FontWeight = {
    regular: "400",
    bold: "700",
    black: "900",
}

const fonts = {
    title: "farnham-headline",
    header: "farnham-display",
    body: "farnham-text",
}

const theme = {
    colors: {
        light,
        neutral: orangeShade,
        dark: brown,
        action: orange,
        actionLight: orangeTint,
        footer: lightShade,
    },
    breakpoints,
    fontSizes,
    fontWeights,
    fonts,
}

declare module "styled-components" {
    type Theme = typeof theme
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    export interface DefaultTheme extends Theme {}
}

export default theme
