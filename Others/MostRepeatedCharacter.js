const findTheMostAlpha = (s) => {
	counter = {};
	if (typeof s === "string") {
		s.split("").map((val) => {
			if (typeof counter[val] === "number") {
				counter[val] += 1;
			} else {
				counter[val] = 1;
			}
		});
	}

	let res = { val: 0, key: null };
	Object.keys(counter).map((key, i) => {
		if (counter[key] > res.val) {
			res.key = key;
			res.val = counter[key];
		}
	});
	return res.key;
};

console.log(findTheMostAlpha("4545DDDCaddddd8998"));
