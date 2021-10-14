canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

greencar_width = 75;
greencar_height = 100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

greencar_x = 5;
greencar_y = 225;

function add() {
	background_imgTag = new Image();
	background_imgTag.onload = uploadBackground;
	background_imgTag.src = background_image;

	green_imgTag = new Image();
	green_imgTag.onload = uploadgreencar;
	green_imgTag.src = greencar_image;
}

function uploadBackground() {

	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height)

}

function uploadgreencar() {
ctx.drawImage(greencar_imgTag, greencar_x, greencar_y, greencar_width, greencar_height);

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(greencar_y >=0){

		greencar_y = greencar_y - 10;
		uploadBackground();
		uploadgreencar();
	}
	
}

function down() {
    if (img_y <= 500) {
        img_y = img_y + 10;
        upload_1();
        upload_2();
    }
}

function left() {
    if (img_x >= 0) {
        img_x = img_x - 10;
        upload_1();
        upload_2();
    }
}

function right() {
    if (img_x <= 700) {
        img_x = img_x + 10;
        upload_1();
        upload_2();
    }
}
