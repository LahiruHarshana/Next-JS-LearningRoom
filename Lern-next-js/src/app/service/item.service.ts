import axios from "axios";

export const getAllItems = async () => {
  return await axios
    .get("http://localhost:8080/item")
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error);
    });
};

export const addItem = async (item: object) => {
  return await axios
    .post("http://localhost:8080/item", item)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error);
    });
};

export const updateItem = async (item: object) => {
  return await axios
    .put("http://localhost:8080/item", item)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error);
    });
};

export const deleteItem = async (id: string) => {
  return await axios
    .delete(`http://localhost:8080/item/${id}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error);
    });
};

export const getItem = async (id: string) => {
  return await axios
    .get(`http://localhost:8080/item/${id}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error);
    });
};
// Path: src/app/service/customer.service.ts