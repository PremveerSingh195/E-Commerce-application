import mongoose, { Schema, Document } from "mongoose";


export interface pdf extends Document {
    thumbnail: string;
    file: string;
    deletedWhen: Date;
    createdat: Date
}

const pdfschema: Schema<pdf> = new Schema({
    thumbnail: {
        type: String,
        required: true
    },
    file: {
        type: String,
        required: true,
    },
    deletedWhen: {
        type: Date,
        required: true,
    },
    createdat: {
        type: Date,
        required: true,
        default: Date.now,
    }
})

export interface User extends Document {
    username: string;
    email: string;
    password: string;
    verifyCode: string;
    verifyCodeExpiry: Date;
    isVerified: boolean;
    Pdfs: pdf[];
}

const UserSchema: Schema<User> = new Schema({
    username: {
        type: String,
        required: [true, 'Username is required'],
        trim: true,
        unique: true
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        match: [/^ [a - zA - Z0 -9._ % +-] + @[a - zA - Z0 - 9. -] +\.[a - zA - Z]{ 2, }$/, 'Enter a valid email']
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
    },
    verifyCode: {
        type: String,
        required: [true, 'verify code is required']
    },
    verifyCodeExpiry: {
        type: Date,
        required: [true, 'verify code expiry is required']
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    Pdfs: [pdfschema]
})

const userModel = (mongoose.models.User as mongoose.Model<User>) || (mongoose.model<User>("User", UserSchema))

export default userModel