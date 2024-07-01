import { Schema, model, SchemaTypes } from "mongoose";
const objId = SchemaTypes.ObjectId;

const ImageSch = new Schema(
  {
    secure_url: { type: String, required: true },
    public_id: { type: String, required: true },
  },
);

export default model("Image", ImageSch);

// module.exports = model('Item', ItemSchema)
