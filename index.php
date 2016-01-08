<!DOCTYPE html>
<html>
<head>
	<title>Lightyear : Infinite Scrolling</title>
	<link rel="stylesheet" href="assets/css/bootstrap.3.3.6.css">
	<link rel="stylesheet" href="assets/css/style.css">
</head>
<body>

	<header>
		<div class="container">
			<h1>Lightyear : Infinite Scrolling</h1>
		</div>
	</header>
	<div class="page">
		<div class="container">
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at est eu diam posuere viverra. Sed non augue at justo mattis sollicitudin. Nam eget sodales arcu. Nam tempus ac felis vel dignissim. Mauris fermentum eros a justo dignissim porttitor. Morbi fringilla eu sapien et pellentesque. Phasellus fringilla sodales nunc eu fermentum. Vivamus molestie iaculis sapien, nec ultricies metus porttitor eget. Phasellus sagittis tellus non tortor rutrum, non accumsan erat bibendum. Phasellus lobortis arcu eros, ac sodales est feugiat id. Aliquam rhoncus sollicitudin lorem porttitor dignissim. Proin rutrum tellus eget augue condimentum, sit amet ultrices felis feugiat. Pellentesque dolor eros, sodales at tempor varius, placerat id arcu.</p>
			<div id="doLightyear" class="grid-wrapper">
				<?php
					for ($i=0; $i < 12 ; $i++):
						$c = ($i+1);
						echo "<div class=\"grid-item item-{$c}\"></div>";
					endfor;
				?>
			</div>	
		</div>
	</div>
	<footer>
		<div class="container">
			<p>footer stuff</p>
		</div>
	</footer>

	<script src="assets/js/jquery.1.9.0.min.js"></script>
	<script src="assets/js/lightyear.js"></script>
	<script src="assets/js/script.js"></script>

</body>
</html>