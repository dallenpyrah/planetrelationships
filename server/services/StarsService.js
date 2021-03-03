import { dbContext } from "../db/DbContext";


class StarsService{
    async getGalaxyById(id) {
      return await dbContext.Stars.findById(id)
    }
    async edit(id, body) {
      return await dbContext.Stars.findByIdAndUpdate(id, body)
    }
    async find(query = {}){
        return await dbContext.Stars.find(query).populate("galaxy")
    }

    async create(newStar){
        return await dbContext.Stars.create(newStar)
    }
}

export const starsService = new StarsService();