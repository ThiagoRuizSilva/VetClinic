import Pets from "../models/Pets.js";
import Tutors from "../models/Tutors.js";
import { where } from "sequelize";

export const deletePet = async (req, res) => {
  const petId = req.params.petId;

  try {
    const petExists = await Pets.findOne({ where: { id: petId } });
    if (!petExists) {
      return res.status(404).json({ message: "Pet not found" });
    }

    const deletedPet = await Pets.destroy({ where: { id: petId } });
    if (deletedPet > 0) {
      return res.status(200).json({ message: "Pet deleted successfully" });
    } else {
      return res.status(404).json({ message: "Pet not found, insert an existing pet" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Error when deleting pet" });
  }
};

export const updatePet = async (req, res) => {
  const petId = req.params.petId;
  const tutorId = req.params.tutorId;

  console.log(petId);
  console.log(tutorId);

  const { name, species, carry, weight, date_of_birth } = req.body;

  try {
    const pets = await Pets.findOne({ where: { id: petId, tutorId: tutorId } });

    if (!pets) {
      return res.status(404).send({ message: "Pet not found" });
    }
    await pets.update({ name, species, carry, weight, date_of_birth });
    res.status(200).json({ message: "Pet updated successfully", pets: pets });
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Error updating pet", error: err.message });
  }
};

export const createPet = async (req, res) => {
  const TutorId = req.params.TutorId;
  const name = req.body.name;
  const species = req.body.species;
  const carry = req.body.carry;
  const weight = req.body.weight;
  const date_of_birth = req.body.date_of_birth;

  const tutorExists = await Tutors.findByPk(TutorId);
  if (!tutorExists) {
    return res.status(404).json({ message: "Tutor not found" });
  }

  const pets = {
    TutorId,
    name,
    species,
    carry,
    weight,
    date_of_birth,
  };

  await Pets.create(pets)
    .then((pet) => {
      res.status(201).json(pet);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ message: "Error creating pet", error: err.message });
    });
};
