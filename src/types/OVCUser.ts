import * as mongoose from "mongoose";
import {Schema} from "mongoose";

export interface OVCUser extends mongoose.Document {
    id: string,
    token: string,
}

let OVCUserSchema: Schema = new Schema({
    id: {type: String},
    username: {type: String},
    password: {type: String},
    dataOwner: {type: String, index: true},
    refreshToken: {type: String},
    loginToken: {type: String},
    dataToken: {type: String},
    accessToken: {type: String},
    expireDate: {type: String},
});

export default mongoose.model<OVCUser>('pc.ovcusers', OVCUserSchema);