import express from 'express'
const router = express.Router()
import Tutors from '../models/Tutors.js'
import { where } from 'sequelize'


router.delete('/tutors/:id', async (req, res) => {
    const id = req.params.id;


    try {
        const deletedTutors = await Tutors.destroy({ where: { id: id } });
        if (deletedTutors > 0) {
            return res.status(200).json({ message: 'Tutor deleted successfully' });
        } else {
            return res.status(404).json({ message: 'Tutor not found, insert an existing' });
        }
    } catch (error) {
        console.error('Erro ao excluir tutor:', error);
        return res.status(500).json({ message: 'Erro ao excluir tutor' });
    }
})

router.put('/tutors/:id', async (req, res) => {
    const id = req.params.id;
    const { name, phone, email, date_of_birth, zip_code } = req.body; 

    try {
        const tutor = await Tutors.findOne({ where: { id: id } });

        if (!tutor) {
            return res.status(404).send({ message: 'Tutor not found' });
        }
        await tutor.update({name, phone, email, date_of_birth, zip_code})
        res.status(200).json({ message: 'Tutor updated successfully', tutor: tutor });

    } catch (err) {
        console.error(err);
        res.status(500).send({ message: 'Error updating tutor', error: err.message });
    }
});

router.get("/tutors", (req, res) => {
    Tutors.findAll()
       .then(tutors => {
            res.status(200).json(tutors);
        })
       .catch(err => {
            console.error(err);
            res.status(500).send({ message: 'Error fetching tutors', error: err.message });
        });
});
router.post('/tutors', (req, res) => {
    let { name, phone, email, date_of_birth, zip_code } = req.body;

    Tutors.create({
        name,
        phone,
        email,
        date_of_birth,
        zip_code
    }).then((tutor) => {
        res.status(201).json(tutor);
    }).catch((err) => {
        console.log(err);
        res.status(500).send({ message: 'Error creating tutor', error: err.message });
    });
});

export default router;


