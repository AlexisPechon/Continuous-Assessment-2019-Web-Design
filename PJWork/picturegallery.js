var i = 0;
var images = [];
var time = 3000;

images[0] = "image1.png";
images[1] = "image2.png";
images[2] = "image3.png";
images[3] = "image4.png";
images[4] = "image5.png";

function changeImg(){
	document.slide.src = images[i];
	if (i < images.length -1){
		i++;
	} else {
		i = 0;
	}
	
	setTimeout("changeImg()", time);
	
}

window.onload = changeImg;

var myIntro = "Did you miss the party or had a busy week?";
var myGreeting = "Don't worry! We've captured all the best moments so you can get the feel for it!";

alert(myIntro);
alert(myGreeting);