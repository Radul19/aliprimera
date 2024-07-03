import { Schema, model, SchemaTypes } from "mongoose";
const objId = SchemaTypes.ObjectId;

const ChartSch = new Schema(
  {
    date: { type:String, required: true },
    users: { type:[String], required: true },
  },
);

export default model("Chart", ChartSch);

// module.exports = model('Item', ItemSchema)
