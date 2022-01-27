import dbConnect from "../../utils/connection";
import info from "../../utils/models/info";
export default async function handler(req, res) {
  return new Promise(async (resolve) => {
    try {
      await dbConnect();
      info.find({}, function (err, data) {
        if (!err) res.json(data);
        resolve();
      });
    } catch (err) {
      res.status(405).end();
    }
  });
}
