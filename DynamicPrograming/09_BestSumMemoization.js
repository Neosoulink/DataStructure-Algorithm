const bestSum = (targetNum = 0, numbers = [], memo = {}) => {
	if (targetNum in memo) return memo[targetNum];
	if (targetNum === 0) return [];
	if (targetNum < 0) return null;

	let shortestCombination = null;

	for (const num of numbers) {
		const remainder = targetNum - num;
		const remainderCombination = bestSum(remainder, numbers, memo);

		if (remainderCombination) {
			const combination = [...remainderCombination, num];

			if (
				shortestCombination === null ||
				combination.length < shortestCombination.length
			) {
				shortestCombination = combination;
				memo[targetNum] = shortestCombination;
			}
		}
	}

	memo[targetNum] = shortestCombination;
	return memo[targetNum];
};

console.log(bestSum(8, [2, 4]));
console.log(bestSum(300, [2, 4]));
