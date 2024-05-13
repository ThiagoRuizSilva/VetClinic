import express from 'express';
import { getTutors, createTutor, updateTutor, deleteTutor } from '../controllers/TutorsController.js';
import { chek } from '../middlewares/chekTutor.js';

const router = express.Router();

router.get("/tutors", getTutors);
router.post('/tutors', chek, createTutor);
router.put('/tutors/:id', updateTutor);
router.delete('/tutors/:id', deleteTutor);

export default router;
