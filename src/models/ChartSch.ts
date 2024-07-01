import { Schema, model, SchemaTypes } from "mongoose";
const objId = SchemaTypes.ObjectId;

const ChartSch = new Schema(
  {
    amount: { type: Number, required: true },
  },
);

export default model("Chart", ChartSch);

// module.exports = model('Item', ItemSchema)
