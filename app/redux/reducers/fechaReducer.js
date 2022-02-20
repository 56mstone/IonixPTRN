import * as types from "../constants/redux_constants";

// Initial State
const initialState = {
  fechaSelected: null,
  fechaDesde: null,
  fechaHasta: null,
};

// Reducers (Modifies The State And Returns A New State)
const fechaReducer = (state = initialState, action) => {
  switch (action.type) {
    // Increase Counter
    case types.GUARDAR_FILTRO_FECHA: {
      console.log("GUARDAR_FILTRO_FECHA");
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
export default fechaReducer;
