class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

class stackLinkedList {
  constructor() {
    this.end = null;
    this.front = null;
    this.length = 0;
  }
  push(value) {
    let newNode = new Node(value);
    // if empty
    if (this.length == 0) {
      this.front = newNode;
      this.length++;
      return;
    }
    newNode.next = this.front;
    this.front = newNode;
    this.length++;
  }
  pop() {
    if (this.length > 0) {
      let element = this.front.data;
      this.front = this.front.next;
      this.length--;
      return element;
    }
  }
}

let st = new stackLinkedList();
st.push(1);
st.push(2);
st.push(3);

console.log(st);
