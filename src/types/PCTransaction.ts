import * as mongoose from "mongoose";
import {Schema} from "mongoose";

export interface PCTransaction extends mongoose.Document{
    fullTransaction: boolean,
    identifier: string,
    checkIn: {
        location: string,
    },
    checkOut: {
        location: string
    },
    product: {
        info: string,
        name: string
    },
    mode: string,
    mutation: number,
    mutationInfo: string,
    operator: string,
    card: string,
    date: number
}

let PCTransactionSchema: Schema = new Schema({
    fullTransaction: {type: Boolean},
    checkIn: {
        location: {type: String},
    },
    checkOut: {
        location: {type: String}
    },
    product: {
        info: {type: String},
        name: {type: String}
    },
    operator: {type: String},
    identifier: {type: String},
    mode: {type: String},
    mutation: {type: String},
    mutationInfo: {type: String},
    card: {type: String, index: true},
    date: {type: String, index: true}
});

export default mongoose.model<PCTransaction>('pc.transactions', PCTransactionSchema);