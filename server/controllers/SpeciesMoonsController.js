import express from "express";
import BaseController from "../utils/BaseController";
import { speciesMoonsService } from "../services/speciesMoonsService";

export class SpeciesMoonsController extends BaseController {
  constructor() {
    super("api/speciesmoons");
    this.router
      .get("", this.getAll)
      .post("", this.create);
  }
  async getAll(req, res, next) {
    try {
      res.send(await speciesMoonsService.find(req.query));
    } catch (error) {
      next(error);
    }
  }
  async create(req, res, next) {
    try {
      res.send(await speciesMoonsService.create(req.body));
    } catch (error) {
      next(error);
    }
  }
}