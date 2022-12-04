const elements = document.getElementsByTagName('section')

const observer = new IntersectionObserver(
	(entries) => {
		for (const entry of entries) {
			const links = document.querySelectorAll(`a[href="#${entry.target.id}"]`)

			for (const link of links) {
				if (entry.intersectionRatio >= 0.5) {
					link.setAttribute('active', 'true')
				} else if (entry.intersectionRatio <= 0.5) {
					link.removeAttribute('active')
				}
			}
		}
	},
	{
		threshold: [0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6, 0.65, 0.7, 0.75, 1],
	},
)

for (const element of elements) {
	observer.observe(element)
}
