import express from "express";
import {getAllComponents, getComponent,createComponent } from "../controllers/componentController.js";

const router = express.Router();
router.route("/").get(getAllComponents).post(createComponent);
router.route("/:id").get(getComponent);

export default router;
