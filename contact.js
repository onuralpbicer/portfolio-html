const formEl = document.getElementById('contact-form')

/**
 *
 * @param {Response} res
 */
function parseResponse(res) {
	const contentType = res.headers.get('Content-Type')
	if (contentType.includes('application/json')) return res.json()
	else return res.text()
}

formEl.addEventListener('submit', (event) => {
	event.preventDefault()

	const payload = {}

	const elems = event.target.querySelectorAll('input, textarea')

	for (const elem of elems) {
		payload[elem.id.replace('contact-', '')] = elem.value
	}

	fetch('http://api.onuralpbicer.com/contact', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(payload),
	})
		.then(async (res) => {
			const body = await parseResponse(res)
			if (res.ok) return body
			else throw new Error(body.message)
		})
		.catch((error) => {
			console.error(error)
			alert('Error. Could not send email')
		})
})
