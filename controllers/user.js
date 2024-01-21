import { User } from "../models/user.js";

export const getAllUsers = async (req, res) => {
  const users = await User.find({});
  res.json({
    success: true,
    users,
  });
};

export const addUser = async (req, res) => {
  const { name, email, password } = req.body;
  await User.create({
    name,
    email,
    password,
  });
  res.json({
    success: true,
    message: "Registered Successfully",
  });
};
export const special = (req, res) => {
  res.json({
    success: true,
    message: "Just Joking",
  });
};

export const findItById = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);
  console.log(req.params.id);
  res.status(200).json({
    success: true,
    user,
  });
};
export const updateById = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);
  res.status(200).json({
    success: true,
    message: "Updated Successfully",
  });
};
export const delUser = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);
  res.status(200).json({
    success: true,
    message: "Deleted Successfully",
  });
};
