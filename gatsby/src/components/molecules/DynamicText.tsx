import React, { useState } from "react"

interface Props {
    className?: string
    fetchUrl: string
    handleResponse: (
        res: Response,
        set: React.Dispatch<React.SetStateAction<string>>
    ) => void
}

export default ({ className, fetchUrl, handleResponse }: Props) => {
    const [textState, setTextState] = useState("")
    fetch(fetchUrl).then(res => handleResponse(res, setTextState))
    return <div className={className}>{textState}</div>
}
