import { Doc } from "./classes/doc.js";
import { List_Items } from "./classes/list-item.js";
const form = document.querySelector("form");
const ul = document.querySelector("ul");
let type = document.querySelector("#type");
let to_from = document.querySelector("#to-from");
let details = document.querySelector("#details");
let amount = document.querySelector("#amount");
const createInvoice = (to_from, details, amount) => new Doc("invoice", to_from, details, amount);
const createPayment = (to_from, details, amount) => new Doc("payment", to_from, details, amount);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let list = new List_Items(ul);
    let doc;
    const options = [to_from.value, details.value, amount.valueAsNumber];
    if (type.value == "invoice") {
        doc = createInvoice(...options);
    }
    else {
        doc = createPayment(...options);
    }
    list.render(doc);
    form.reset();
});
