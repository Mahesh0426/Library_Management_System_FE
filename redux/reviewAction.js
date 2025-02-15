import { toast } from "react-toastify";
import {
  createReview,
  getAllReviews,
  getReviews,
  updateReview,
} from "../axios/reviewAxios";
import { getBorrowsAction } from "./borrowAction";
import { setReview, setReviews } from "./reviewSlice";

// get user review
export const getReviewsAction = () => async (dispatch) => {
  const result = await getReviews();

  if (result?.status === "success") {
    dispatch(setReviews(result.data));
  }
};

//Create a review
export const createReviewAction = (reviewObj) => async (dispatch) => {
  const result = await createReview(reviewObj);

  if (result?.status === "error") {
    return toast.error(result.message);
  }
  toast.success(result.message);

  // once a revew is submitted, we refetch burrows
  dispatch(getBorrowsAction());
};

// update a review
export const updateReviewAction = (reviewObj) => async (dispatch) => {
  const result = await updateReview(reviewObj);

  if (result?.status === "error") {
    return toast.error(result.message);
  }

  // once a revew is updated, we get all reviews
  dispatch(getReviewsAction());
};

//get  reviews of that book only
export const getAllReviewsAction = (bookId) => async (dispatch) => {
  const result = await getAllReviews(bookId);

  if (result?.status === "error") {
    return toast.error(result.message);
  }
  dispatch(setReview(result.data));
};
