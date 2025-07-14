const mongoose = require("mongoose");

const querySchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    subject: { type: String, required: true },
    message: { type: String, required: true, },
    status: { type: String, enum: ["pending", "in-progress", "resolved"], default: "pending", },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }

}, {
    timestamps: true,
    versionKey: false
});

module.exports = mongoose.model("Query", querySchema);
