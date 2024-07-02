import { Schema, model, SchemaTypes } from "mongoose";

const CardSch = new Schema(
  {
    name: { type:String, required: true },
    email: { type:String, required: true },
    text: { type:String, required: true },
  },
);

export default model("Card", CardSch);

// module.exports = model('Item', ItemSchema)
