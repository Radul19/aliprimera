import { RequestHandler } from "express";
import path from "path";
import ImageSch from "../models/ImageSch";
import { deleteImage, uploadImage } from "../helpers/uploadImages";
import NewSch from "../models/NewSch";
import ChartSch from "../models/ChartSch";
const debug = true;

const indexPath = path.resolve(__dirname, "../app", "index.html");
// console.log(indexPath);

export const test: RequestHandler = async (req, res) => {
  //   if (debug) console.log("#test");
  res.sendFile(indexPath);
};
export const loadAll: RequestHandler = async (req, res) => {
  if (debug) console.log("#loadAll");
  try {
    
    await ChartSch.findOneAndUpdate({ _id: "6682def3e5b948a57d5e16cc" }, { $inc: { amount: 1 } });
    const gallery = await ImageSch.find();
    const news = await NewSch.find();
    res.send({ gallery, news });
  } catch (error: any) {
    res.status(400).json({ msg: error.message });
  }
};
export const upImage: RequestHandler = async (req, res) => {
  if (debug) console.log("#upImage");
  try {
    const { secure_url: su, public_id: pi } = req.body;
    const { secure_url, public_id } = await uploadImage({
      secure_url: su,
      public_id: pi,
    });

    await ImageSch.create({ secure_url, public_id });
    const result = await ImageSch.find();
    res.send(result);
  } catch (error: any) {
    console.log(error);
    res.status(400).json({ msg: error.message });
  }
};
export const updateImage: RequestHandler = async (req, res) => {
  if (debug) console.log("#updateImage");
  try {
    const { secure_url: su, public_id: pi, _id } = req.body;
    if (!_id) return res.status(400).json({ msg: "Imagen no encontrada" });
    const { secure_url, public_id } = await uploadImage({
      secure_url: su,
      public_id: pi,
    });

    await ImageSch.findOneAndUpdate({ _id }, { secure_url, public_id });
    const result = await ImageSch.find();
    res.send(result);
  } catch (error: any) {
    res.status(400).json({ msg: error.message });
  }
};
export const delImage: RequestHandler = async (req, res) => {
  if (debug) console.log("#delImage");
  try {
    const { public_id, _id } = req.body;
    await deleteImage(public_id);

    await ImageSch.findOneAndDelete({ _id });
    const result2 = await ImageSch.find();
    res.send(result2);
  } catch (error: any) {
    res.status(400).json({ msg: error.message });
  }
};

export const createNews: RequestHandler = async (req, res) => {
  if (debug) console.log("#createNews");
  try {
    const { secure_url: su, public_id: pi, link, title } = req.body;
    const { secure_url, public_id } = await uploadImage({
      secure_url: su,
      public_id: pi,
    });

    await NewSch.create({ secure_url, public_id, link, title });
    const result = await NewSch.find();
    res.send(result);
  } catch (error: any) {
    res.status(400).json({ msg: error.message });
  }
};

export const updateNews: RequestHandler = async (req, res) => {
  if (debug) console.log("#updateNews");
  try {
    const { secure_url: su, public_id: pi, _id, title, link } = req.body;
    if (!_id) return res.status(400).json({ msg: "Noticia no encontrada" });
    const { secure_url, public_id } = await uploadImage({
      secure_url: su,
      public_id: pi,
    });

    await NewSch.findOneAndUpdate(
      { _id },
      { secure_url, public_id, title, link }
    );
    const result = await NewSch.find();
    res.send(result);
  } catch (error: any) {
    res.status(400).json({ msg: error.message });
  }
};

export const delNews: RequestHandler = async (req, res) => {
  if (debug) console.log("#delNews");
  try {
    const { public_id, _id } = req.body;
    await deleteImage(public_id);

    await NewSch.findOneAndDelete({ _id });
    const result2 = await NewSch.find();
    res.send(result2);
  } catch (error: any) {
    res.status(400).json({ msg: error.message });
  }
};
export const createChart: RequestHandler = async (req, res) => {
  if (debug) console.log("#createChart");
  try {
    await ChartSch.create({ amount: 0 });
    res.send(true);
  } catch (error: any) {
    res.status(400).json({ msg: error.message });
  }
};
export const plusChart: RequestHandler = async (req, res) => {
  if (debug) console.log("#plusChart");
  try {
    await ChartSch.findOneAndUpdate({ _id: "6682def3e5b948a57d5e16cc" }, { $inc: { amount: 1 } });
    res.send(true);
  } catch (error: any) {
    res.status(400).json({ msg: error.message });
  }
};
export const getChart: RequestHandler = async (req, res) => {
  if (debug) console.log("#getChart");
  try {
    const result = await ChartSch.findById("6682def3e5b948a57d5e16cc");
    res.send(result);
  } catch (error: any) {
    res.status(400).json({ msg: error.message });
  }
};

// export const zzzzzzz: RequestHandler = async (req, res) => {
//   if (debug) console.log("#test");
//   try {
//     res.send("ok");
//   } catch (error: any) {
//     res.status(400).json({ msg: error.message });
//   }
// };

/**tesispass123 */
