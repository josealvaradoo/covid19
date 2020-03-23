export const orderBy = (array, key) => {
	let order = null
	const _key = key.includes("!") ? key.substr(1) : key
	
	if(key.includes("!")) {
		order = (a, b) => {
			if (a[_key] > b[_key]) {
				return -1;
			}
			if (a[_key] < b[_key]) {
				return 1;
			}
			return 0;
		}
	} else {
		order = (a, b) => {
			if (a[_key] < b[_key]) {
				return -1;
			}
			if (a[_key] > b[_key]) {
				return 1;
			}
			return 0;
		}
	}

	return array.sort(order);
}
