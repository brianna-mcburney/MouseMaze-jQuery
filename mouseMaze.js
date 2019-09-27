$(document).ready(function () {
	var top = 0;
	var playerDir;
	var xpos;
	var ypos;
	var speed = 3;
	var playerLife = 5;
	var win;
	$("#zap").hide();
	$("#gameOver").hide();
	$("#youWin").hide();
	$( "#moveMe" ).addClass( "up" );

	function game_tick() {
		// move the game
		if (playerLife > 0 && win != "yes") {
			window.setTimeout(game_tick, 10);
		} else {
			window.stop(game_tick);
		}

		movePlayer();
	}

	game_tick();

	$("#reset").click( function() {
		window.setTimeout(game_tick);
		$("#moveMe").css({"top":"435px","left":"140px"});
		$("#reset").css({"top":"20px","left":"200px"});
		var pos = $("#moveMe").position();
		xpos = pos.left;
		ypos = pos.top;
		playerLife = 5;
		win = "no";
		$("#output").html("You are at: x" + xpos + " and y" + ypos);
		$("#zap").hide();
		$("#gameOver").hide();
		$("#youWin").hide();
		$("#heart1").show();
		$("#heart2").show();
		$("#heart3").show();
		$("#heart4").show();
		$("#heart5").show();
		$("#moveMe").removeClass("down").removeClass("left").removeClass("right").addClass("up");
	});

	function zap()  {
		var pos = $("#moveMe").position();
		xpos2 = pos.left;
		ypos2 = pos.top;
		xpos2 = xpos2 + 40;
		ypos2 = ypos2 - 40;
		$("#zap").css({"top": ypos2,"left": xpos2});
		$("#zap").show();
		$("#zap").fadeOut(3000, function() { });
	}

	function check_collision() {
		var newpos = $("#moveMe").position();
		xpos = newpos.left;
		ypos = newpos.top;

		for (BorderNum = 1; BorderNum <= 11; BorderNum++) {
			var MouseTop = ypos;
			var MouseBottom = (ypos + $("#moveMe").height());
			var MouseLeft = xpos;
			var MouseRight = (xpos + $("#moveMe").width());
			var wallTop = ($("#border" + BorderNum).position().top);
			var wallBottom = ($("#border" + BorderNum).position().top + $("#border" + BorderNum).height());
			var wallLeft = ($("#border" + BorderNum).position().left);
			var wallRight = ($("#border" + BorderNum).position().left + $("#border" + BorderNum).width());

			if ((MouseRight >= wallLeft) && (MouseLeft <= wallRight) && (MouseBottom >= wallTop && MouseTop <= wallBottom)) {
				$("#moveMe").stop();
				if ( playerDir == "left") {
					$("#moveMe").animate({ //jump left
						left: xpos + 5
					}, 1, function() {
						document.getElementById('MouseSqueek').play();
						zap();
					});
				} if (playerDir == "right") {
					$("#moveMe").animate({ //jump left
						left: xpos - 5
					}, 1, function() {
						document.getElementById('MouseSqueek').play();
						zap();
					});
				} if (playerDir == "up") {
					$("#moveMe").animate({ //jump left
						top: ypos + 5
					}, 1, function() {
						document.getElementById('MouseSqueek').play();
						zap();
					});
				} if (playerDir == "down") {
					$("#moveMe").animate({ //jump left
						top: ypos - 5
					}, 1, function() {
						document.getElementById('MouseSqueek').play();
						zap();
					});
				}
				playerDir = "stop";
				$( "#heart"+ playerLife).fadeOut( "slow", function() {
					// Animation complete
				});
				playerLife = playerLife - 1 ;
				if (playerLife == "0") {
					window.stop(game_tick);
					playerDir = "stop";
					$("#gameOver").show();
					$("#reset").css({"top":"350px","left":"250px"});
				}
			}
		}
	}

	function check_collision2() {
		var newpos = $("#moveMe").position();
		xpos = newpos.left;
		ypos = newpos.top;

		var MouseTop = ypos;
		var MouseBottom = (ypos + $("#moveMe").height());
		var MouseLeft = xpos;
		var MouseRight = (xpos + $("#moveMe").width());
		var finishTop = ($("#finish").position().top);
		var finishBottom = ($("#finish").position().top + $("#finish").height());
		var finishLeft = ($("#finish").position().left);
		var finishRight = ($("#finish").position().left + $("#finish").width());

		if (MouseRight >= finishLeft && MouseLeft <= finishRight && MouseBottom >= finishTop && MouseTop <= finishBottom) {
			window.stop(game_tick);
			playerDir = "stop";
			win = "yes";
			$("#youWin").show();
			$("#reset").css({"top":"360px","left":"250px"});
		}
	}

	// stop player from moving when no buttons are pressed
	$(document).keyup(function(event) {
		var e = event || evt;
		var charCode = event.which || event.keyCode;
		var c = String.fromCharCode(charCode);
		if (charCode == "65" || charCode == "68" || charCode == "87" || charCode == "83") {
			playerDir = "stop";
		}
	});
	$(document).keydown(function(event) {
		var e = event || evt;
		var charCode = event.which || event.keyCode;
		var c = String.fromCharCode(charCode);

		if (charCode == "65") { //left a
			playerDir = "left";
		}
		if (charCode == "68") { //right d
			playerDir = "right";
		}
		if (charCode == "87") { //up w
			playerDir = "up";
		}
		if (charCode == "83") { //down s
			playerDir = "down";
		}
	});

	function movePlayer() {
		var pos = $("#moveMe").position();
		xpos = pos.left;
		ypos = pos.top;

		if (playerDir == "stop") {
			// do nothing
		}
		if (playerDir == "up") {
			check_collision2();
			check_collision();
			if (playerDir != "stop") {
				ypos = ypos - speed;
				$("#moveMe").css({top: ypos,left: xpos});
				$("#output").html("You are at: x" + xpos + " and y" + ypos);
			}
			if (!$("#moveMe").hasClass("up")) {
				$("#moveMe").removeClass("down").removeClass("left").removeClass("right").addClass("up");
			}
		}
		if (playerDir == "down") {
			check_collision2();
			check_collision();
			if (playerDir != "stop") {
				ypos = ypos + speed;
				$("#moveMe").css({top: ypos,left: xpos});
				$("#output").html("You are at: x" + xpos + " and y" + ypos);
			}
			if (!$("#moveMe").hasClass("down")) {
				$("#moveMe").removeClass("up").removeClass("left").removeClass("right").addClass("down");
			}
		}
		if (playerDir == "left") {
			check_collision2();
			check_collision();
			if (playerDir != "stop") {
				xpos = xpos - speed;
				$("#moveMe").css({top: ypos,left: xpos});
				$("#output").html("You are at: x" + xpos + " and y" + ypos);
			}
			if (!$("#moveMe").hasClass("left")) {
				$("#moveMe").removeClass("down").removeClass("up").removeClass("right").addClass("left");
			}
		}
		if (playerDir == "right") {
			check_collision2();
			check_collision();
			if (playerDir != "stop") {
				xpos = xpos + speed;
				$("#moveMe").css({top: ypos,left: xpos});
				$("#output").html("You are at: x" + xpos + " and y" + ypos);
			}

			if (!$("#moveMe").hasClass("right")) {
				$("#moveMe").removeClass("up").removeClass("down").removeClass("left").addClass("right");
			}


		}
	}
});
