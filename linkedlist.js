class Node {
    constructor(element) {
      this.element = element;
      this.next = null;
    }
}
  
class LinkedList {
    constructor() {
      this.head = null;
      this.size = 0;
    }
  
    add(element) {
      let node = new Node(element); 
      // Membuat { 
      //   element: "A",
      //   next: null
      // }

    // Membuat { 
      //   element: "C",
      //   next: null
      // }
  
      let current;
  
      if (this.head == null) { // Akan nge-cek head nya ada apa tidak? Apabila tidak ada, maka element dijadikan head
        this.head = node;
        /*
            head: {
                element: "A", 
                next: null
            }
        */
      } else { // Apabila sudah ada, dia akan nge-cek apakah next element nya null or not? 
        current = this.head;
        /*
            head: {
                element: "A", 
                next: {
                    Node
                }
            }
        */

        /*
        head: {
            element: "A", 
            next: {
                element: "B",
                next: { 
                    element: "C",
                        next: null
                    }
            }
        }
    */
        while (current.next) {
          current = current.next;
        }
        // Apabila next nya null, maka next nya akan di isi dengan element baru
        current.next = node; 
        /*
            head: {
                element: "A", 
                next: {
                    element: "B",
                    next: null
                }
            }
        */
      }
  
      this.size += 1;
    }
  
    printList() {
      let curr = this.head;
    //   {element: a, next: {node...}}
    //   {element: b, next: {node...}}
  
      while (curr) {
        console.log(curr.element);
        curr = curr.next;
      }
    }
  
    insertAt(element, index) { // element = "D", index = 0
      if (index < 0 || index > this.size) {
        return console.log("Please enter a valid index");
      } else {
        const node = new Node(element);
        /*
            { element: "E", next: null }
        */
        let curr = this.head; // { element: "D", next: { Node... } }
  
        if (index == 0) {
            // Apabila ingin menambahkan node di paling awal (menjadi head)
            /*
                head: {
                    element: "D", 
                    next: {
                        element: "A",
                        next: {
                            element: "B", 
                            next: {
                                Node...
                            }
                        }
                    }
                }
            */
          node.next = this.head; //  { element: "D", next: { element: "A", next: { Node... } } }
          this.head = node; //
        } else { // Apabila menambahkan node di antara index
          curr = this.head;
            // {element: "D", next: {Node...}}   
          let prev;
  
          for (let i = 0; i < index; i++) { // Jalan 1x
            // Akan nge-looping mulai dari head sampai ke node index yang dituju
            prev = curr; // {element: "D", next: {Node...}} 
            curr = curr.next; // {element: "A", next: {Node...}}
          }
  
          prev.next = node;  // {element: "D", next: element: "E", next: null } 
          node.next = curr;
        }
        this.size += 1;
      }
    }
  
    removeAt(index) {
      if (index < 0 || index >= this.size) {
        return console.log("Please enter a valid index");
      } else {
        /*
            head: {
                element: "C", 
                next: {
                    element: "A",
                    next: {
                        element: "B", 
                        next: null
                    }
                }
            }
        */
        let curr = this.head; // Current berisikan head (C dst)
        let prev = curr; // Previous berisikan current (C dst)
  
        if (index === 0) { // Apabila ingin menghapus index paling awal, maka head nya langsung ditimpa dengan data next nya
          this.head = curr.next; // Berisikan A dst
        } else { // Apabila ingin menghapus index > 0
          for (let i = 0; i < index; i++) {
            prev = curr; // Previous berisikan current
            curr = curr.next; // Current berisikan data current.next nya
          }
  
          prev.next = curr.next;
        }
  
        this.size -= 1;
  
        return curr.element;
      }
    }
  
    removeElement(element) {
      let current = this.head;
      let prev = null;
  
      while (current != null) {
        if (current.element === element) {
          if (prev == null) {
            this.head = current.next;
          } else {
            prev.next = current.next;
          }
  
          this.size -= 1;
  
          return current.element;
        }
  
        prev = current;
        current = current.next;
      }
  
      return null;
    }
  
    indexOf(element) {
      let count = 0;
      let current = this.head;
  
      while (current != null) {
        if (current.element === element) {
          return count;
        }
  
        count += 1;
        current = current.next;
      }
  
      return -1;
    }
  }
  
  let linkedList = new LinkedList();
  linkedList.add("A");
  linkedList.add("B");
  linkedList.add("C");
  linkedList.insertAt("D", 0)
  linkedList.insertAt("E", 1);
  console.log(linkedList)