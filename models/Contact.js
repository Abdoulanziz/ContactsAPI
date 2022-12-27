const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please, provide a name for this contact"],
    },
    number: {
      type: String,
      required: [true, "Please, provide a phone number"],
    },
  },
  { timestamps: true }
);

const contactModel = mongoose.model("Contacts", contactSchema);
module.exports = contactModel;
