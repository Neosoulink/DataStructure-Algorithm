/**
 * That function return a boolean indication whether
 * or not it is possible to generate the targetSum using number from the array
 *
 * ! **Warning:** not optimized. Brut force with complexity of o(n^m) time & o(m) space
 * ! (where m = targetSum & n = numbers length)
 *
 * @param {number} targetSum
 * @param {number[]} numbers
 *
 * @returns {boolean} boolean
 */
function canSum(targetSum, numbers) {
	if (targetSum === 0) return true;
	if (targetSum < 0) return false;

	for (const num of numbers) {
		const remainder = targetSum - num;

		if (canSum(remainder, numbers)) return true;
	}

	return false;
}

console.log(canSum(7, [2, 3]));
console.log(canSum(7, [2, 4]));
