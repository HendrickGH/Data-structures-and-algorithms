class DoubleLinkedList {
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
      prev: null
		};
    newNode.prev = this.tail; 
		this.tail.next = newNode;
		this.tail = newNode;
		this.length++;
		return this;
	}
	prepend(value) {
    const newNode = {
			value,
			next: this.head,
      prev: null,
		}; 
    this.head.prev = newNode;
    this.head = newNode; 
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
  reverse() {
    if (!this.head.next) return this.head; 
    /* [1,10,5,16] 👇🏻*/
    let prev = this.head;
    let curr = prev.next; 
    while(curr) {
      const next = curr.next; 
      // next = this.head.next.next but dynamically
      curr.next = prev; 
      // curr.next = our full data structure
      prev = curr;  
      // prev = {curr.value, curr.next (is equal to our full data structure)}
      curr = next; 
      // curr = this.head.next.next 
    }
    this.head.next = null; // next: { } -> null
    this.head = prev; // full data structure -> last item
    // It took me 24 hours to understand this lol
    return this.printList()
  }
  insert(index, value) {
    if (index === 0) {
      this.prepend(value); 
      return this.printList(); 
    }
    if (index >= this.length) {
      this.append(value);
      return this.printList();
    }
    const leader = this.traverseToIndex(--index);
    const newNode = {
      value, 
      next: null,
      prev: null 
    }
    this.length++; 
    const follower = leader.next; 
    leader.next = newNode; 
    newNode.prev = leader; 
    newNode.next = follower; 
    follower.prev = newNode; 
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
const myLinkedList = new DoubleLinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16); 
myLinkedList.prepend(1); 
myLinkedList.printList()
myLinkedList.reverse()
