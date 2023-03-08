export class Doc {
    constructor(type, to_from, description, amount) {
        this.type = type;
        this.to_from = to_from;
        this.description = description;
        this.amount = amount;
        this.phrase = this.type == "invoice" ? "owes" : "is owed";
        this.format = () => `${this.to_from} ${this.phrase} ${this.amount} for ${this.description}`;
    }
}
