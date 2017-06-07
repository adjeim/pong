window.onload = () => {
	console.log('welcome to pong-ish! get ready to have some fun!');
	const canvas = document.getElementById('gamespace');
	const ctx = canvas.getContext('2d');

	ctx.fillStyle = '#220a37';
	ctx.fillRect(0, 0, canvas.width, canvas.height);
}