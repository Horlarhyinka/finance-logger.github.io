export class Invoice {
    constructor(type = "invoice", to_from, description, amount) {
        this.type = type;
        this.to_from = to_from;
        this.description = description;
        this.amount = amount;
        this.format = () => `${this.to_from} owes ${this.amount} for ${this.description}`;
    }
}
