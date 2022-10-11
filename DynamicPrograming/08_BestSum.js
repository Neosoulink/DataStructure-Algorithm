const bestSum = (targetNum = 0, numbers = []) => {
	if (targetNum === 0) return [];
	if (targetNum < 0) return null;

	let shortestCombination = null;

	for (const num of numbers) {
		const remainder = targetNum - num;
		const remainderCombination = bestSum(remainder, numbers);

		if (remainderCombination) {
			const combination = [...remainderCombination, num];
			if (
				shortestCombination === null ||
				combination.length < shortestCombination.length
			) {
				shortestCombination = combination;
			}
		}
	}

	return shortestCombination;
};

console.log(bestSum(8, [2, 4]));
