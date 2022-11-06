class Set{
    #container = []

    addElement(element){
        if(this.#container.length){
            // Check datanya
            if(this.#container.includes(element)){
                console.log("Data Exist")
            }else{
                this.#container.push(element)
            }
        }else{
            // Push
            this.#container.push(element)
        }
    }

    getContainer(){
        return this.#container
    }
}

let nSet = new Set()
nSet.addElement("A")
nSet.addElement("A")
console.log(nSet.getContainer())
