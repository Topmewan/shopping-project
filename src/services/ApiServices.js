import api from "./http";

const getShopItems = () => {
  return api.get("/shopItems");
};

const getShopItem = (id) => {
  return api.get(`/shopItems/${id}`);
};

const getTickets = (ticket) => {
  return api.get(`/tickets?title=${ticket}`);
};

const ApiService = {
  getShopItem,
  getShopItems,
  getTickets,
};

export default ApiService;
