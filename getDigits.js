function getDigits(number) {
	let base = 10;
	let digits = [];
	let iterations = 1;

	do {
		let digit = number % base ** iterations;
		let deduction = number % base ** (iterations - 1);
		let divider = base ** (iterations - 1);

		digits.push((digit - deduction) / divider);

		if((base ** iterations++) > number) break;
	} while(1);

	return digits;
}
