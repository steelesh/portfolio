document.addEventListener("astro:page-load", () => {
	const copyButtons = document.querySelectorAll(".copy-button");
	for (const button of copyButtons) {
		const originalContent = button.innerHTML;

		button.addEventListener("click", function () {
			const preNode = this.closest("pre");
			if (preNode) {
				const codeContent = preNode.querySelector("code");
				if (codeContent) {
					navigator.clipboard
						.writeText(codeContent.textContent)
						.then(() => {
							if (!this.classList.contains("copied")) {
								const copiedIcon = document.createElementNS(
									"http://www.w3.org/2000/svg",
									"svg",
								);
								copiedIcon.setAttribute("xmlns", "http://www.w3.org/2000/svg");
								copiedIcon.setAttribute("width", "1.25em");
								copiedIcon.setAttribute("height", "1.25em");
								copiedIcon.setAttribute("viewBox", "0 0 24 24");
								copiedIcon.setAttribute("fill", "currentColor");

								const path = document.createElementNS(
									"http://www.w3.org/2000/svg",
									"path",
								);
								path.setAttribute(
									"d",
									"M9.86 18a1 1 0 0 1-.73-.32l-4.86-5.17a1 1 0 1 1 1.46-1.37l4.12 4.39l8.41-9.2a1 1 0 1 1 1.48 1.34l-9.14 10a1 1 0 0 1-.73.33Z",
								);
								copiedIcon.appendChild(path);

								// Create a new span element for "Copied!"
								const copiedText = document.createElement("span");
								copiedText.textContent = "Copied!";

								this.classList.add("fade-out");

								setTimeout(() => {
									this.innerHTML = ""; // Clear current button content
									this.appendChild(copiedIcon); // Append the icon
									this.appendChild(copiedText); // Append the "Copied!" text
									this.classList.remove("fade-out");
									this.classList.add("fade-in", "copied");

									setTimeout(() => {
										this.classList.remove("fade-in");
										this.classList.add("fade-out");

										setTimeout(() => {
											this.innerHTML = originalContent; // Restore original content
											this.classList.remove("fade-out");
											this.classList.add("fade-in");

											setTimeout(() => {
												this.classList.remove("fade-in", "copied");
											}, 300);
										}, 300);
									}, 1000);
								}, 300);
							}
						})
						.catch((err) => {
							console.error("Failed to copy: ", err);
						});
				}
			}
		});
	}
});
