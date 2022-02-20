// Login

import * as types from "../constants/redux_constants";

export const funGuardarDataDetalle = (data) => ({
  type: types.DATA_DETALLE_GUARDAR,
  data: data,
});

export const funGuardarDataFiltrada = (data) => ({
  type: types.DATA_DETALLE_GUARDAR_FILTRADA,
  data: data,
});

export const funGuardarDataAgrupada = (data) => ({
  type: types.DATA_DETALLE_GUARDAR_AGRUPADA,
  data: data,
});

export const funSetIsLoadingDetalle = (loading) => ({
  type: types.DATA_DETALLE_SET_IS_LOADING,
  loading: loading,
});
