import { ADD_FAV, REMOVE_FAV } from "./actions/actions_types.js";

const initialState = {
  myFavorites: [],
};

function rootReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: [...state.myFavorites, payload],
      };
    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: state.myFavorites.filter(fav => fav.id !== payload),
      };
    default:
      return { ...state };
  }
}

export default rootReducer;



