const mongoose = require("mongoose");

const InputSchema = new mongoose.Schema({
  fieldname: {
    type: String
  },
  fieldtype: {
    type: String
  },
  required: {
    type: String
  },
  defaultvalue: {
    type: String
  }
});

const Input = mongoose.model("Input", InputSchema);
module.exports = Input;
