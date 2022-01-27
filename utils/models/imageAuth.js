import mongoose from "mongoose";
const imageAuth = new mongoose.Schema({
  name: { type: String },
  data: { type: Array },
  gopage: { type: Number },
});
export default mongoose.models.imageAuth || mongoose.model("imageAuth", imageAuth);
