export class Payment {
    constructor(type = "payment", to_from, description, amount) {
        this.type = type;
        this.to_from = to_from;
        this.description = description;
        this.amount = amount;
        this.format = () => `${this.to_from} is owed ${this.amount} for ${this.description}`;
    }
}
