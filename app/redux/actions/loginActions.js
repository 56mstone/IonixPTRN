// Login

import * as types from '../constants/redux_constants';


export const funLogin = (loginOn) => ({
  type: types.LOGIN_ON,
  loginOn: loginOn,
});
