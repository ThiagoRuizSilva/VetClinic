import express from 'express'
const router = express.Router()
import Pets from '../models/Pets.js'
import Tutors from '../models/Tutors.js';
import { where } from 'sequelize';


router.put('/pets/:petId/tutors/:tutorId', async (req, res) => {
    const petId = req.params.petId;
    const tutorId = req.params.tutorId;

    const { name, species, carry, weight, date_of_birth } = req.body; 

    try {
        const pets = await Pets.findOne({ where: { id: petId, tutorId: tutorId } });

        if (!pets) {
            return res.status(404).send({ message: 'Pet not found' });
        }
        await pets.update({name, species, carry, weight, date_of_birth})
        res.status(200).json({ message: 'Pet updated successfully', pets: pets });

    } catch (err) {
        console.error(err);
        res.status(500).send({ message: 'Error updating pet', error: err.message });
    }
})



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


