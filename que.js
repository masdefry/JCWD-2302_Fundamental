class Queue{
    #container = []

    enqueue(element){
        this.#container.push(element)
    }

    dequeu(){
        this.#container.shift()
    }

    getContainer(){
        return this.#container 
    }
}

let nQue = new Queue()
nQue.enqueue("A")
nQue.enqueue("B")
nQue.enqueue("C")
nQue.dequeu()
console.log(nQue.getContainer())

