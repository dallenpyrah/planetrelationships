import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = mongoose.SchemaTypes.ObjectId

const SpecieMoon = new Schema(
  {
    specie: { type: ObjectId, ref: "Specie", required: true},
    moon: { type: ObjectId, ref: "Moon", required: true}
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default SpecieMoon;
