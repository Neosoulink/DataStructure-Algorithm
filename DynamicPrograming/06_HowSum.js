const howSum = (targetNum = 0, numbers = []) => {
	if (targetNum === 0) return [];
	if (targetNum < 0) return null;

	for (const num of numbers) {
		const remainder = targetNum - num;
		const remainderResult = howSum(remainder, numbers);
		if (remainderResult !== null) {
			return [...remainderResult, num];
		}
	}

	return null;
};

console.log(howSum(7, [2, 4]));
console.log(howSum(8, [2, 4]));
