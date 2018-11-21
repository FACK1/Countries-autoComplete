const fs = require('fs')
const path = require('path');
const handlers = require('./handlers.js');

const router = (request, response) => {

	if (request.url === '/') {
		handlers.homeHandler(request, response)
	}
	//styling and js---------------------------------------------------------
	else if (request.url.includes('/public/')) {
		handlers.publicHandler(request, response)
	}
	//autoComplete------------------------------------------------------------
	else if (request.url.includes('/search/')) {
		handlers.searchHandler(request, response);
	}
	// error-----------------------------------------------------------------
	else {
		response.writeHead(404, {
			'Content-Type': 'text/html'
		})
		response.end('<h1> Page Not Found </h1>')
	}

}
module.exports = router
