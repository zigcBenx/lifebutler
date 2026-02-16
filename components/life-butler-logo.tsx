import { SVGProps } from "react"

export function LifeButlerLogo(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            <path d="M12 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
            <path d="M5 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v2" />
            <path d="M8.5 14l1.5 8" />
            <path d="M15.5 14l-1.5 8" />
            <path d="M12 14v4" />
            <path d="M10 16h4" />
        </svg>
    )
}
