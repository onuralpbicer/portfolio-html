const el = document.getElementById('tech-skills-container')

const list = [
	'HTML',
	'CSS',
	'TypeScript',
	'JavaScript',
	'React',
	'Svelte',
	'Angular',
	'Java',
	'C',
	'Python',
	'Bash',
	'DynamoDB',
	'PostgreSQL',
	'SQLite',
	'EC2',
	'Cognito',
	'RDS',
	'Api Gateway',
	'Lambda',
	'S3',
	'Linux',
]

const data = list.map((word) => ({
	name: word,
	weight: 1,
}))

const chart = Highcharts.chart('tech-skills-container', {
	accessibility: {
		screenReaderSection: {
			beforeChartFormat:
				'<h5>Technical Skills</h5>' + '<div>{viewTableButton}</div>',
		},
	},
	series: [
		{
			type: 'wordcloud',
			data,
		},
	],
	title: {
		text: '',
	},
	credits: {
		enabled: false,
	},
	chart: {
		backgroundColor: null,
	},
	tooltip: {
		enabled: false,
	},
	tooltip: {
		headerFormat: '<span style="font-size: 16px"><b>{point.key}</b></span><br>',
	},
})
