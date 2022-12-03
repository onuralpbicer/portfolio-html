const template = document.createElement('template')
template.innerHTML = `
<style>
.portfolio-container:not(:first-of-type) {
	margin-top: 2rem;
}

.portfolio-content {
	margin-top: 1rem;
	display: flex;
	gap: 1rem;
}

.portfolio-image {
    max-width: 100%;
    display: block;
}

@media (max-width: 768px) {
	.portfolio-content {
		display: block;
	}

    .portfolio-image {
	    margin: auto;
    }
}

.portfolio-link {
	text-decoration: none;
	color: inherit;
}

.portfolio-description {
    margin: 0;
}

</style>
`

class PortfolioProject extends HTMLElement {
	constructor() {
		super()
	}

	connectedCallback() {
		this.attachShadow({ mode: 'open' })

		const li = document.createElement('li')
		li.className = 'portfolio-container'

		const a = document.createElement('a')
		console.log(this.attributes)
		a.href = this.getAttribute('href')
		a.className = 'portfolio-link'

		const h3 = document.createElement('h3')
		h3.innerText = this.getAttribute('title')

		const div = document.createElement('div')
		div.className = 'portfolio-content'

		const img = document.createElement('img')
		img.className = 'portfolio-image'
		img.width = 400
		img.src = this.getAttribute('src')
		img.alt = this.getAttribute('alt')

		const p = document.createElement('p')
		p.className = 'portfolio-description'
		p.innerText = this.getAttribute('description')

		div.appendChild(img)
		div.appendChild(p)

		a.appendChild(h3)
		a.appendChild(div)

		li.appendChild(a)

		this.shadowRoot.append(template.content.cloneNode(true), li)
	}
}

customElements.define('portfolio-project', PortfolioProject)
console.log('hello')
