import { moonsService } from "../services/MoonsService";
import { speciesMoonsService } from "../services/speciesMoonsService";
import BaseController from "../utils/BaseController";


export class MoonsController extends BaseController{
    constructor(){
        super("api/moons")
        this.router
        .get("", this.getAll)
        .post("", this.create)
        .get("/:id/species", this.getAllSpeciesByMoonId)
    }

    async getAll(req, res, next){
        try {
            res.send(await moonsService.find(req.query))
        } catch (error) {
            next(error)
        }
    }

    async create(req, res, next){
        try {
            res.send(await moonsService.create(req.body))
        } catch (error) {
            next(error)
        }
    }

    async getAllSpeciesByMoonId(req, res, next) {
        try {
          res.send(await speciesMoonsService.find({ moon: req.params.id }));
        } catch (error) {
          next(error);
        }
      }
}