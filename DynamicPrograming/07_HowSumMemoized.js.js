const howSum = (targetNum = 0, numbers = [], memo = {}) => {
	if (targetNum in memo) return memo[targetNum];
	if (targetNum === 0) return [];
	if (targetNum < 0) return null;

	for (const num of numbers) {
		const remainder = targetNum - num;
		const remainderResult = howSum(remainder, numbers, memo);
		if (remainderResult !== null) {
			memo[targetNum] = [...remainderResult, num];
			return memo[targetNum];
		}
	}

	memo[targetNum] = null;
	return memo[targetNum];
};

console.log(howSum(7, [2, 4]));
console.log(howSum(8, [2, 4]));
console.log(howSum(300, [7, 14]));
