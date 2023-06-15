import { ADD_FAV, REMOVE_FAV } from './actions/actions';

const initialState = { 
    myFavorites: []
};

function rootReducer(action, state = initialState, type, payload) {
    switch (type) {
      case "ADD_FAV":
        return {
          ...state,
          myFavorites: [...state.myFavorites, payload],
        };
      case "REMOVE_FAV":
        return {
          ...state,
          myFavorites: state.myFavorites.filter(
            char => char.id !== payload
          )
        };
      default:
        return[ ...state];
    }
}

export default rootReducer;