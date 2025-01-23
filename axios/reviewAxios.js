import { getAuthHeader } from "./axiosHelper";
import axios from "axios";

const REVIEW_API_URL = `${import.meta.env.VITE_APP_API_BASE_URL}/api/review`;

// PRIVATE ROUTES
export const getReviews = () => {
  const response = axios
    .get(REVIEW_API_URL, getAuthHeader())
    .then((res) => res.data)
    .catch((error) => {
      throw error;
    });

  return response;
};

// create review
export const createReview = (reviewObj) => {
  const response = axios
    .post(REVIEW_API_URL, reviewObj, getAuthHeader())
    .then((res) => res.data)
    .catch((error) => {
      throw error;
    });

  return response;
};

// update review
export const updateReview = (reviewObj) => {
  const response = axios
    .patch(`${REVIEW_API_URL}/${reviewObj._id}`, reviewObj, getAuthHeader())
    .then((res) => res.data)
    .catch((error) => {
      throw error;
    });

  return response;
};

// public route
export const getAllReviews = (bookId) => {
  const response = axios
    .get(`${REVIEW_API_URL}/${bookId}`)
    .then((res) => res.data)
    .catch((error) => {
      console.log(error);
      throw error;
    });

  return response;
};
