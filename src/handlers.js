const fs = require('fs')
const path = require('path');

const homeHandler = (request, response) => {
	const htmlPath = path.join(__dirname, '../public/index.html')
	fs.readFile(htmlPath, (error, html) => {
		if (error) {
			response.writeHead(500, {
				'Content-Type': 'text/html'
			})
			response.end('<h1> Server error! sorry </h1>')
			return
		}
		response.writeHead(200, {
			'Content-Type': 'text/html'
		})
		response.end(html)
	})
}
//---------------------------------------------------------------------
const publicHandler = (request, response) => {
	const filePath = path.join(__dirname, '..', request.url)
	const extension = request.url.split('.')[1]
	const contentTypeMapping = {
		'js': 'application/js',
		'css': 'text/css',
		'html': 'text/html',
		'src': 'src/jpg',
		'jpg': 'image/jpg'
	}
	fs.readFile(filePath, (error, file) => {
		if (error) {
			response.writeHead(500, {
				'Content-Type': 'text/html'
			})
			response.end('<h1> Server error! sorry </h1>')
			return
		}
		response.writeHead(200, {
			'Content-Type': contentTypeMapping[extension]
		})
		response.end(file)
	})
}
//---------------------------------------------------------------------
const searchHandler = (request, response) => {
	const jsonPath = path.join(__dirname, '..', 'src/countries.json')

	fs.readFile(jsonPath, 'utf8', (error, file) => {
		if (error) {
			response.writeHead(500, {
				'Content-Type': 'text/html'
			})
			response.end('<h1> Server error! sorry </h1>')
			return
		}
		response.writeHead(200, {
			'Content-Type': 'application/json'
		})
		response.end(file)
	})
}
//---------------------------------------------------------------------
module.exports = {
	homeHandler,
	publicHandler,
	searchHandler
}
