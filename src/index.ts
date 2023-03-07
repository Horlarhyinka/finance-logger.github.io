import { Invoice } from "./classes/invoice.js"
import { List_Items } from "./classes/list-item.js"
import { Payment } from "./classes/payment.js"
import { can_format } from "./interfaces/can-format.js"

const form = document.querySelector("form") as HTMLFormElement
const ul = document.querySelector("ul") as HTMLUListElement

let type = document.querySelector("#type") as HTMLSelectElement
let to_from = document.querySelector("#to-from") as HTMLInputElement
let details = document.querySelector("#details") as HTMLInputElement
let amount = document.querySelector("#amount") as HTMLInputElement

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let list = new List_Items(ul)
    let doc: can_format
    if(type.value == "invoice"){
        doc = new Invoice(type.value, to_from.value, details.value, amount.valueAsNumber)
    }else{
        doc = new Payment(type.value, to_from.value, details.value, amount.valueAsNumber) 
    }
        list.render(doc)
        form.reset()
})
