import express from 'express'
const router = express.Router()
import Pets from '../models/Pets.js'
import Tutors from '../models/Tutors.js';



router.post("/pets/:TutorId", async (req, res) => {
    const TutorId = req.params.TutorId; 
    const name = req.body.name;
    const species = req.body.species;
    const carry = req.body.carry;
    const weight = req.body.weight;
    const date_of_birth = req.body.date_of_birth;

    const tutorExists = await Tutors.findByPk(TutorId);
    if (!tutorExists) {
        return res.status(404).json({ message: 'Tutor not found' });
    }

    const pets = {
        TutorId,
        name,
        species,
        carry,
        weight,
        date_of_birth
    };

    await Pets.create(pets)
       .then((pet) => {
            res.status(201).json(pet);
        })
       .catch((err) => {
            console.log(err);
            res.status(500).send({ message: 'Error creating pet', error: err.message });
        });
});

export default router; 


