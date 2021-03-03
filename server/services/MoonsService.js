import { dbContext } from "../db/DbContext";


class MoonsService{

    async find(query = {}){
        return await dbContext.Moons.find(query).populate("planet")
    }

    async create(newMoon){
        return await dbContext.Moons.create(newMoon)
    }
}

export const moonsService = new MoonsService();