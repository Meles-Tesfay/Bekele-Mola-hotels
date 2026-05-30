import express from "express";
import { getBranches, getBranchByCity } from "../controllers/branchController.js";

const branchRouter = express.Router();

branchRouter.get('/', getBranches);
branchRouter.get('/:city', getBranchByCity);

export default branchRouter;
