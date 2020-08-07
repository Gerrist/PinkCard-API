import * as mongoose from "mongoose";
import {Schema} from "mongoose";

export interface PCUser extends mongoose.Document{
    id: string,
    token: string,
    email: string
}

let PCUserSchema: Schema = new Schema({
    id: {type: String, index: true},
    token: {type: String, index: true},
    string: {type: String},
});

export default mongoose.model<PCUser>('pc.users', PCUserSchema);