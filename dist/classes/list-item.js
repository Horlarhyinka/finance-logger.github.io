export class List_Items {
    constructor(container) {
        this.container = container;
        this.li = document.createElement("li");
        this.h4 = document.createElement("h4");
        this.p = document.createElement("p");
    }
    render(doc) {
        this.h4.innerText = doc.type;
        this.li.append(this.h4);
        this.p.innerText = doc.format();
        this.li.append(this.p);
        this.container.append(this.li);
    }
}
