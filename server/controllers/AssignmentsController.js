import express from "express";
import BaseController from "../utils/BaseController";
import { assignmentsService } from "../services/AssignmentsService";

export class AssignmentsController extends BaseController {
  constructor() {
    super("api/assignments");
    this.router
      .get("", this.getAll)
      .post("", this.create);
  }
  async getAll(req, res, next) {
    try {
      res.send(await assignmentsService.find(req.query));
    } catch (error) {
      next(error);
    }
  }
  async create(req, res, next) {
    try {
      res.send(await assignmentsService.create(req.body));
    } catch (error) {
      next(error);
    }
  }
}