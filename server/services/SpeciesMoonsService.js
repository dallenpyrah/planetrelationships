import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class SpeciesMoonsService {
  async find(query={}) {
    return await dbContext.SpeciesMoons.find(query).populate("specie moon")
  }

  async create(newSpeciesMoons){
      return await dbContext.SpeciesMoons.create(newSpeciesMoons)
  }
}

export const speciesMoonsService = new SpeciesMoonsService();