export const userConstants = {
  LOGIN_REQUEST: "LOGIN_REQUEST",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_FAILURE: "LOGIN_FAILURE",
  REGISTER_REQUEST: "REGISTER_REQUEST",
  REGISTER_SUCCESS: "REGISTER_SUCCESS",
  REGISTER_FAILURE: "REGISTER_FAILURE"
};

function login(ownProps, username, password) {
  function request(user) {
    return { type: userConstants.LOGIN_REQUEST, user };
  }
  function success(user, token) {
    return { type: userConstants.LOGIN_SUCCESS, user, token };
  }
  function failure(error) {
    return { type: userConstants.LOGIN_FAILURE, error };
  }

  return dispatch => {
    dispatch(request({ username, password }));
    alert("Bạn đã đăng nhập thành công");
    ownProps.history.push("/user");
    // userService.login(username, password).then(
    //   res => {
    //     localStorage.setItem("user", JSON.stringify(res.result.user));
    //     localStorage.setItem("token", res.result.token);
    //     alert("Bạn đã đăng nhập thành công");
    //     dispatch(success(res.result.user, res.result.token));
    //     ownProps.history.push("/");
    //   },
    //   error => {
    //     alert("Đăng nhập thất bại");
    //     dispatch(failure(error.toString()));
    //     // dispatch(alertActions.error(error.toString()));
    //   }
    // );
  };
}

export const userActions = { login };
