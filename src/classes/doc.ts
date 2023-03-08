import { can_format } from "../interfaces/can-format.js";

export class Doc implements can_format{
    constructor(
        readonly type: string,
        private to_from: string,
        private description: string,
        private amount: number){
        
    }
    private readonly phrase = this.type == "invoice"?"owes":"is owed"
    format = ():string => `${this.to_from} ${this.phrase} ${this.amount} for ${this.description}`
}