import * as types from "../constants/redux_constants";

// Initial State
const initialState = {
  agrupadorSelected: null,
  ordenSelected: null,
  agrupadorUpdated: false,
  ordenUpdated: false,
  ordenDirection: "asc",
};

// Reducers (Modifies The State And Returns A New State)
const filtrosReducer = (state = initialState, action) => {
  switch (action.type) {
    // Increase Counter
    case types.GUARDAR_VISUALIZACION: {
      console.log("GUARDAR_VISUALIZACION");
      console.log(action);
      return {
        // State
        ...state,
        // Redux Store
        ...action.data,
      };
    }
    // Default
    default: {
      return state;
    }
  }
};

// Exports
export default filtrosReducer;
