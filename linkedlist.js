class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class linkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(val) {
    // if empty
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  prepend(value) {
    let newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  insert(index, value) {
    let newNode = new Node(value);
    let currentIndex = 0;
    let temp = this.head;
    if (index >= this.length) {
      return this.append(value);
    }
    if (index == 0) {
      this.prepend(value);
      return;
    }
    while (temp != null) {
      if (currentIndex + 1 == index) {
        newNode.next = temp.next;
        temp.next = newNode;
        this.length++;
        return;
      }
      currentIndex++;
      temp = temp.next;
    }
  }

  remove(index) {
    // remove from begining
    if (index == 0) {
      this.head = this.head.next;
      this.length--;
      return;
    }
    let temp = this.head;
    let count = 0;
    while (temp != null) {
      if (count + 1 == index) {
        // if last element change tail
        if (temp.next == this.tail) {
          this.tail = temp;
        }
        temp.next = temp.next.next;
        this.length--;
      }
      count++;
      temp = temp.next;
    }
  }

  traverse() {
    let temp = this.head;
    while (temp != null) {
      console.log(temp.data);
      temp = temp.next;
    }
  }
}

let newList = new linkedList();
newList.append(1);
newList.append(2);
newList.append(3);
newList.append(4);
newList.append(5);
newList.append(6);

newList.remove(5);
newList.append(8);
newList.append(2);

newList.traverse();
console.log(newList);
