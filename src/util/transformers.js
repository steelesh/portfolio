export const transformerFileName = () => {
	return {
		pre(node) {
			if (this.options?.meta?.__raw) {
				const filenameMatch = this.options.meta.__raw.match(/filename="(.+?)"/);
				if (filenameMatch) {
					const filename = filenameMatch[1];

					const filenameText = {
						type: "element",
						tagName: "span",
						properties: { className: ["filename"] },
						children: [{ type: "text", value: filename }],
					};

					const filenameContainer = {
						type: "element",
						tagName: "div",
						properties: { className: ["filename-container"] },
						children: [filenameText],
					};
					node.children.unshift(filenameContainer);
				}
			}
		},
	};
};

export const transformerFileType = () => {
	return {
		pre(node) {
			if (node.properties.dataLanguage) {
				const language = node.properties.dataLanguage;
				const languageTextContent = {
					type: "element",
					tagName: "span",
					properties: { className: ["language"] },
					children: [{ type: "text", value: language }],
				};
				node.children.unshift(languageTextContent);
			}
		},
	};
};
export const transformerCopyButton = () => {
	return {
		pre(node) {
			if (node.tagName === "pre") {
				const copyButton = {
					type: "element",
					tagName: "button",
					properties: {
						className: ["copy-button"],
					},
					children: [
						{
							type: "element",
							tagName: "svg",
							properties: {
								xmlns: "http://www.w3.org/2000/svg",
								width: "1.25em",
								height: "1.25em",
								viewBox: "0 0 24 24",
								fill: "none",
								stroke: "currentColor",
								strokeLinecap: "round",
								strokeLinejoin: "round",
								strokeWidth: "1.5",
							},
							children: [
								{
									type: "element",
									tagName: "g",
									properties: {
										fill: "none",
										stroke: "currentColor",
										strokeLinecap: "round",
										strokeLinejoin: "round",
										strokeWidth: "1.5",
									},
									children: [
										{
											type: "element",
											tagName: "path",
											properties: {
												d: "M18.327 7.286h-8.044a1.93 1.93 0 0 0-1.925 1.938v10.088c0 1.07.862 1.938 1.925 1.938h8.044a1.93 1.93 0 0 0 1.925-1.938V9.224c0-1.07-.862-1.938-1.925-1.938",
											},
										},
										{
											type: "element",
											tagName: "path",
											properties: {
												d: "M15.642 7.286V4.688c0-.514-.203-1.007-.564-1.37a1.92 1.92 0 0 0-1.361-.568H5.673c-.51 0-1 .204-1.36.568a1.95 1.95 0 0 0-.565 1.37v10.088c0 .514.203 1.007.564 1.37s.85.568 1.361.568h2.685",
											},
										},
									],
								},
							],
						},
					],
				};
				node.children.unshift(copyButton);
			}
		},
	};
};
