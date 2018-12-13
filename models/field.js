const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//var mongooseDynamic = require ('mongoose-dynamic-schemas');

const FieldSchema = new Schema(
  {
    //xyz: [Schema.Types.Mixed]
    // User_id: { type: String },
    // feeds: [Schema.Types.Mixed]
  },
  { strict: false }
);

const Field = mongoose.model("Field", FieldSchema);
module.exports = Field;
