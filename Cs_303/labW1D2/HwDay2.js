function sumrec (n){
    if(n===0){
        return n;
    }else{
        return n + sumrec(n-1)
    }
}

console.log(sumrec(5));

//Question2

let linkedList = {};
linkedList.next = { value: 1 };
linkedList.next.next = { value: 2 };
linkedList.next.next.next = { value: 5 };
linkedList.next.next.next.next = { value: 2 };
linkedList.next.next.next.next.next = { value: 7, next: null };


let node1 = linkedList.next.next;
linkedList.next = node1;
node1 = null;
console.log(`linkedList {${printList(linkedList.next)}}`);

function printList(linkedList) {
if (linkedList.next == null) {
return linkedList.value;
 } else {
return linkedList.value + ", " + printList(linkedList.next);
 }
}
console.log(`linkedList {${printList(linkedList.next)}}`);