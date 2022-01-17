/**
 * Simple fibonacci recursion with memoization
 *
 * Optimization of 00_FibonacciRecursion.js
 *
 * Complexity of 2n, simplified by n. o(n) time & o(n) space
 *
 * @param {number} n
 * @param {object} memo
 * @returns {number} return the fibonacci number
 */
function fib(n, memo = {}) {
	if (n in memo) return memo[n];
	if (n <= 2) return 1;

	memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
	return memo[n];
}

console.log(fib(9));
console.log(fib(50));
