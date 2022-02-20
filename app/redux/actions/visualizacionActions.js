import * as types from "../constants/redux_constants";

export const funGuardarVisualizacion = (data) => ({
  type: types.GUARDAR_VISUALIZACION,
  data,
});
