function bacon(text, msg) {
	if((msg.length / 5 | 0) < text.length) {
		throw new Error('msg is to short');
	}

	let t = 0, index = 0;
	let out = '';
	let lookup = {
		a:'00001',b:'00010',c:'00011',
		d:'00100',e:'00101',f:'00110',
		g:'00111',h:'01000',i:'01001',
		j:'01010',k:'01011',l:'01100',
		m:'01101',n:'01110',o:'01111',
		p:'10000',q:'10001',r:'10010',
		s:'10011',t:'10100',u:'10101',
		v:'10110',w:'10111',x:'11000',
		y:'11001',z:'11010',' ':'00000'
	};

	msg = msg.toLowerCase();

	for(let i = 0, l = msg.length; i < l; i++) {
		let char = text[t];
		let bin = lookup[char];
		let cc = msg[i].charCodeAt();

		if(!bin) {
			out += msg.slice(i).toLowerCase();
			break;
		}

		if(cc > 96 && cc < 123) {
			out += bin[index] == 0
				? msg[i].toLowerCase()
				: msg[i].toUpperCase();

			index++;
		} else {
			out += msg[i];
		}

		if(index === 5) {
			console.log(bin);

			index = 0;
			t = t + 1;
		}
	}

	return out;
}

function unbacon(text) {
	let abc = [...' abcdefghijklmnopqrstuvwxyz'];
	let index = 0; // chunk index
	let bin = '', out = '';

	/* abcdE = 00001 = a */

	for(let i = 0, l = text.length; i < l; i++) {
		let char = text[i];
		let cc = char.charCodeAt();

		if(cc > 96 && cc < 123) {
			bin += '0';
			index++;
		} else if(cc > 64 && cc < 91) {
			bin += '1';
			index++;
		}

		if(index === 5) {
			out += abc[parseInt(bin, 2)];
			bin = '';
			index = 0;
		}
	}

	return out.trim();
}
