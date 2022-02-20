import * as types from "../constants/redux_constants";

// Initial State
const initialState = {
  filtroRegionSelected: { key: -1, label: "(Todas)" },
  filtroCadenaSelected: { key: -1, label: "(Todas)" },
  filtroActivo: false,
  filtroActualizado: false,
  comboRegion: [],
  comboCadena: [],
};

// Reducers (Modifies The State And Returns A New State)
const filtrosReducer = (state = initialState, action) => {
  switch (action.type) {
    // Increase Counter
    case types.GUARDAR_FILTROS: {
      console.log("GUARDAR_FILTROS");
      return {
        // State
        ...state,
        // Redux Store
        ...action.data,
      };
    }
    case types.SET_FILTROS_HABILITADOS: {
      console.log("SET_FILTROS_HABILITADOS");
      return {
        ...state,
        filtroActivo: action.habilitado,
      };
    }
    case types.SET_FILTROS_ACTUALIZADOS: {
      console.log("SET_FILTROS_ACTUALIZADOS", action.actualizado);
      return {
        ...state,
        filtroActualizado: action.actualizado,
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
