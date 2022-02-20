import * as types from "../constants/redux_constants";

export const funGuardarModalUbicacionVisible = (modalUbicacionVisible) => ({
  type: types.GUARDAR_MODAL_UBICACION_VISIBLE,
  modalUbicacionVisible,
});

export const funGuardarModalFotosVisible = (modalFotosVisible) => ({
  type: types.GUARDAR_MODAL_FOTOS_VISIBLE,
  modalFotosVisible,
});

export const funGuardarModalUbicacionData = (data) => ({
  type: types.GUARDAR_MODAL_UBICACION_DATA,
  modalUbicacionData: data,
});

export const funGuardarModalFotosData = (data) => ({
  type: types.GUARDAR_MODAL_FOTOS_DATA,
  modalFotosData: data,
});
