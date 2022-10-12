let isBalanced = (input) => {
	let brackets = "[]{}()<>";
	let stack = [];

	for (let bracket of input) {
		let bracketsIndex = brackets.indexOf(bracket);

		if (bracketsIndex === -1) {
			continue;
		}

		if (bracketsIndex % 2 === 0) {
			stack.push(bracketsIndex + 1);
		} else {
			const POP = stack.pop();
			if (POP !== bracketsIndex) {
				return false;
			}
		}
	}
	return stack.length === 0;
};

console.log(isBalanced("{()}[]"));

console.log(isBalanced("([]"));
