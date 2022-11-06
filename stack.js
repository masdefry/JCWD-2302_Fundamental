class Stack{
    #maxSize = 20;
    #container = [];

    constructor(maxSize = 10){
        this.#maxSize = maxSize
    }

    push(element){
        if(this.#maxSize === this.#container.length){
            console.log("Data Full!")
        }else{
            this.#container.push(element)
        }
    }

    pop(){
        this.#container.pop()
    }

    get(){
        console.log(this.#container)
    }
}

let nStack = new Stack()
nStack.push("A")
nStack.push("B")
nStack.push("C")
nStack.push("C")
nStack.push("C")
nStack.push("C")
nStack.push("C")
nStack.push("C")
nStack.push("C")
nStack.push("C")
nStack.push("C")
nStack.push("C")
nStack.push("C")
nStack.push("C")
nStack.push("A")
nStack.get()
nStack.pop()
nStack.get()