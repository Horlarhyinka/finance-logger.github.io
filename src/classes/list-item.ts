import { can_format } from "../interfaces/can-format.js"

export class List_Items{
    constructor(private container: HTMLUListElement){
        
    }
    private li: HTMLLIElement = document.createElement("li")
    private h4: HTMLHeadElement = document.createElement("h4")
    private p: HTMLParagraphElement = document.createElement("p")

    render (doc:can_format){
        this.h4.innerText = doc.type
        this.li.append(this.h4)
        this.p.innerText = doc.format()
        this.li.append(this.p)
        this.container.append(this.li)
    }
}