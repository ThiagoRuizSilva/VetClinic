import express from "express";
import { deletePet, updatePet, createPet } from "../controllers/PetsController.js";
import { chekPets } from "../middlewares/chekPets.js";

const router = express.Router();

router.delete("/pets/:petId/tutors/:tutorId", deletePet);
router.put("/pets/:petId/tutors/:tutorId", updatePet);
router.post("/pets/:TutorId", chekPets, createPet);

export default router;
