import * as types from "../constants/redux_constants";

// Initial State
const initialState = {
  modalUbicacionVisible: false,
  modalUbicacionData: null,
  modalFotosVisible: false,
  modalFotosData: null
};

// Reducers (Modifies The State And Returns A New State)
const navigationReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GUARDAR_MODAL_UBICACION_VISIBLE: {
      console.log("GUARDAR_MODAL_UBICACION_VISIBLE");
      return {
        // State
        ...state,
        // Redux Store
        modalUbicacionVisible: action.modalUbicacionVisible,
      };
    }
    case types.GUARDAR_MODAL_FOTOS_VISIBLE: {
        console.log("GUARDAR_MODAL_FOTOS_VISIBLE");
        return {
          // State
          ...state,
          // Redux Store
          modalFotosVisible: action.modalFotosVisible,
        };
      }
    case types.GUARDAR_MODAL_UBICACION_DATA: {
      console.log("GUARDAR_MODAL_UBICACION_DATA");
      return {
        // State
        ...state,
        // Redux Store
        modalUbicacionData: action.modalUbicacionData,
      };
    }
    case types.GUARDAR_MODAL_FOTOS_DATA: {
        console.log("GUARDAR_MODAL_FOTOS_DATA");
        return {
          // State
          ...state,
          // Redux Store
          modalFotosData: action.modalFotosData,
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