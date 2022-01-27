import mongoose from "mongoose";
const image = new mongoose.Schema({
  name: { type: String },
  data: { type: Array },
  gopage: { type: Number },
});
export default mongoose.models.image || mongoose.model("image", image);
