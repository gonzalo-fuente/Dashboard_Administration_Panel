/* Constants */
import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAIL,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAIL,
  SET_USER_REQUEST,
  SET_USER_SUCCESS,
  SET_USER_FAIL,
  EDIT_USER_REQUEST,
  EDIT_USER_SUCCESS,
  EDIT_USER_FAIL,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAIL,
} from "./constants";

const initialState = {
  users: [],
  user: [],
  isLoading: false,
  error: "",
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
    case FETCH_USER_REQUEST:
    case SET_USER_REQUEST:
    case EDIT_USER_REQUEST:
    case DELETE_USER_REQUEST:
      return { ...state, isLoading: true, error: "" };

    case FETCH_USERS_SUCCESS:
      const users = action.payload;
      return { ...state, isLoading: false, users: users };

    case FETCH_USER_SUCCESS:
      const user = action.payload;
      return { ...state, isLoading: false, user: user };

    case SET_USER_SUCCESS:
    case EDIT_USER_SUCCESS:
    case DELETE_USER_SUCCESS:
      return { ...state, isLoading: false };

    case FETCH_USERS_FAIL:
    case FETCH_USER_FAIL:
    case SET_USER_FAIL:
    case EDIT_USER_FAIL:
    case DELETE_USER_FAIL:
      return { ...state, isLoading: false, error: action.payload };

    default:
      return state;
  }
};
