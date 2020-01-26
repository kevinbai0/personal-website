import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { DrawEngine, utils } from "artgenjs";
import { DrawableFunction, Draw } from "artgenjs/dist/types/types";

const ArtCanvas: React.FC<{className?: string}> = ({className}) => {
    const artgenRef = useRef<HTMLDivElement>();
    useEffect(() => {
        const drawEngine = new DrawEngine(backgroundAnim, artgenRef.current);
        drawEngine.start();
    }, []);
    return (
        <Container ref={artgenRef} className={className}/>
    )
}

export default ArtCanvas;

const Container = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100vmax;
    height: 100vmax;
`;

const backgroundAnim: DrawableFunction = () => {
    let globalX = utils.unwrap([-512,512])
    let globalY = utils.unwrap([-512,512])
  
    const myFunc = (x: number, y: number, s: number) => {
      const scale = 600
      x /= scale;
      y /= scale;
      return {
        x: Math.sin(2 * x * s) * scale,
        y: Math.cos(x * x + y * Math.sqrt(2)) * scale
      }
    }
    const seed = utils.unwrap([[1.6, 1.79], [1.85, 2.0]]);
  
    const points = [...Array(1000)].map((_, i) => {
      let values = myFunc(globalX, globalY, seed)
      globalX = values.x;
      globalY = values.y;
      return utils.GenPoint(values.x, values.y)
    })
    const draw: Draw = (n, count) => {
      points.forEach(point => {
        const values = myFunc(globalX, globalY, seed)
        globalX = values.x;
        globalY = values.y;
        point.mutate(values)
      })
      let line = utils.GenLine(points, {
        stroke: count < 120 ? utils.rgba(0,0,0,0.01) : (utils.rgba(0,0,0, 0.001)),
        lineWidth: 1
      })
      return [line]
    }
  
    return {
      draw,
      iterate: x => x + 1,
      endIf: () => false
    }
  }