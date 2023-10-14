function sum_of_square(a, b) {
	return a*a + b*b;
}

function sum_of_square_min_3(a, b, c) {
	return (a < b)
			? (a < c)
				? sum_of_square(b, c) // a < (b, c)
				: sum_of_square(a, b) // c < a < b
			: (a < c)
				? sum_of_square(a, c) // b < a < c
				: (b < c)
					? sum_of_square(a, c) // b < c < a
					: sum_of_square(a, b) // c < b < a
}

console.log(sum_of_square_min_3(1,2,3) == 13);
console.log(sum_of_square_min_3(1,1,1) == 2);
console.log(sum_of_square_min_3(1,1,3) == 10);
console.log(sum_of_square_min_3(1,3,3) == 18);
console.log(sum_of_square_min_3(4,3,2) == 16+9);
console.log(sum_of_square_min_3(2,3,1) == 4+9);
console.log(sum_of_square_min_3(2,1,3) == 4+9);