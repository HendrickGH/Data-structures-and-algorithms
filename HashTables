class HashTable {
	constructor(size) {
		this.data = new Array(size);
	}
	_hash(key) {
		return [...key].reduce((prev, _curr, i) => {
			return (prev + key.charCodeAt(i) * i) % this.data.length;
		}, 0);
	}
	set(key, value) {
		const address = this._hash(key);
		if (!this.data[address]) {
			this.data[address] = [];
		}
		this.data[address].push([key, value]);
		return this.data;
	}
	get(key) {
		const address = this._hash(key);
		const currentBucket = this.data[address];
		if (!currentBucket) return undefined;
		const [[, value]] = currentBucket;
		return value;
	}
	keys() {
		const keysArrays = [];
		for (let i = 0; i < this.data.length; i++) {
			const element = this.data[i];
			if (element) keysArrays.push(element[0][0]);
		}
		return keysArrays;
		// return this.data.flat(2).filter((e, i) => !(i % 2));
	}
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000);
myHashTable.set('apples', 54);
const x = myHashTable.get('apples');
console.log(x);
console.log(myHashTable.keys());
