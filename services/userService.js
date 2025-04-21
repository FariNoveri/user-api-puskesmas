const userModel = require('../models/userModel');

const getAllUsers = async () => {
  try {
    const users = await userModel.getAllUsers();
    return users;
  } catch (error) {
    throw new Error('Error fetching users');
  }
};

const createUser = async (nama_lengkap, username, email, password, role_id, unit_layanan_id, photo) => {
  try {
    const newUser = await userModel.createUser(nama_lengkap, username, email, password, role_id, unit_layanan_id, photo);
    return newUser;
  } catch (error) {
    throw new Error('Error creating user');
  }
};

module.exports = { getAllUsers, createUser };
