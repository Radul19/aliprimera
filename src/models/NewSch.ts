import { Schema, model, SchemaTypes } from "mongoose";
const objId = SchemaTypes.ObjectId;

const NewSch = new Schema(
  {
    secure_url: { type: String, required: true },
    public_id: { type: String, required: true },
    link: { type: String, required: true },
    title: { type: String, required: true },
  },
);

export default model("News", NewSch);

// module.exports = model('Item', ItemSchema)
