<!doctype html>

<html>
<head>
	<title>sdg movie list</title>

	<link rel="stylesheet" href="resources/styling/main.css" />
	<script type="text/javascript" src="resources/scripts/main.js"></script>
	
	<script id="movieTemplate" type="text/template">
			<div class="movie-title">{title} {year}</div>
			<div class="movie-poster"><img src="{image}"/></div>
	</script>
	
</head>

<body>
	<header>
		<div class="sdg-logo"><img src="resources/images/sdg-logo.png" /></div>
		<div class="title">Box Office</div>
	</header>

	<section class="content">
		<ul class="movieList"></ul>
	</section>	
	
</body>
</html>