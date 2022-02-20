import * as types from "../constants/redux_constants";

export const funGuardarFiltroFecha = (data) => ({
  type: types.GUARDAR_FILTRO_FECHA,
  data,
});
