import type { ReactElement } from 'react'

export const IconPaths: Record<string, (color: string) => ReactElement> = {
    about: (color: string) => (
        <path
            fill={color}
            d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4"
        ></path>
    ),
    arrow: (color: string) => (
        <path fill={color} d="M14 16.94v-4H5.08l-.03-2.01H14V6.94l5 5Z"></path>
    ),
    home: (color: string) => (
        <path fill={color} d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8z"></path>
    ),
    notes: (color: string) => (
        <path
            fill={color}
            d="m14.06 9l.94.94L5.92 19H5v-.92zm3.6-6c-.25 0-.51.1-.7.29l-1.83 1.83l3.75 3.75l1.83-1.83c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29m-3.6 3.19L3 17.25V21h3.75L17.81 9.94z"
        ></path>
    ),
    search: (color: string) => (
        <path
            fill={color}
            d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14"
        />
    ),
    pulse: (color: string) => (
        <>
            <circle cx={12} cy={12} r={4} fill={color} />

            <circle cx={12} cy={12} r={0} fill={color}>
                <animate
                    attributeName="r"
                    calcMode="spline"
                    dur="1.2s"
                    keySplines=".52,.6,.25,.99"
                    repeatCount="indefinite"
                    values="0;11"
                />
                <animate
                    attributeName="opacity"
                    calcMode="spline"
                    dur="1.2s"
                    keySplines=".52,.6,.25,.99"
                    repeatCount="indefinite"
                    values="1;0"
                />
            </circle>
        </>
    ),
    work: (color: string) => (
        <path
            fill={color}
            d="M21 16H3V4h18m0-2H3c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h7v2H8v2h8v-2h-2v-2h7a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2"
        ></path>
    ),
    cv: (color: string) => (
        <>
            <path
                fill={color}
                d="M6.5 12.5a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1zm0 2.5a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1z"
            />
            <path
                fill={color}
                fillRule="evenodd"
                d="M11.185 1H4.5A1.5 1.5 0 0 0 3 2.5v15A1.5 1.5 0 0 0 4.5 19h11a1.5 1.5 0 0 0 1.5-1.5V7.202a1.5 1.5 0 0 0-.395-1.014l-4.314-4.702A1.5 1.5 0 0 0 11.185 1M4 2.5a.5.5 0 0 1 .5-.5h6.685a.5.5 0 0 1 .369.162l4.314 4.702a.5.5 0 0 1 .132.338V17.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5z"
                clipRule="evenodd"
            />
            <path
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.5 2.1v4.7h4.7"
            />
            <path
                fill={color}
                d="M8.134 6.133a1.067 1.067 0 1 0 0-2.133a1.067 1.067 0 0 0 0 2.133"
            />
            <path
                fill={color}
                fillRule="evenodd"
                d="M10.266 8.444c0-1.134-.955-1.955-2.133-1.955S6 7.309 6 8.444v.534a.356.356 0 0 0 .356.355h3.555a.356.356 0 0 0 .355-.355z"
                clipRule="evenodd"
            />
        </>
    ),
}
