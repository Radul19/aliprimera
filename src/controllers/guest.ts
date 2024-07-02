import { RequestHandler } from "express";
import path from "path";
import ImageSch from "../models/ImageSch";
import {
  deleteImage,
  deleteImages,
  uploadImage,
} from "../helpers/uploadImages";
import NewSch from "../models/NewSch";
import ChartSch from "../models/ChartSch";
import MarketSch from "../models/MarketSch";
//@ts-ignore
import bcrypt from "bcrypt";
import UserSch from "../models/UserSch";
const debug = false;

const indexPath = path.resolve(__dirname, "../app", "index.html");
// console.log(indexPath);

export const test: RequestHandler = async (req, res) => {
  //   if (debug) console.log("#test");
  res.sendFile(indexPath);
};
export const loadAll: RequestHandler = async (req, res) => {
  if (debug) console.log("#loadAll");
  try {
    await ChartSch.findOneAndUpdate(
      { _id: "6682def3e5b948a57d5e16cc" },
      { $inc: { amount: 1 } }
    );
    const gallery = await ImageSch.find();
    const news = await NewSch.find();
    const markets = await MarketSch.find();
    res.send({ gallery, news, markets });
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

/** MARKET */
export const createMarket: RequestHandler = async (req, res) => {
  if (debug) console.log("#createMarket");
  try {
    const {
      name,
      description,
      logo: logoData,
      front: frontData,
      map,
      ws,
      ig,
      category,
    } = req.body;
    const logo = await uploadImage({
      secure_url: logoData.secure_url,
      public_id: logoData.public_id,
    });
    const front = await uploadImage({
      secure_url: frontData.secure_url,
      public_id: frontData.public_id,
    });

    await MarketSch.create({
      name,
      description,
      logo,
      front,
      map,
      ws,
      ig,
      category,
    });
    const result = await MarketSch.find();
    res.send(result);
  } catch (error: any) {
    res.status(400).json({ msg: error.message });
  }
};
export const updateMarket: RequestHandler = async (req, res) => {
  if (debug) console.log("#updateMarket");
  try {
    const {
      _id,
      name,
      description,
      logo: logoData,
      front: frontData,
      map,
      ws,
      ig,
      category,
    } = req.body;
    const logo = await uploadImage({
      secure_url: logoData.secure_url,
      public_id: logoData.public_id,
    });
    const front = await uploadImage({
      secure_url: frontData.secure_url,
      public_id: frontData.public_id,
    });

    await MarketSch.findOneAndUpdate(
      { _id },
      { name, description, logo, front, map, ws, ig, category }
    );
    const result = await MarketSch.find();
    res.send(result);
  } catch (error: any) {
    res.status(400).json({ msg: error.message });
  }
};
export const delMarket: RequestHandler = async (req, res) => {
  if (debug) console.log("#delMarket");
  try {
    const { front, logo, gallery, _id } = req.body;
    // await deleteImage(public_id);
    await deleteImages([...gallery, front, logo]);

    await MarketSch.findOneAndDelete({ _id });
    const result2 = await MarketSch.find();
    res.send(result2);
  } catch (error: any) {
    res.status(400).json({ msg: error.message });
  }
};
export const uploadImageMarket: RequestHandler = async (req, res) => {
  if (debug) console.log("#uploadImageMarket");
  try {
    const { secure_url: su, _id } = req.body;
    const image = await uploadImage({ secure_url: su, public_id: "" });
    await MarketSch.findOneAndUpdate(
      { _id },
      {
        $push: { gallery: image },
      }
    );
    const result = await MarketSch.find();
    res.send(result);
  } catch (error: any) {
    res.status(400).json({ msg: error.message });
  }
};
export const editImageMarket: RequestHandler = async (req, res) => {
  if (debug) console.log("#edit");
  try {
    const { secure_url: su, public_id: pi, _id } = req.body;
    const image = await uploadImage({ secure_url: su, public_id: pi });
    await MarketSch.findOneAndUpdate(
      { "gallery._id": _id },
      {
        "gallery.$": image,
      }
    );
    const result = await MarketSch.find();
    res.send(result);
  } catch (error: any) {
    res.status(400).json({ msg: error.message });
  }
};
export const deleteImageMarket: RequestHandler = async (req, res) => {
  if (debug) console.log("#uploadImageMarket");
  try {
    const { _id, gal_id, public_id } = req.body;
    await MarketSch.findOneAndUpdate(
      { _id },
      {
        $pull: { gallery: { _id: gal_id } },
      }
    );
    await deleteImage(public_id);

    // const result = await MarketSch.findOne({ _id });
    // if (result) {
    //   result.gallery.forEach(async (gal, index) => {
    //     if (gal._id?.toString() === gal_id) {
    //       // await deleteImage(gal.public_id)
    //       result.gallery.splice(index, 1);
    //     }
    //   });
    //   // await result.save();
    // }
    // console.log(result);
    const result2 = await MarketSch.find();
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
    await ChartSch.findOneAndUpdate(
      { _id: "6682def3e5b948a57d5e16cc" },
      { $inc: { amount: 1 } }
    );
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

export const register: RequestHandler = async (req, res) => {
  if (debug) console.log("#register");
  try {
    const { name, email, pass } = req.body;

    let findEmail = await UserSch.findOne({ email });
    if (findEmail)
      return res.status(409).json({ msg: "El correo ya esta en uso" });

    let password = bcrypt.hashSync(pass, bcrypt.genSaltSync(10));
    const result = await UserSch.create({ name, email, password });

    const { name: n, email: e, _id } = result;
    return res.send({ name: n, email: e, _id });
  } catch (error: any) {
    res.status(400).json({ msg: error.message });
  }
};

export const login: RequestHandler = async (req, res) => {
  if (debug) console.log("#login");
  try {
    const { email, pass } = req.body;

    const user = await UserSch.findOne({ email });
    if (!user) return res.status(401).json({ msg: "Correo incorrecto" });
    bcrypt.compare(pass, user.password, function (_: any, result: any) {
      if (!result)
        return res.status(401).json({ msg: "Contraseña incorrecta" });
      const { name, email, _id } = user;
      return res.send({ name, email, _id });
    });
  } catch (error: any) {
    console.log(error);
    res.status(404).json({ msg: error.message });
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
