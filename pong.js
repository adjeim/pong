const animate = window.requestAnimationFrame;

const canvas = document.createElement('canvas');
const width = 700;
const height = 500;

canvas.width = width;
canvas.height = height;

const context = canvas.getContext('2d');

let ball = 100;

const step = () => {
	update();
	render();
	animate(step);
};

const update = () => {

};

const render = () => {
	ball = ball + 5;
	console.log(ball);

	context.fillStyle = '#220a37';
	context.fillRect(0, 0, canvas.width, canvas.height);

	context.fillStyle = 'orange';
	context.fillRect(ball, 20, 20, 20);
};


window.onload = () => {
	console.log('welcome to pong-ish! get ready to have some fun!');
	document.body.appendChild(canvas);
	animate(step);

};


