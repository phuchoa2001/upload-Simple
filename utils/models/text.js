import mongoose from "mongoose";
const text = new mongoose.Schema({
  name: { type: String },
  data: { type: String },
  gopage: { type: Number },
});
export default mongoose.models.text || mongoose.model("text", text);
