import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },

    imageUrl: {
        type: String,
        required: true,

    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    },
    clerkId: {
        type: String,
        required: true,
        unique: true
    },

}, {timestamps: true})

export const User = mongoose.model('User', userSchema)

