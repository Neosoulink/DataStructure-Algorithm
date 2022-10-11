const canConstruct = (target = "", wordBank = []) => {
	if (target.length === 0) return true;

	for (const word of wordBank) {
		// if (new RegExp(`^${word}`).test(target)) {
		if (target.indexOf(word) === 0) {
			// const suffix = target.replace(word, "");
			const suffix = target.slice(word.length);

			if (canConstruct(suffix, wordBank)) {
				return true;
			}
		}
	}

	return false;
};

console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); // true
console.log(
	canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
); // false
