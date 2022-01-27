import info from "../../../../../utils/models/info";
export default async function handler(req, res) {
  const { id, path } = req.query;
  if (req.method === "POST") {
    return new Promise(async (resolve) => {
      try {
        info.find({}, function (err, data) {
          if (!err) {
            const index = data[0][path].findIndex((room) => room.id === id);
            const d = new Date();
            data[0][path][index].timeAuth = d;
            data[0][path][index].auth = true;
            data[0][path][index].password = req.body.payload;
            info.updateOne({}, { [path]: data[0][path] }).then();
            res.json({ message: "Password Success!" });
          }
        });
      } catch (err) {
        res.status(405).end();
      }
    });
  }
}
