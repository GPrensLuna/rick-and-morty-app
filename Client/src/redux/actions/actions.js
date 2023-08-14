import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions_types.js";
import axios from "axios";

const URL = "http://localhost:3001/rickandmorty/fav";

export const addFav = (character) => {
  return function (dispatch) {
    return axios.post(`${URL}`, character).then(({ data }) => {
      return dispatch({
        type: ADD_FAV,
        payload: data,
      });
    });
  };
};

export const removeFav = (id) => ({
  type: REMOVE_FAV,
  payload: id,
});

export const filterFav = (gender) => {
  return {
    type: FILTER,
    payload: gender,
  };
};

export const orderCards = function (payload) {
  return {
    type: ORDER,
    payload,
  };
};
