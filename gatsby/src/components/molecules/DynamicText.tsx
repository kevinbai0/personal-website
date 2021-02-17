import React, { useState } from "react"
import Caption from "../atoms/Caption"
import repos from "../../lib/repos"

interface Props {
    className?: string
    handleResponse: (
        res: any,
        set: React.Dispatch<React.SetStateAction<string>>
    ) => void
}

export default ({ className, handleResponse }: Props) => {
    const [textState, setTextState] = useState("")
    repos.then(json => handleResponse(json, setTextState))
    return <Caption className={className}>{textState}</Caption>
}
