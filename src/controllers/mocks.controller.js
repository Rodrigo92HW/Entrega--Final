import MockingService from "../services/mocking.js";

const creatPets = async (req, res) => {
  const pets = await MockingService.generatePetsMocks(50);
  res.send({ status: "success", payload: pets });
};

const createUsers = async (req, res) => {
  const users = await MockingService.generateUsersMocks(50);
  res.send({ status: "success", payload: users });
};

const createData = async (req, res) => {
  const { amount } = req.body;
  const pets = await MockingService.generatePetsMocks(amount);
  const users = await MockingService.generateUsersMocks(amount);
  res.send({ status: "success", payload: { pets, users } });
};

export default {
  creatPets,
  createUsers,
  createData,
};
