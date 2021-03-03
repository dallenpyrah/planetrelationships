import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class GalaxysService {
  async findStars(id) {
    return await dbContext.Galaxys.findById(id).populate("star")
  }
  async find(query={}) {
    return await dbContext.Galaxys.find(query);
  }

  async create(newGalaxy){
      return await dbContext.Galaxys.create(newGalaxy)
  }
}

export const galaxysService = new GalaxysService();