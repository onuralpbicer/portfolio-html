const el = document.getElementById('tech-skills-container')

const data = [
	{ name: 'HTML', weight: 5 },
	{ name: 'CSS', weight: 5 },
	{ name: 'TypeScript', weight: 5 },
	{ name: 'JavaScript', weight: 5 },
	{ name: 'React', weight: 5 },
	{ name: 'Svelte', weight: 4 },
	{ name: 'Angular', weight: 4 },
	{ name: 'Java', weight: 3 },
	{ name: 'C', weight: 2 },
	{ name: 'Python', weight: 3 },
	{ name: 'Bash', weight: 4 },
	{ name: 'DynamoDB', weight: 2 },
	{ name: 'PostgreSQL', weight: 4 },
	{ name: 'SQLite', weight: 2 },
	{ name: 'EC2', weight: 3 },
	{ name: 'Cognito', weight: 1 },
	{ name: 'RDS', weight: 2 },
	{ name: 'Api Gateway', weight: 1 },
	{ name: 'Lambda', weight: 1 },
	{ name: 'S3', weight: 1 },
	{ name: 'Linux', weight: 4 },
	{ name: 'NodeJS', weight: 5 },
	{ name: 'Koa', weight: 5 },
	{ name: 'Express', weight: 2 },
]

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
