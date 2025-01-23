import axios from "axios";
import { getAuthHeader } from "./axiosHelper";

// Borrow API URL
const BORROW_API_URL = `${import.meta.env.VITE_APP_API_BASE_URL}/api/borrow`;

// GET borrows
export const getBorrows = () => {
  const response = axios
    .get(BORROW_API_URL, getAuthHeader())
    .then((res) => res.data)
    .catch((error) => {
      throw error;
    });

  return response;
};

// Create Borrow
export const createBorrow = (borrowObj) => {
  const response = axios
    .post(BORROW_API_URL, borrowObj, getAuthHeader())
    .then((res) => res.data)
    .catch((error) => {
      throw error;
    });

  return response;
};

// return Borrow
export const returnBorrow = (borrowId) => {
  const response = axios
    .patch(BORROW_API_URL, { borrowId }, getAuthHeader())
    .then((res) => res.data)
    .catch((error) => {
      throw error;
    });

  return response;
};
