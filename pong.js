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

let ball = 10;
const player = new Player();
const computer = new Computer();

// Update all objects, render them, then call animate again.
const step = () => {
	update();
	render();
	animate(step);
};

const update = () => {

};

const render = () => {
	if (ball < 700) {
		ball = ball + 3;
		console.log(ball);
	};

	context.fillStyle = '#220a37';
	context.fillRect(0, 0, canvas.width, canvas.height);

	context.fillStyle = '#ee7600';
	context.fillRect(ball, 20, 20, 20);

	player.paddle.render();
	computer.paddle.render();
};

// Create the paddle.
function Paddle(x, y, width, height) {
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;

	this.render = () => {
		context.fillStyle = '#836fff';
		context.fillRect(this.x, this.y, this.width, this.height);
	};
};

// Make one paddle for the player and one for the computer.
function Player() {
	this.paddle = new Paddle(650, 225, 10, 70);
	this.paddle.render();
};

function Computer() {
	this.paddle = new Paddle(40, 225, 10, 70);
	this.paddle.render();
};





