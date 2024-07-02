import { Schema, model, SchemaTypes } from "mongoose";
const objId = SchemaTypes.ObjectId;

const MarketSch = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    logo: {
      secure_url: { type: String, required: true },
      public_id: { type: String, required: true },
    },
    front: {
      secure_url: { type: String, required: true },
      public_id: { type: String, required: true },
    },
    map: { type: String },
    ws: { type: String },
    ig: { type: String },
    reviews: {type:[{ user_id: String, stars: Number }],default:[]},
    gallery: [
      {
        secure_url: { type: String, required: true },
        public_id: { type: String, required: true },
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default model("Market", MarketSch);

// module.exports = model('Item', ItemSchema)
