const canConstruct = (target = "", wordBank = [], memo = {}) => {
	if (target in memo) return memo[target];
	if (target.length === 0) return true;

	for (const word of wordBank) {
		if (target.indexOf(word) === 0) {
			const suffix = target.slice(word.length);

			if (canConstruct(suffix, wordBank, memo)) {
				return (memo[target] = true);
			}
		}
	}

	return (memo[target] = false);
};

console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); // true
console.log(
	canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
); // false
console.log(
	canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
		"e",
		"ee",
		"eee",
		"eeee",
		"eeeee",
		"eeeeee",
		"eeeeeee",
	])
); // false
