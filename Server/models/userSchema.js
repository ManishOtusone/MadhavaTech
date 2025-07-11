const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true, trim: true, },

    lastName: { type: String, required: true, trim: true, },

    email: { type: String, required: true },

    password: { type: String, required: true, },

    accountType: { type: String, enum: ["Admin", "Visitor"], required: true },

    phoneNumber: { type: String, required: true }
}, {
    timestamps: true,
    versionKey: false
});

module.exports = mongoose.model("User", userSchema)

