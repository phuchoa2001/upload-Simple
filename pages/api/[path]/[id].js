import text from "../../../utils/models/text";
import info from "../../../utils/models/info";
import textAuth from "../../../utils/models/textAuth";
import image from "../../../utils/models/image";
import imageAuth from "../../../utils/models/imageAuth";
export default async function handler(req, res) {
  const { id, path } = req.query;
  let models = null;
  switch (path) {
    case "text":
      models = text;
      break;
    case "textAuth":
      models = textAuth;
      break;
    case "image":
      models = image;
      break;
    case "imageAuth":
      models = imageAuth;
      break;
    default:
      res.status(405).end();
  }
  if (req.method === "GET") {
    return new Promise(async (resolve) => {
      try {
        let auth = false;
        let timeAuth = null;
        info.find({}, function (err, data) {
          if (!err) {
            const index = data[0][path].findIndex((room) => room.id === id);
            const d = new Date();
            data[0][path][index].time = d;
            data[0][path][index].auth ? (auth = true) : "";
            data[0][path][index].timeAuth
              ? (timeAuth = data[0][path][index].timeAuth)
              : "";
            info.updateOne({}, { [path]: data[0][path] }).then(() => {
              models.findOne({ name: `ID_${id}` }, function (err, data) {
                if (!err) {
                  data.gopage = eval(`${data.gopage} + 1`);
                  models
                    .updateOne({ name: `ID_${id}` }, { gopage: data.gopage })
                    .then();
                  const json = { ...data._doc, auth, timeAuth };
                  res.json(json);
                  resolve();
                }
              });
            });
          }
        });
      } catch (err) {
        res.status(405).end();
      }
    });
  } else if (req.method === "POST") {
    return new Promise(async (resolve) => {
      try {
        models.findOne({ name: `ID_${id}` }, function (err, data) {
          if (!err) {
            models
              .updateOne({ name: `ID_${id}` }, { data: req.body.payload })
              .then();
            res.json({ messger: "success!" });
            resolve();
          }
        });
      } catch (err) {
        res.status(405).end();
      }
    });
  }
}
