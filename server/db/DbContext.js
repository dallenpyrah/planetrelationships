import ValueSchema from "../models/Value";
import GalaxySchema from "../models/Galaxy";
import StarSchema from "../models/Star";
import PlanetSchema from "../models/Planet";
import MoonSchema from "../models/Moon";
import SpecieSchema from "../models/Specie";
import SpecieMoonSchema from "../models/SpecieMoon";
import SpeciePlanetSchema from "../models/SpeciePlanet";
import AssignmentSchema from "../models/Assignment";
import mongoose from "mongoose";
import { planetsService } from "../services/PlanetsService";

class DbContext {
  Values = mongoose.model("Value", ValueSchema);

  Galaxys = mongoose.model("Galaxy", GalaxySchema)

  Stars = mongoose.model("Star", StarSchema)

  Planets = mongoose.model("Planet", PlanetSchema)
  Moons = mongoose.model("Moon", MoonSchema)

  Species = mongoose.model("Specie", SpecieSchema)

  SpeciesMoons = mongoose.model("SpecieMoon", SpecieMoonSchema)

  SpeciesPlanets = mongoose.model("SpeciePlanet", SpeciePlanetSchema)
  Assignments = mongoose.model("Assignment", AssignmentSchema)
}

export const dbContext = new DbContext();
