class stackArray {
  constructor() {
    this.data = [];
  }
  push(value) {
    this.data.push(value);
  }
  pop() {
    return this.data.pop();
  }
  top() {
    return this.data[this.data.length - 1];
  }
  empty() {
    return this.data.length == 0;
  }
}

let st = new stack();
st.push(1);
st.push(2);
st.push(3);
st.push(4);
st.pop();
st.pop();
st.pop();
st.pop();

console.log(st);
console.log(st.empty());
