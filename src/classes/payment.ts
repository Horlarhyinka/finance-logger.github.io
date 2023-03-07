import {can_format} from "../interfaces/can-format.js";

export class Payment implements can_format{
    constructor(
        readonly type: string = "payment",
        private to_from: string,
        private description: string,
        private amount: number
    ){}
    format = ():string => `${this.to_from} is owed ${this.amount} for ${this.description}`
}
