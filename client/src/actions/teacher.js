export const teacherConstants = {
  TEACHER_LOGIN_REQUEST: "TEACHER_LOGIN_REQUEST",
  TEACHER_LOGIN_SUCCESS: "TEACHER_LOGIN_SUCCESS",
  TEACHER_LOGIN_FAILURE: "TEACHER_LOGIN_FAILURE"
};

function login(ownProps, username, password) {
  function request(user) {
    return { type: teacherConstants.TEACHER_LOGIN_REQUEST, user };
  }
  function success(user, token) {
    return { type: teacherConstants.TEACHER_LOGIN_SUCCESS, user, token };
  }
  function failure(error) {
    return { type: teacherConstants.TEACHER_LOGIN_FAILURE, error };
  }

  return dispatch => {
    dispatch(request({ username, password }));
    alert("Bạn đã đăng nhập thành công");
    ownProps.history.push("/teacher");
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

export const teacherActions = { login };
