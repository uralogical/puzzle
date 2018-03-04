class Palindrome {

	main(decimal) {
		let bi = this.getBinary(decimal);
		let oct = this.getOctal(decimal);
		return this.isPalindrome(decimal) && this.isPalindrome(bi) && this.isPalindrome(oct);
	}

	isPalindrome(number) {
		return number.toString() === number.toString().split("").reverse().join("");
	}

	getBinary(decimal) {
		return decimal.toString(2);
	}
	getOctal(decimal) {
		return decimal.toString(8);
	}
}

const p = new Palindrome();
let number = 10;
let b = new Date().getTime();

while (true) {
	let result = p.main(number);
	if (result) {
		let a = new Date().getTime();
		console.log(number);
		console.log(a-b);
		break;
	}
	number++;
}
