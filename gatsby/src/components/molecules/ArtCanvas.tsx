import React, { useRef, useEffect } from "react"
import styled from "styled-components"
import { DrawEngine, utils } from "artgenjs"
import { DrawableFunction, Draw } from "artgenjs/dist/types/types"

const Container = styled.div`
    position: absolute;
    left: -2vmax;
    top: -2vmax;
    width: 104vmax;
    height: 104vmax;
`

const backgroundAnim: DrawableFunction = () => {
    let globalX = utils.unwrap([-512, 512])
    let globalY = utils.unwrap([-512, 512])

    const myFunc = (x: number, y: number, s: number) => {
        const scale = 600
        x /= scale
        y /= scale
        return {
            x: Math.sin(2 * x * s) * scale,
            y: Math.cos(x * x + y * Math.sqrt(2)) * scale,
        }
    }
    const seed = utils.unwrap([
        [1.6, 1.79],
        [1.85, 2.0],
    ])
    console.log(seed)

    const points = [...Array(250)].map(() => {
        const values = myFunc(globalX, globalY, seed)
        globalX = values.x
        globalY = values.y
        return utils.GenPoint(values.x, values.y)
    })
    const draw: Draw = (n, count) => {
        points.forEach(point => {
            const values = myFunc(globalX, globalY, seed)
            globalX = values.x
            globalY = values.y
            point.mutate(values)
        })
        const line = utils.GenLine(points, {
            stroke:
                count < 480
                    ? utils.rgba(0, 0, 0, 0.01)
                    : utils.rgba(0, 0, 0, 0.001),
            lineWidth: 1,
        })
        return [line]
    }

    return {
        draw,
        iterate: x => x + 1,
        endIf: () => false,
    }
}

const ArtCanvas: React.FC<{ className?: string }> = ({ className }) => {
    const artgenRef = useRef<HTMLDivElement>()
    useEffect(() => {
        function skew(e: MouseEvent) {
            const x = e.clientX,
                y = e.clientY
            artgenRef.current.style.transform = `skew(${(x /
                window.innerWidth) *
                4 -
                2}deg, ${(y / window.innerHeight) * 4 - 2}deg)`
        }
        window.addEventListener("mousemove", skew)
        return () => window.removeEventListener("mousemove", skew)
    })
    useEffect(() => {
        const drawEngine = new DrawEngine(backgroundAnim, artgenRef.current)
        drawEngine.start()
    }, [])
    return <Container ref={artgenRef} className={className} />
}

export default ArtCanvas
