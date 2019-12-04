import { userConstants } from "../actions/user";

const initState = {
  isLoggedIn: false
};

export default (state = initState, action) => {
  switch (action.type) {
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
