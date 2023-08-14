import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions/actions_types.js";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: action.payload,
        allCharacters: [...state.allCharacters, payload],
      };

    case FILTER:
      const filterChar = state.allCharacters.filter(
        (char) => char.gender === payload
      );
      return {
        ...state,
        myFavorites: payload === "ALL" ? state.allCharacters : filterChar,
      };

    case ORDER:
      const orderCards = state.myFavorites.sort((a, b) => {
        if (payload === "A") {
          return a.id - b.id;
        } else {
          return b.id - a.id;
        }
      });
      return {
        ...state,
        myFavorites: [...orderCards],
      };

    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: action.payload,
      };
    default:
      return { ...state };
  }
}

export default rootReducer;
