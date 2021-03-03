import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = mongoose.SchemaTypes.ObjectId

const Assignment = new Schema(
  {
    name: { type: String, required: true },
    moon: { type: ObjectId, ref: "Moon", required: true}
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Assignment;
