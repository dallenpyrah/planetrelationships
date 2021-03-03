import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class PlanetsService {
  async find(query={}) {
    return await dbContext.Planets.find(query).populate("star");
  }

  async create(newPlanet){
      return await dbContext.Planets.create(newPlanet)
  }
}

export const planetsService = new PlanetsService();