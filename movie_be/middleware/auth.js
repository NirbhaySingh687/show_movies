import express from "express";
import {createMovies, getMovies} from "./movie"
const router = express.Router();

router.get("/",getMovies)
router.post("/", createMovies)

export default router