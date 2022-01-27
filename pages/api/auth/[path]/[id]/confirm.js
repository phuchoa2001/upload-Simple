import info from "../../../../../utils/models/info";
export default async function handler(req, res) {
  const { id, path } = req.query;
  if (req.method === "POST"){
    return new Promise(async (resolve) => {
      try {
        info.find({}, function (err, data) {
          if (!err) {
            const index = data[0][path].findIndex((room) => room.id === id);
            if(data[0][path][index].password === req.body.payload) {
              res.status(200).json({message : true});
            }else {
              res.status(200).json({message : false});
            }
          }
        });
      } catch (err) {
        res.status(405).end();
      }
  });
}
}
