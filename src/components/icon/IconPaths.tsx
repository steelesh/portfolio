import type { ReactElement } from "react";

export const IconPaths: Record<string, (color: string) => ReactElement> = {
	arrow: (color: string) => (
		<path fill={color} d="M14 16.94v-4H5.08l-.03-2.01H14V6.94l5 5Z" />
	),
	home: (color: string) => (
		<path fill={color} d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8z" />
	),
	about: (color: string) => (
		<path
			fill={color}
			d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4"
		/>
	),
	notes: (color: string) => (
		<path
			fill={color}
			d="m14.06 9l.94.94L5.92 19H5v-.92zm3.6-6c-.25 0-.51.1-.7.29l-1.83 1.83l3.75 3.75l1.83-1.83c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29m-3.6 3.19L3 17.25V21h3.75L17.81 9.94z"
		/>
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
		/>
	),
	cv: (color: string) => (
		<>
			<g fill="none">
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
					fill={color}
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
			</g>
		</>
	),
	linkedin: (color: string) => (
		<path
			fill={color}
			d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
		/>
	),
	github: (color: string) => (
		<path
			fill={color}
			d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
		/>
	),
	rss: (color: string) => (
		<path
			fill={color}
			d="M6.18 15.64a2.18 2.18 0 0 1 2.18 2.18C8.36 19 7.38 20 6.18 20C5 20 4 19 4 17.82a2.18 2.18 0 0 1 2.18-2.18M4 4.44A15.56 15.56 0 0 1 19.56 20h-2.83A12.73 12.73 0 0 0 4 7.27zm0 5.66a9.9 9.9 0 0 1 9.9 9.9h-2.83A7.07 7.07 0 0 0 4 12.93z"
		/>
	),
};
