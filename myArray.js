class myArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  // get
  get(index) {
    return this.data[index];
  }
  // Push to end
  push(val) {
    this.data[this.length] = val;
    this.length++;
    return val;
  }
  // Delete from start
  pop() {
    const current = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return current;
  }
  // Delete from bgening
  shift() {
    for (let i = 0; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[length - 1];
    this.length--;
  }
  // Add to begin
  unshift(val) {
    for (let i = this.length; i >= 0; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.data[0] = val;
    this.length++;
  }
}

let arr = new myArray();
arr.push(1);
arr.push(2);
arr.push(3);
arr.push(4);
arr.push(5);
arr.unshift(10);
arr.unshift(20);
arr.shift();

console.log(arr.get(0));
