let operator = ['+', '-', '*', '/', ''];

for(var i = 1000; i < 10000; i++) {
	let str = i.toString();
	for (var j = 0; j < operator.length; j++) {
		for (var k = 0; k < operator.length; k++) {
			for (var l = 0; l < operator.length; l++) {
				let formula = str.charAt(0) + operator[j] + 
								str.charAt(1) + operator[k] + 
									str.charAt(2) + operator[l] + 
										str.charAt(3);
				if(formula.length > 4) {
					if(i == eval(formula)) {
						console.log(i);
						console.log("formula! " + formula);
					}
				}
			}
		}
	}
}