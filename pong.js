const animate = window.requestAnimationFrame;

const canvas = document.createElement('canvas');
const width = 700;
const height = 500;

canvas.width = width;
canvas.height = height;

const context = canvas.getContext('2d');

window.onload = () => {
	console.log('welcome to pong-ish! get ready to have some fun!');
	document.body.appendChild(canvas);
	animate(step);

};

// Listen for keydown and keyup events to determine movement of player's paddle.
let keyDown;

window.addEventListener("keydown", function(event) {
  keyDown = event.keyCode;
  console.log(keyDown);
});

window.addEventListener("keyup", function(event) {
  keyDown = null;
});


const ball = new Ball(350, 250);
const player = new Player();
const computer = new Computer();

// Update all objects, render them, then call animate again.
const step = () => {
	update();
	render();
	animate(step);
};

const update = () => {
	ball.update(player.paddle, computer.paddle);
	player.update();

};

const render = () => {
	context.fillStyle = '#220a37';
	context.fillRect(0, 0, canvas.width, canvas.height);

	player.paddle.render();
	computer.paddle.render();
	ball.render();
};

// Create the paddle.
function Paddle(x, y, width, height) {
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.speed_x = 0;
	this.speed_y = 0;

	this.render = () => {
		context.fillStyle = '#836fff';
		context.fillRect(this.x, this.y, this.width, this.height);
	};
};

// Make one paddle for the player and one for the computer.
function Player() {
	this.paddle = new Paddle(650, 225, 10, 70);
	this.paddle.render();

	this.move = (moveX, moveY) => {
		this.paddle.x += moveX;
		this.paddle.y += moveY;
		// console.log(this.paddle.y);

		this.speed_x += this.paddle.x;
		this.speed_y += this.paddle.y;
		// console.log(this.speed_y);

	};

	this.update = () => {
		// If the player presses the up key, move up. If they press the down key, move down. Otherwise don't move the paddle at all.
		if (keyDown === 38) {
			this.move(0, -4);

		} else if (keyDown === 40) {
			this.move(0, 4);

		} else {
			this.move(0, 0);
		};
	};
};

function Computer() {
	this.paddle = new Paddle(40, 225, 10, 70);
	this.paddle.render();
};

// Create a ball.
function Ball(x, y) {
	this.x = x;
	this.y = y;
	this.radius = 5;
	this.speed_x = 3;
	this.speed_y = 0;

	this.render = () => {
		context.fillStyle = '#ee7600';
		context.beginPath();
		context.arc(this.x, this.y, this.radius, 0 * Math.PI, 2 * Math.PI);
		// The last two values above are the start and ending angles, in radians
		context.fillStyle = '#ee7600';
		context.fill();
	};

	this.update = (playerPaddle, computerPaddle) => {
		// Every time it updates, move the ball in horizontal and vertical directions, depending on the speed in that direction.
		this.x += this.speed_x;
		this.y += this.speed_y;

		// If the ball hits the player's paddle, bounce back towards the computer's paddle.
		if (this.x > width - player.paddle.width - (width - player.paddle.x - player.paddle.width)) {
			this.speed_x = -3;
   		this.x += this.speed_x;
   		console.log(player.paddle.x);
   		console.log(this.x);

		};

		// If the ball hits the computer's paddle, bounce back towards the player's paddle.
		if (this.x < computer.paddle.width + computer.paddle.x) {
			this.speed_x = 3;
   		this.x += this.speed_x;
   		console.log(computer.paddle.x + computer.paddle.width);
   		console.log(this.x);

		};


	};
};






