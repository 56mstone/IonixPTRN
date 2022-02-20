// Login

import * as types from "../constants/redux_constants";

export const funGuardarFiltros = (data) => {
  return {
    type: types.GUARDAR_FILTROS,
    data: data,
  };
};

export const funSetFiltrosHabilitados = (habilitado) => ({
  type: types.SET_FILTROS_HABILITADOS,
  habilitado: habilitado,
});

export const funSetFiltrosActualizados = (actualizado) => ({
  type: types.SET_FILTROS_ACTUALIZADOS,
  actualizado: actualizado,
});
