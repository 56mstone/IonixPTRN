import * as types from "../constants/redux_constants";

// Initial State
const initialState = {
  dataOriginal: {},
  dataAgrupada: {},
  dataFiltrada: {},
  isLoading: false,
};

// Reducers (Modifies The State And Returns A New State)
const detalleReducer = (state = initialState, action) => {
  switch (action.type) {
    // Increase Counter
    case types.DATA_DETALLE_GUARDAR: {
      console.log("DATA_DETALLE_GUARDAR");
      return {
        // State
        ...state,
        // Redux Store
        dataOriginal: action.data,
      };
    }
    case types.DATA_DETALLE_GUARDAR_AGRUPADA: {
      console.log("DATA_DETALLE_GUARDAR_AGRUPADA");
      return {
        // State
        ...state,
        // Redux Store
        dataAgrupada: action.data,
      };
    }
    case types.DATA_DETALLE_GUARDAR_FILTRADA: {
      console.log("DATA_DETALLE_GUARDAR_FILTRADA");
      return {
        // State
        ...state,
        // Redux Store
        dataFiltrada: action.data,
      };
    }
    case types.DATA_DETALLE_SET_IS_LOADING: {
      console.log("DATA_DETALLE_SET_IS_LOADING");
      console.log(action);
      return {
        // State
        ...state,
        // Redux Store
        loading: action.loading,
      };
    }
    // Default
    default: {
      return state;
    }
  }
};

// Exports
export default detalleReducer;
