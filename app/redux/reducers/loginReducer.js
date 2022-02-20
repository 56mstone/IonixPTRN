import * as types from "../constants/redux_constants";

const initialState = {
  loginOn: false,
};

const desarrolloReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_ON: {
      console.log("LOGIN_ON", action.loginOn);
      return {
        ...state,
        loginOn: action.loginOn,
      };
    }
    default: {
      return state;
    }
  }
};

export default desarrolloReducer;
