import http from "../http-common";

const getAll = () => {
  return http.get("/ProductToSellDetails");
};

const get = id => {
  return http.get(`/ProductToSellDetails/${id}`);
};

const create = data => {
  return http.post("/ProductToSellDetails", data);
};

const update = (id, data) => {
  return http.put(`/ProductToSellDetails/${id}`, data);
};

const remove = id => {
  return http.delete(`/ProductToSellDetails/${id}`);
};

const removeAll = () => {
  return http.delete(`/ProductToSellDetails`);
};

const findByTitle = title => {
  return http.get(`/ProductToSellDetails?title=${title}`);
};

const ProductToSellDetailservice = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle
};

export default ProductToSellDetailservice;

