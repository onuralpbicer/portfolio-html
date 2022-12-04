/**
 *
 * @param {HTMLButtonElement} button
 */
function showSpinner(button) {
	function noop() {}
	if (!button) return noop

	const oldContent = button.innerHTML
	button.setAttribute('loading', 'true')
	button.innerHTML = `
    <svg
						class="button-spinner"
						stroke="white"
						fill="transparent"
						width="24px"
						height="24px"
						viewBox="0 0 24 24"
					>
						<path d=" M 22 12 A 10 10 0 1 1 12 2" stroke-width="2" />
					</svg>
    `

	return () => {
		button.removeAttribute('loading')
		button.innerHTML = oldContent
	}
}
