/**
 * Grid traveler memoized.
 *
 * Optimization of 02_GridTraveler.js
 *
 * ? Complexity of m * n. Memoization : o(m*n) time & o(m+n) space
 *
 * @param {number} col Number of columns
 * @param {number} row Number of rows
 * @param {object} memo Memoize ref
 *
 * @returns {number} Return number of ways that array can be traversed
 */

function gridTraveler(col, row, memo = {}) {
	const key = col + "," + row;

	if (memo[key]) return memo[key];
	if (col === 1 && row === 1) return 1;
	if (col <= 0 || row <= 0) return 0;

	memo[key] =
		gridTraveler(col - 1, row, memo) + gridTraveler(col, row - 1, memo);
	return memo[key];
}

console.log(gridTraveler(2, 3));
console.log(gridTraveler(18, 18));
