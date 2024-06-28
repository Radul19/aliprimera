import { RequestHandler } from "express";
import path from "path";
const debug = false;

const indexPath = path.resolve(__dirname, "../app", "index.html");
// console.log(indexPath);

export const test: RequestHandler = async (req, res) => {
//   if (debug) console.log("#test");
  res.sendFile(indexPath);
};
export const createUser: RequestHandler = async (req, res) => {
  if (debug) console.log("#createUser");
  try {
    res.send("ok");
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
