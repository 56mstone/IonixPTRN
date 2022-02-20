// Login

import * as types from '../constants/redux_constants'; 


export const funIncrementar = (numero) => ({
  type: types.DESARROLLO_INCREMENT,
  numero: numero,
});

export const funDecrementar = (numero) => ({
  type: types.DESARROLLO_DECREMENT,
  numero: numero,
});


export const actionChangeScreen = (screen) => ({
  type: types.DESARROLLO_SCREEN,
  screen: screen,
});