function openNav() {
	const el = document.getElementsByClassName('side-nav')[0]

	const open = el.getAttribute('open')

	el.setAttribute('open', 'true')
}

function closeNav() {
	const el = document.getElementsByClassName('side-nav')[0]

	el.setAttribute('open', 'false')
}

/**
 *
 * @param {Event} ev
 */
function listenForClickAway(ev) {
	const el = document.getElementsByClassName('side-nav')[0]
	const open = el.getAttribute('open')

	if (open === 'true' && !el.contains(ev.target)) {
		el.setAttribute('open', 'false')
	}
}

document.addEventListener('mousedown', listenForClickAway)

const navButtons = document.getElementsByClassName('side-nav-item')
for (let i = 0; i < navButtons.length; i++) {
	const btn = navButtons.item(i)
	btn.addEventListener('mousedown', (ev) => {
		closeNav()
	})
}
