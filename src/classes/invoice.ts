import { can_format } from "../interfaces/can-format.js";

export class Invoice implements can_format{
    constructor(
        readonly type: string = "invoice",
        private to_from: string,
        private description: string,
        private amount: number){
        
    }
    format = ():string => `${this.to_from} owes ${this.amount} for ${this.description}`
}