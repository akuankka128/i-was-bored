async function sandboxif(code) {
	return new Promise(res => {
		var frame = document.createElement('iframe');
		frame.setAttribute('sandbox', 'allow-scripts');
		frame.src = 'data:text/html,<script>' + code + '</script>';
		frame.style.display = 'none';
		frame.contentWindow.addEventListener('message', v => {
			frame.remove();
			res(v.data);
		});

		document.body.appendChild(frame);
	});
}

// usage:
var code = 'postMessage("Hello, world!")';
sandboxif(code)
	.then(console.log);
