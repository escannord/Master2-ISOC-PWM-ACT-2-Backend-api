const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    nom: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    age: { type: Number, required: true }
});
module.exports = mongoose.model("User", UserSchema);