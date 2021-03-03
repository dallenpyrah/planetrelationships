import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class AssignmentsService {
  async find(query={}) {
    return await dbContext.Assignments.find(query).populate("moon");
  }

  async create(newAssignment){
      return await dbContext.Assignments.create(newAssignment)
  }
}

export const assignmentsService = new AssignmentsService();