import Tutors from "../models/Tutors.js";
import Pets from "../models/Pets.js";

export const getTutors = async (req, res) => {
  try {
    const tutors = await Tutors.findAll({
      include: [
        {
          model: Pets,
          as: "pets",
        },
      ],
    });
    res.status(200).json(tutors);
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Error fetching tutors", error: err.message });
  }
};

export const createTutor = async (req, res) => {
  let { name, phone, email, date_of_birth, zip_code } = req.body;

  const emailExist = await Tutors.findOne({ where: { email: email } });
  if (emailExist) {
    return res.status(400).send({ message: "Email already exists" });
  }

  try {
    const tutor = await Tutors.create({
      name,
      phone,
      email,
      date_of_birth,
      zip_code,
    });
    res.status(201).json(tutor);
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Error creating tutor", error: err.message });
  }
};

export const updateTutor = async (req, res) => {
  const id = req.params.id;
  const { name, phone, email, date_of_birth, zip_code } = req.body;

  try {
    const tutor = await Tutors.findOne({ where: { id: id } });

    if (!tutor) {
      return res.status(404).send({ message: "Tutor not found" });
    }
    await tutor.update({ name, phone, email, date_of_birth, zip_code });
    res.status(200).json({ message: "Tutor updated successfully", tutor: tutor });
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Error updating tutor", error: err.message });
  }
};

export const deleteTutor = async (req, res) => {
  const id = req.params.id;

  try {
    const deletedPet = await Pets.findAll({ where: { tutorId: id } });
    if (deletedPet.length > 0) {
      await Pets.destroy({ where: { tutorId: id } });
    }
    const deletedTutors = await Tutors.destroy({ where: { id: id } });
    if (deletedTutors > 0) {
      return res.status(200).json({ message: "Tutor and associated pets deleted successfully" });
    } else {
      return res.status(404).json({ message: "Tutor not found, insert an existing" });
    }
  } catch (e) {
    return res.status(500).json({ message: "Error" });
  }
};
