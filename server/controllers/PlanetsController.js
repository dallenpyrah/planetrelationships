import express from "express";
import BaseController from "../utils/BaseController";
import { planetsService } from "../services/PlanetsService";
import { speciesPlanetService } from "../services/SpeciesPlanetsService";
import { moonsService } from "../services/MoonsService";

export class PlanetsController extends BaseController {
    constructor(){
        super("api/planets")
        this.router
        .get("", this.getAll)
        .post("", this.create)
        .get("/:id/species", this.getAllSpeciesByPlanetId)
        .get("/:id/moons", this.getAllMoonsByPlanetId)
    }

    async getAll(req, res, next){
        try {
            res.send(await planetsService.find(req.query))
        } catch (error) {
            next(error)
        }
    }

    async create(req, res, next){
        try {
            res.send(await planetsService.create(req.body))
        } catch (error) {
            next(error)
        }
    }

    async getAllSpeciesByPlanetId(req, res, next) {
        try {
          res.send(await speciesPlanetService.find({ planet: req.params.id }));
        } catch (error) {
          next(error);
        }
      }

      async getAllMoonsByPlanetId(req,res,next){
        try {
            res.send(await moonsService.find({planet: req.params.id}))
        } catch (error) {
            next(error)
        }
    }
}