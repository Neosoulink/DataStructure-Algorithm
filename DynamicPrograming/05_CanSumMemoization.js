/**
 * That function return a boolean indication whether
 * or not it is possible to generate the targetSum using number from the array
 *
 * Optimization of 04_CanSum.js
 *
 * ? Complexity of m * n. Memoization: o(m*n) time & o(m) space
 *
 * @param {number} targetSum
 * @param {number[]} numbers
 * @param {object} memo
 *
 * @returns {boolean} boolean
 */
function canSum(targetSum, numbers, memo = {}) {
	if (targetSum in memo) return memo[targetSum];
	if (targetSum === 0) return true;
	if (targetSum < 0) return false;

	for (const num of numbers) {
		const remainder = targetSum - num;

		if (canSum(remainder, numbers, memo)) {
			memo[targetSum] = true;
			return true;
		}
	}

	memo[targetSum] = false;
	return false;
}

console.log(canSum(7, [2, 3]));
console.log(canSum(300, [2, 8]));
