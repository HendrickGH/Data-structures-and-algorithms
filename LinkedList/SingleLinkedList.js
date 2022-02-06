class LinkedList {
	constructor(value) {
		this.length = 1;
		this.head = {
			value,
			next: null,
		};
		this.tail = this.head;
	}
	append(value) {
		const newNode = {
			value,
			next: null,
		};
		this.tail.next = newNode;
		this.tail = newNode;
		this.length++;
		return this;
	}
	prepend(value) {
    this.head = {
			value,
			next: this.head,
		}; 
    this.length++; 
		return this;
	}
  printList() {
    const array = []; 
    let currentNode = this.head
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next; 
    }
    return array;
  }
  insert(index, value) {
    if (index === 0) {
      this.prepend(value); 
      return this.printList(); 
    }
    if (index >= this.length) {
      this.append(value);
      return this.printList()
    }
    const leader = this.traverseToIndex(--index);
    const newNode = {
      value, 
      next: leader.next,
    }
    this.length++; 
    leader.next = newNode; 
    return this.printList(); 
  }
  remove(index){
    this.length--;
    if (index <= 0) {
      this.head = this.head.next; 
      return this.printList()
    }
    if (index > this.length) {
      const leader = this.traverseToIndex(--this.length)
      leader.next = null;
      return this.printList()
    }
    const leader = this.traverseToIndex(--index); 
    const unwantedNode = leader.next; 
    leader.next = unwantedNode.next;  
    return this.printList()
  }
  traverseToIndex(index) {
    let counter = 0; 
    let currentNode = this.head; 
    while (counter !== index){
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
}
const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
console.log(myLinkedList.length)
myLinkedList.printList();
const obj = myLinkedList.head;
console.log({obj})
