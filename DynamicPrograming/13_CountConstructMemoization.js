const countConstruct = (target = "", wordBank = [], memo = {}) => {
	if (target in memo) return memo[target];
	if (target === "") return 1;

	let counter = 0;

	for (const word of wordBank) {
		if (target.indexOf(word) === 0) {
			const countConstructResult = countConstruct(
				target.slice(word.length),
				wordBank,
				memo
			);

			counter += countConstructResult;
		}
	}

	return (memo[target] = counter);
};

console.log(countConstruct("purple", ["purp", "p", "ur", "le", "purpl"]));
console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
console.log(
	countConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
);
console.log(
	countConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])
);
console.log(
	countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
		"e",
		"ee",
		"eee",
		"eeee",
		"eeeee",
		"eeeeee",
		"eeeeeee",
	])
);
