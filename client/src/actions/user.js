export const userConstants = {
  LOGIN_REQUEST: "LOGIN_REQUEST",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_FAILURE: "LOGIN_FAILURE",
  REGISTER_REQUEST: "REGISTER_REQUEST",
  REGISTER_SUCCESS: "REGISTER_SUCCESS",
  REGISTER_FAILURE: "REGISTER_FAILURE",
  LOGIN: "LOGIN",
  CALL_ME: "CALL_ME"
};
// { type: CONST.ABC, payload: {data}}

const CONST = require('../utils/constant');

const HOST = "http://localhost:3001"

// function login(ownProps, username, password) {
//   function request(user) {
//     return {
//       type: userConstants.LOGIN_REQUEST,
//       payload: user
//     };
//   }
//   function success(user, token) {
//     return {
//       type: userConstants.LOGIN_SUCCESS,
//       payload: {
//         ...user,
//         token
//       }
//     };
//   }
//   function failure(error) {
//     return {
//       type: userConstants.LOGIN_FAILURE,
//       payload: error
//     };
//   }

//   return dispatch => {
//     dispatch(request({ username, password }));
//     alert("Bạn đã đăng nhập thành công");
//     ownProps.history.push("/user");

//   };
// }

// LOGIN START


async function callLogin(username, password) {
  var res = await fetch(HOST + '/user/login', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  })
  return res.json()
}

const callLoginRes = (data) => {
  return {
    type: userConstants.LOGIN,
    payload: data
  }
}

export const login = (username, password) => {
  return (dispatch) => {
    return callLogin(username, password).then(res => {
      dispatch(callLoginRes(res));
    })
  }
}

// LOGIN END

// CALL ME
async function callMe(token) {
  console.log('================> ' + token)
  const callMe = await fetch(HOST + '/me', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    }
  })
  return callMe.json()
}

const callMeRes = (res) => {
  return {
    type: CONST.CALL_ME,
    payload: res
  }
}

export const me = (token) => {
  return (dispatch => {
    return callMe(token).then(res => {
      dispatch(callMeRes(res))
    })
  })
}
// CALL ME END

// LOGOUT
export const logout = () => {
  return {
    type: CONST.CALL_ME,
    payload: {}
  }
}
// LOGOUT END
