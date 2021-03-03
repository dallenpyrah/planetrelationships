import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = mongoose.SchemaTypes.ObjectId


const SpeciePlanet = new Schema(
    {
        specie: { type: ObjectId, ref: "Specie", required: true},
        planet: { type: ObjectId, ref: "Planet", required: true}
    }
)


export default SpeciePlanet