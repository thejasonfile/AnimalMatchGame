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

//when a square is clicked reveal its background
$(".grid").click(function() {
	$(this).toggleClass('hiddenimage');
})

//once background is assigned, it cannot change
//when a second square is clicked 
//if the backgrounds match, then the squares stay revealed and lock
//else both backgrounds return to being hidden
//when all backgrounds are revealed, the game is won




