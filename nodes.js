class Node {
    element;
    total;
    next;
    constructor(element) {
        this.element = element;
    }

    getElement() {
        return this.element
    }

    setElement(element) {
        this.element = element
    }
}

class userNode extends Node {
    id;
    constructor(element, id) {
        super(element);
        this.id = id;
    }
    getNext() {
        return this.next;
    }
    setNext(node) {
        this.next = node;
    }

}

class purchaseNode extends Node{
    userId
    purchaseAmt;
    beerId;
    transactionId
    date;
    time;

    constructor(next) {
        super();
        this.next = next;
    }
}

class depositNode extends Node {
    userId;
    depositAmount
    constructor(parentNode, buyer, next) {
        super();
        this.parentNode = parentNode;
        this.buyer = buyer
        this.next = next;
    }
}

exports.userNode = userNode;
exports.purchaseNode = purchaseNode;
exports.depositNode = depositNode;
