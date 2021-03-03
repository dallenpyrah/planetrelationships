import { dbContext } from "../db/DbContext";


class SpeciesPlanetsService{

    async find(query = {}){
        return dbContext.SpeciesPlanets.find(query).populate("specie planet")
    }

    async create(newSpeciesPlanets){
        return dbContext.SpeciesPlanets.create(newSpeciesPlanets)
    }
}

export const speciesPlanetService = new SpeciesPlanetsService();