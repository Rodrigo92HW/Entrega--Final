import { usersService } from "../services/index.js";

const getAllUsers = async (req, res) => {
  const users = await usersService.getAll();
  res.send({ status: "success", payload: users });
};

const getUser = async (req, res) => {
  const userId = req.params.uid;
  const user = await usersService.getUserById(userId);
  if (!user)
    return res.status(404).send({ status: "error", error: "User not found" });
  res.send({ status: "success", payload: user });
};

const updateUser = async (req, res) => {
  const updateBody = req.body;
  const userId = req.params.uid;
  const user = await usersService.getUserById(userId);
  if (!user)
    return res.status(404).send({ status: "error", error: "User not found" });
  const result = await usersService.update(userId, updateBody);
  res.send({ status: "success", message: "User updated" });
};

const deleteUser = async (req, res) => {
  const userId = req.params.uid;
  const result = await usersService.getUserById(userId);
  res.send({ status: "success", message: "User deleted" });
};

const createUser = async (req, res) => {
  try {
    const user = req.body;
    const result = await usersService.create(user);
    res.status(201).send({
      status: "success",
      message: "User created successfully",
      payload: result,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send({ status: "error", error: "Internal Server Error" });
  }
};

export default {
  deleteUser,
  getAllUsers,
  getUser,
  updateUser,
  createUser
};
