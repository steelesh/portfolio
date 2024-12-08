document.addEventListener('astro:page-load', () => {
    const animateCopyButton = (button, originalContent) => {
        const copiedIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
        Object.entries({
            xmlns: 'http://www.w3.org/2000/svg',
            width: '1.25em',
            height: '1.25em',
            viewBox: '0 0 24 24',
            fill: 'currentColor',
        }).forEach(([key, value]) => copiedIcon.setAttribute(key, value))

        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path')
        path.setAttribute('d', 'M9.86 18a1 1 0 0 1-.73-.32l-4.86-5.17a1 1 0 1 1 1.46-1.37l4.12 4.39l8.41-9.2a1 1 0 1 1 1.48 1.34l-9.14 10a1 1 0 0 1-.73.33Z')
        copiedIcon.appendChild(path)

        const copiedText = document.createElement('span')
        copiedText.textContent = 'Copied!'
        button.classList.add('fade-out')

        setTimeout(() => {
            button.innerHTML = ''
            button.append(copiedIcon, copiedText)
            button.classList.replace('fade-out', 'fade-in')
            button.classList.add('copied')

            setTimeout(() => {
                button.classList.replace('fade-in', 'fade-out')
                setTimeout(() => {
                    button.innerHTML = originalContent
                    button.classList.replace('fade-out', 'fade-in')
                    setTimeout(() => button.classList.remove('fade-in', 'copied'), 300)
                }, 300)
            }, 1000)
        }, 300)
    }

    document.querySelectorAll('.copy-button').forEach(button => {
        const originalContent = button.innerHTML
        const copyHandler = async function(e) {
            e.preventDefault()
            try {
                const code = this.closest('pre')?.querySelector('code')
                if (!code) return

                if (navigator.clipboard && window.isSecureContext) {
                    await navigator.clipboard.writeText(code.textContent)
                } else {
                    const textArea = document.createElement('textarea')
                    textArea.value = code.textContent
                    textArea.style.position = 'fixed'
                    textArea.style.left = '-999999px'
                    document.body.appendChild(textArea)
                    textArea.select()
                    document.execCommand('copy')
                    textArea.remove()
                }

                if (!this.classList.contains('copied')) {
                    animateCopyButton(this, originalContent)
                }
            } catch (err) {
                console.error('Copy failed:', err)
            }
        }

        button.addEventListener('click', copyHandler)
        button.addEventListener('touchend', copyHandler, { passive: false })
    })
})
