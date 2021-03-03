import { dbContext } from "../db/DbContext";


class SpeciesService{
    async create(newSpecies) {
        return await dbContext.Species.create(newSpecies)
    }
    async find(query = {}) {
        return await dbContext.Species.find(query)
    }

}

export const speciesService = new SpeciesService();