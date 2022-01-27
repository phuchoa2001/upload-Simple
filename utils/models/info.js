import mongoose from "mongoose";
const info = new mongoose.Schema({
  text: { type: Array },
  textAuth: { type: Array },
  image: { type: Array },
  imageAuth: { type: Array },
});
export default mongoose.models.info || mongoose.model("info", info);
