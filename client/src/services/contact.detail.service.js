import http from "../http-common";

const getAll = () => {
  return http.get("/contactDetails");
};

const get = id => {
  return http.get(`/contactDetails/${id}`);
};

const create = data => {
  return http.post("/contactDetails", data);
};

const update = (id, data) => {
  return http.put(`/contactDetails/${id}`, data);
};

const remove = id => {
  return http.delete(`/contactDetails/${id}`);
};

const removeAll = () => {
  return http.delete(`/contactDetails`);
};

const findByTitle = title => {
  return http.get(`/contactDetails?title=${title}`);
};

const contactDetailservice = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle
};

export default contactDetailservice;