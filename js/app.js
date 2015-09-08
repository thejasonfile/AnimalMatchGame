var puppies = [
				"http://www.soft3k.com/imgs/Precious-Puppies-Screensaver-w300-8723.jpg",
				"http://www.soft3k.com/imgs/Precious-Puppies-Screensaver-w300-8723.jpg",
				"http://www.soft3k.com/imgs/Precious-Puppies-Screensaver-w300-8723.jpg",
				"http://www.soft3k.com/imgs/Precious-Puppies-Screensaver-w300-8723.jpg",
			 	"http://englishbulldog-dogs.com/wp-content/uploads/2013/07/200x200.jpg",
			 	"http://englishbulldog-dogs.com/wp-content/uploads/2013/07/200x200.jpg",
			 	"http://englishbulldog-dogs.com/wp-content/uploads/2013/07/200x200.jpg",
			 	"http://englishbulldog-dogs.com/wp-content/uploads/2013/07/200x200.jpg",
			 	"http://www.northridgewest.org/wp-content/uploads/2012/09/puppies-nwnc-200x200.jpg",
			 	"http://www.northridgewest.org/wp-content/uploads/2012/09/puppies-nwnc-200x200.jpg",
			 	"http://www.northridgewest.org/wp-content/uploads/2012/09/puppies-nwnc-200x200.jpg",
			 	"http://www.northridgewest.org/wp-content/uploads/2012/09/puppies-nwnc-200x200.jpg",
			 	"http://dog-training-whisperer.com/wp-content/uploads/1-dta-normanack-3904600662-200x200.jpg",
			 	"http://dog-training-whisperer.com/wp-content/uploads/1-dta-normanack-3904600662-200x200.jpg",
			 	"http://dog-training-whisperer.com/wp-content/uploads/1-dta-normanack-3904600662-200x200.jpg",
			 	"http://dog-training-whisperer.com/wp-content/uploads/1-dta-normanack-3904600662-200x200.jpg"
];

var arr = puppies;

//when one of the buttons is clicked, the backgrounds array changes to the appropriate animal and backgrounds are hidden
$('.puppiesbtn').click(function(){
	return arr = puppies;
})


//generates random number for background pic
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//assign each square a background and hide it by setting its size to 0
$(".grid").each(function() {
	var randomNum = getRandomInt(0, arr.length-1);
	$(this).css('background-image', 'url('+arr[randomNum]+')');
	$(this).addClass('hiddenimage');
	arr.splice(randomNum,1);
})

//when a square is clicked
$(".grid").click(function() {
	if (!($(this).hasClass("matchedimage"))) {
		//reveal its background image and toggle classes
		$(this).toggleClass('hiddenimage').toggleClass('revealedimage');
		//determine number of squares that have been revealed but not matched
		var revealedSquares = $("div.revealedimage").length;
		if (revealedSquares === 2) {
			var firstSquare = $($('div.revealedimage')[0]).attr("style")
			var secondSquare = $($('div.revealedimage')[1]).attr("style")
			//if second square has been clicked, test to see if backgrounds match
			if (firstSquare === secondSquare) {
				//if backgrounds match, change class to matched
				$("div.revealedimage").each(function() {
					$(this).removeClass("revealedimage").addClass("matchedimage");
				})
				//determine if any unmatched squares remain
				var matchedSquares = $("div.matchedimage").length;
				//if no unmatched squares remain, then the game is over
				if (matchedSquares === $(".grid").length) {
					alert("You have matched all the squares!  Congratulations!")
				}
			} else {
				//if backgrounds do not match, hide the backgrounds
				alert("That's not a match.  Try again");
				$("div.revealedimage").each(function() {
					$(this).removeClass("revealedimage").addClass("hiddenimage");
				})
			}	
		}
	}
}); //end click