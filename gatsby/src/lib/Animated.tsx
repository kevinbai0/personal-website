import { useState } from "react"

export interface StyledAnimatedProps {
    animationStyle?: string
    transition?: string
}

export interface StyledStates {
    [key: string]: string
}

export function useAnimated(initialState: string, styles: StyledStates) {
    const [animationState, setAnimationState] = useState<{
        state: string
        style?: string
    }>({
        state: initialState,
        style: styles[initialState],
    })

    function updateState(state: string, delay?: number): Promise<void> {
        function update() {
            setAnimationState({ state, style: styles[state] })
        }
        if (!delay) {
            return new Promise(res => {
                update()
                res()
            })
        }

        return new Promise(res =>
            setTimeout(() => {
                update()
                res()
            }, delay)
        )
    }
    return {
        style: animationState.style,
        updateState,
    }
}
