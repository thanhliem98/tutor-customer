import { userConstants } from "../actions/user";

import Cookies from 'universal-cookie';
const cookies = new Cookies();
const CONST = require('../utils/constant');

const initState = {
  isLoggedIn: false,
  token: ""
};

export default (state = initState, action) => {
  switch (action.type) {
    case userConstants.LOGIN: {
      var response = action.payload;
      if (Number(response.code) === 200) {
        console.log("LOGIN SUCCESS");
        let token = response.token;
        cookies.set(CONST.TOKEN, token);
        return {
          ...state,
          token,
          isLoggedIn: true
        }
      }
      console.log("LOGIN FAILED")
      return { ...state }
    }

    case CONST.LOGOUT: {
      cookies.remove(CONST.TOKEN);
      return {
        ...state,
        token: "",
        isLoggedIn: false,
      }
    }

    case userConstants.LOGIN_REQUEST:
    case userConstants.LOGIN_SUCCESS: {
      return {
        ...state,
        ...{
          isLoggedIn: true,
          type: "user"
        }
      };
    }
    case userConstants.UPDATE_INFO_SUCCESS:
    case userConstants.LOGIN_FAILURE:
      return state;
    default:
      return state;
  }
};
