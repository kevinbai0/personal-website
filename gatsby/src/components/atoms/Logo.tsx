import React from "react"

const Logo: React.FC<{ color?: string; className?: string }> = ({
    color,
    className,
}) => {
    return (
        <svg
            xlinkHref="http://www.w3.org/1999/xlink"
            width="197"
            height="197"
            viewBox="0 0 197 197"
            className={className}
        >
            <defs>
                <clipPath id="clip-Artboard_1">
                    <rect width="197" height="197" />
                </clipPath>
            </defs>
            <g
                id="Artboard_1"
                data-name="Artboard – 1"
                clipPath="url(#clip-Artboard_1)"
            >
                <rect width="197" height="197" fill="rgba(255,255,255,0)" />
                <g
                    id="Ellipse_6"
                    data-name="Ellipse 6"
                    fill="rgba(255,255,255,0)"
                    stroke={color ?? "#131313"}
                    strokeWidth="12"
                >
                    <circle cx="98.5" cy="98.5" r="98.5" stroke="none" />
                    <circle cx="98.5" cy="98.5" r="92.5" fill="none" />
                </g>
                <path
                    id="Path_14"
                    data-name="Path 14"
                    d="M9579.6,155.36c-104.2,45.353-25.411-138.479-5.775-30.325s-26.686,81.666-69.357,37.958S9683.8,110.007,9579.6,155.36Z"
                    transform="translate(-9453.231 -45.767)"
                    fill="none"
                    stroke={color ?? "#131313"}
                    strokeLinecap="square"
                    strokeWidth="12"
                />
            </g>
        </svg>
    )
}

export default Logo
