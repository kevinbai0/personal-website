import React, { useRef, useEffect } from "react"
import styled from "styled-components"
import { DrawEngine, utils, Animated } from "artgenjs"
import { DrawableFunction, Draw, Point } from "artgenjs/dist/types/types"

const { rgba, unwrap, GenPoint, GenLine } = utils

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
    let lines: Animated.AnimatedLine[] = []
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
                    ? utils.rgba(0, 0, 0, 0.005)
                    : utils.rgba(0, 0, 0, 0.001),
            lineWidth: 1,
        })
        lines.push(new Animated.AnimatedLine(line, 0))
        lines = lines.filter(line => !line.ended)

        const toDraw = lines.map(line => line.update(0.001))
        return toDraw
    }

    return {
        draw,
        iterate: x => x + 1,
        endIf: () => false,
    }
}

const newAnim: DrawableFunction = () => {
    const seed = unwrap([0, 3])
    console.log(seed)
    const points = utils
        .generate(1, () => {
            return {
                x: utils.unwrap([-512, 512]),
                y: utils.unwrap([-512, 512]),
            }
        })
        .map((point, i) =>
            GenPoint(point.x, point.y, {
                fill: rgba(0, 0, 0, 1),
                radius: 2,
            })
        )

    const draw: Draw = (n, count) => {
        points.forEach(point => {
            const x = unwrap(point.x) / 512
            const y = unwrap(point.y) / 512
            point.mutate({
                x: Math.sin(2 * x * seed) * 512,
                y: Math.cos(x * x + y * Math.sqrt(seed)) * 512,
            })
        })
        return points
    }

    return {
        draw,
        iterate: x => x,
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
        const drawEngine = new DrawEngine(newAnim, artgenRef.current)
        drawEngine.start()
    }, [])
    return <Container ref={artgenRef} className={className} />
}

export default ArtCanvas
