let number = 10;

function reverse(number) {
	return number.split("").reverse().join("");
}

while (true) {
	if (number.toString() == reverse(number.toString()) &&
		number.toString(2) == reverse(number.toString(2)) &&
		number.toString(8) == reverse(number.toString(8))
	) {
		console.log(number);
		break;
	};
	number++;
}
