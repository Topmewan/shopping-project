import api from "./http";

const registerUser = (data) => {
  return api.post("/register", data);
};

const loginUser = (data) => {
  return api.post("/login", data);
};

const addUserOrders = (id, data) => {
  return api.patch(`/users/${id}`, data);
};

const getUser = (id) => {
  return api.get(`/users/${id}`);
};

const update = (id, data) => {
  return api.patch(`/users/${id}`, data);
};

const AuthService = {
  registerUser,
  loginUser,
  addUserOrders,
  getUser,
  update,
};

export default AuthService;
