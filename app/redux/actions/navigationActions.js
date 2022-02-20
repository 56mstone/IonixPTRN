import * as types from "../constants/redux_constants";

export const funGuardarNavigationUser = (user) => ({
  type: types.GUARDAR_NAVIGATION_USER,
  user: user,
});
