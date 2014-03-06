


document.addEventListener("DOMContentLoaded", function() {
	var currentPage = 0;
	
	var params = {pageLimit: 20, page: ++currentPage, country: 'us'};
	getMoviesInTheaters(params, onGetMoviesSuccess);
			
	window.onscroll = function () {
		if (window.scrollY + window.innerHeight >= document.documentElement.offsetHeight - 5) {
			var params = {pageLimit: 20, page: ++currentPage, country: 'us'};
			getMoviesInTheaters(params, onGetMoviesSuccess);
		}	
	}
});




function getMoviesInTheaters (requestConfig, onSuccess) {
	var request = new XMLHttpRequest;
	request.onload = function () { onSuccess && onSuccess(request);	};
	requestConfig.url = '/sdg-movies/movies';
	request.open('GET', evalTempl('{url}?page_limit={pageLimit}&page={page}&country={country}', requestConfig), true);	
	request.send();
}




function onGetMoviesSuccess (request) {
	var moviesResponse = JSON.parse(request.responseText);
	render(moviesResponse);
}




function render (moviesResponse) {
	var total = moviesResponse.total;
	var movieList = moviesResponse.movies;
	var movieListElement = document.querySelector('.movieList');
	var movieTemplate = document.querySelector('#movieTemplate');
	
	movieList.forEach(function (movie, key) {
		var newMovieElement = document.createElement("li");
		var context = {title: movie.title, image: movie.posters.detailed, year: movie.year};
		
		newMovieElement.innerHTML =  evalTempl(movieTemplate.innerText.trim(), context);
		movieListElement.appendChild(newMovieElement);
	});
}







// UTIL function
function evalTempl (str, context) {
	return str.replace(/\{(.*?)\}/g, function(match, key) {return context[key];});
}
