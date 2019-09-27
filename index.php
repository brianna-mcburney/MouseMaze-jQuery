<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>Mouse Maze - jQuery</title>

	<meta name="description" content="Mouse Maze - jQuery">
	<meta name="author" content="Brianna McBurney">

	<link rel="shortcut icon" href="images/musicicon.png"/>
	<link rel="stylesheet" href="jquery-game-style.css">

	<script src="jquery.js"></script>
</head>
<body>
	<div class="all">
		<h2>JQuery Maze</h2>
		<div id="output"></div>
		<div id="container">
			<div id="wasd"></div>
			<button id="reset" class="btn blue">Restart</button>

			<div id="border1" class="bordercolor"></div>
			<div id="border2" class="bordercolor"></div>
			<div id="border3" class="bordercolor"></div>
			<div id="border4" class="bordercolor"></div>
			<div id="border5" class="bordercolor"></div>
			<div id="border6" class="bordercolor"></div>
			<div id="border7" class="bordercolor"></div>
			<div id="border8" class="bordercolor"></div>
			<div id="border9" class="bordercolor"></div>
			<div id="border10" class="bordercolor"></div>
			<div id="border11" class="bordercolor"></div>
			<div id="finish"></div>

			<div id="moveMe"></div>
			<div id="gameOver">
				<h1>GAME OVER</h1>
				<h3>Try again?</h3><br/><br/><br/>
			</div>
			<div id="youWin"></div>
			<div id="cheese"></div>
			<div id="zap"></div>
			<div id="heart1" class="heart"></div>
			<div id="heart2" class="heart"></div>
			<div id="heart3" class="heart"></div>
			<div id="heart4" class="heart"></div>
			<div id="heart5" class="heart"></div>
		</div>


		<audio id="MouseSqueek" src="sounds/mouseSqueak.mp3" preload="none"></audio>
		<script type="text/javascript" src="mouseMaze.js"></script>
</body>
</html>
