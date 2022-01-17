/**
 * Simple fibonacci recursion
 *
 * ! **Warning:** bad practice! Time complexity **0(n²)**
 *
 * @param {number} n
 * @returns {number} return the fibonacci number
 */
function fib(n) {
	if (n <= 2) return 1;

	return fib(n - 1) + fib(n - 2);
}

console.log(fib(9));
