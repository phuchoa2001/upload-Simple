import mongoose from "mongoose";
const textAuth = new mongoose.Schema({
  name: { type: String },
  data: { type: String },
  gopage: { type: Number },
});
export default mongoose.models.textAuth || mongoose.model("textAuth", textAuth);
