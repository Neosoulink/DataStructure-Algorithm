/**
 * Simple fibonacci recursion
 *
 * ! **Warning:** bad practice! Complexity n². Brute force: **0(n²) time** & **0(n²) space**
 *
 * @param {number} n
 * @returns {number} return the fibonacci number
 */
function fib(n) {
	if (n <= 2) return 1;

	return fib(n - 1) + fib(n - 2);
}

console.log(fib(9));
