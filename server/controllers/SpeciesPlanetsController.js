import { dbContext } from "../db/DbContext";
import { speciesPlanetService } from "../services/SpeciesPlanetsService";
import BaseController from "../utils/BaseController";


export class SpeciesPlanetsController extends BaseController{
    constructor(){
        super("api/speciesplanets")
        this.router
        .get("", this.getAll)
        .post("", this.create)
    }

    async getAll(req, res, next){
        try {
            res.send(await speciesPlanetService.find(req.query))
        } catch (error) {
            next(error)
        }
    }

    async create(req, res, next){
        try {
            res.send(await speciesPlanetService.create(req.body))
        } catch (error) {
            next(error)
        }
    }
}