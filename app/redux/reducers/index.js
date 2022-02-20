// Imports: Dependencies
import { combineReducers } from "redux";

// Imports: Reducers

import desarrolloReducer from "./desarrolloReducer";
import filtrosReducer from "./filtrosReducer";
import visualizacionReducer from "./visualizacionReducer";
import detalleReducer from "./detalleReducer";
import navigationReducer from "./navigationReducer";
import fechaReducer from "./fechaReducer";
import loginReducer from "./loginReducer";
import modalReducer from "./modalReducer";

// Redux: Root Reducer
const rootReducer = combineReducers({
  desarrolloReducer: desarrolloReducer,
  filtrosReducer: filtrosReducer,
  visualizacionReducer: visualizacionReducer,
  detalleReducer: detalleReducer,
  navigationReducer: navigationReducer,
  fechaReducer: fechaReducer,
  loginReducer: loginReducer,
  modalReducer: modalReducer,
});

// Exports
export default rootReducer;
