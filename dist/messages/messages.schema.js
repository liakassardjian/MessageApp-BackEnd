"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageSchema = void 0;
const mongoose = require("mongoose");
exports.MessageSchema = new mongoose.Schema({
    name: String,
    email: String,
    subject: String,
    body: String,
});
//# sourceMappingURL=messages.schema.js.map