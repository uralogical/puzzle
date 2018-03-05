function cutBar(n, m, current) {
	if(current >= n) {
		return 0;
	} else if (current < m) {
		return 1 + cutBar(n, m, current * 2);
	} else {
		return 1 + cutBar(n, m, current + m);
	}
}


console.log(cutBar(20, 3, 1));
console.log(cutBar(100, 5, 1));