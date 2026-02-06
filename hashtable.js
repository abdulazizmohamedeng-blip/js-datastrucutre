class hashtable {
  constructor(size) {
    this.data = new Array(size);
  }
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }
  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[this._hash(key)].push([key, value]);
  }

  get(key) {
    let address = this._hash(key);
    let currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] == key) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  }
}

let tb = new hashtable(2);
tb.set("apple", 20);
tb.set("banana", 30);
tb.set("orange", 40);
tb.set("strawberry", 50);
tb.set("kuwi", 40);

console.log(tb);
