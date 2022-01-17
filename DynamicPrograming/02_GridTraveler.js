/**
 * Grid traveler.
 *
 * Map a fictive 2D array to return the max way array
 * can be traversed only moving right or down,
 * from top-left to bottom-right of the array. m,n to 1,1.
 *
 * ! **Warning:** Not optimized. Complexity n+m. Brute force : o(2^n+m) time & o(n+m) space
 *
 * @param {number} col Number of columns
 * @param {number} row Number of rows
 *
 * @returns {number} Return number of ways that array can be traversed
 */

function gridTraveler(col, row) {
	if (col === 1 && row === 1) return 1;
	if (col <= 0 || row <= 0) return 0;
	return gridTraveler(col - 1, row) + gridTraveler(col, row - 1);
}

console.log(gridTraveler(2, 3));
