import { Invoice } from "./classes/invoice.js";
import { List_Items } from "./classes/list-item.js";
import { Payment } from "./classes/payment.js";
const form = document.querySelector("form");
const ul = document.querySelector("ul");
let type = document.querySelector("#type");
let to_from = document.querySelector("#to-from");
let details = document.querySelector("#details");
let amount = document.querySelector("#amount");
let dummy = new Invoice("invoice", "Header", "here goes description", 200);
let dummy_list = new List_Items(ul);
dummy_list.render(dummy);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let list = new List_Items(ul);
    let doc;
    if (type.value == "invoice") {
        doc = new Invoice(type.value, to_from.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(type.value, to_from.value, details.value, amount.valueAsNumber);
    }
    list.render(doc);
    form.reset();
});
