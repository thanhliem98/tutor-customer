import { teacherConstants, teacherActions } from "../actions/teacher";
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
    case teacherConstants.TEACHER_LOGIN_REQUEST:
    case teacherConstants.TEACHER_LOGIN_SUCCESS:
      return {
        ...state,
        ...{
          isLoggedIn: true,
          type: "teacher"
        }
      };
    case teacherConstants.TEACHER_LOGIN_FAILURE:
    default:
      return state;
  }
};
