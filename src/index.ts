import { Doc } from "./classes/doc.js"
import { List_Items } from "./classes/list-item.js"

const form = document.querySelector("form") as HTMLFormElement
const ul = document.querySelector("ul") as HTMLUListElement

let type = document.querySelector("#type") as HTMLSelectElement
let to_from = document.querySelector("#to-from") as HTMLInputElement
let details = document.querySelector("#details") as HTMLInputElement
let amount = document.querySelector("#amount") as HTMLInputElement

const createInvoice:Function = (to_from: string, details: string, amount: number ):Doc =>new Doc("invoice", to_from, details, amount)
const createPayment:Function = (to_from: string, details: string, amount: number ):Doc =>new Doc("payment", to_from, details, amount)

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let list = new List_Items(ul)
    let doc: Doc
    const options:[string, string, number] = [to_from.value, details.value, amount.valueAsNumber]
    if(type.value == "invoice"){
        doc = createInvoice(...options)
    }else{
        doc = createPayment(...options)
    }
        list.render(doc)
        form.reset()
})
