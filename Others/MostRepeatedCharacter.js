const findTheMostAlpha = (s) => {
	counter = {};
	if (typeof s === "string") {
		s.split("").map((val) => {
			if (new RegExp(/[a-z]/, "i").test(val)) {
				if (typeof counter[val] === "number") {
					counter[val] += 1;
				} else {
					counter[val] = 1;
				}
			}
		});
	}

	let res = { count: 0, key: null };
	Object.keys(counter).map((key, i) => {
		if (counter[key] > res.count) {
			res.key = key;
			res.count = counter[key];
		}
	});
	return res;
};

console.log(findTheMostAlpha("4545555555DDDDDDDDDCaddddd8998"));
