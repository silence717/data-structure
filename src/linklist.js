//节点
function Node(element) {
  // 当前节点的元素
  this.element = element;
  // 下一个节点链接
  this.next = null;
  // 上一个节点的链接
  this.previous = null;
}

//链表类
function LinkList() {
  // 头节点
  this.head = new Node("head");
  // 查找节点
  this.find = find;
  // 查找链表的最后一个元素
  this.findLast = findLast;
  // 插入节点
  this.insert = insert;
  // 删除节点
  this.remove = remove;
  // 查找前一个节点
  this.findPrev = findPrev;
  // 显示链表
  this.display = display;
  // 反向显示链表
  this.dispReverse = dispReverse;
}

// 查找给定节点
function find(item) {
  let currrentNode = this.head;

  while (currrentNode.element !== item) {
    currrentNode = currrentNode.next;
  }

  return currrentNode;
}

// 查找最后一个节点
function findLast() {
    let currentNode = this.head;

    while(currentNode.next !== null) {
        currentNode = currrentNode.next;
    }

    return currentNode;
}

// 插入节点
function insert(newElement, item) {
  let newNode = new Node(newElement);
  let currrentNode = this.find(item);

  newNode.next = currrentNode.next;
  newNode.previous = currrentNode;
  currrentNode.next = newNode;
}

// 查找待删除节点的前一个节点
function findPrev(item) {
  let currentNode = this.head;

  while (currentNode.next !== null && currentNode.next.element !== item) {
    currentNode = currentNode.next;
  }

  return currentNode;
}

// 删除节点
function remove(item) {
  let prevNode = this.find(item);

  if (prevNode !== null) {
    currentNode.previous.next = currentNode.next;
    currentNode.next.previous = currentNode.previous;
    currentNode.next = null;
    currrentNode.previous = null;
    prevNode.next = prevNode.next.next;
  }
}


// 显示链表元素
function display() {
    let currentNode = this.head;
    while (currentNode.next !== null) {
      console.log(currentNode.next.element);
      currentNode = currentNode.next;
    }
}

// 反向显示链表元素
function dispReverse() {
    let currentNode = this.findLast();

    while(currentNode !== null) {
        console.log(currrentNode.element);
        currentNode = currentNode.previous;
    }
}


let fruits = new LinkList();

fruits.insert("Apple", "head");
fruits.insert("Banana", "Apple");
fruits.insert("Pear", "Banana");

console.log(fruits.display());

fruits.insert("Grape", "Pear");

console.log(fruits.display());

fruits.remove("Banana");

console.log(fruits.display());
