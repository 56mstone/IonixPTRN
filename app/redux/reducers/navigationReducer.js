import * as types from "../constants/redux_constants";

// Initial State
const initialState = {
  userSelectedData: null,
};

// Reducers (Modifies The State And Returns A New State)
const navigationReducer = (state = initialState, action) => {
  switch (action.type) {
    // Increase Counter
    case types.GUARDAR_NAVIGATION_USER: {
      console.log("GUARDAR_NAVIGATION_USER");
      return {
        // State
        ...state,
        // Redux Store
        userSelectedData: action.user,
      };
    }
    // Default
    default: {
      return state;
    }
  }
};

// Exports
export default navigationReducer;
