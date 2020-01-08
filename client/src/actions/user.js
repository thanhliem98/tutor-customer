import { userService } from "../services/user";

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

function register(ownProps, data) {
  function request(data) {
    return { type: userConstants.REGISTER_REQUEST, data };
  }
  function success(data) {
    return { type: userConstants.REGISTER_SUCCESS, data };
  }
  function failure(error) {
    return { type: userConstants.REGISTER_FAILURE, error };
  }

  return async (dispatch, firebase) => {
    try {
      const result = await userService.register(data);

      if (result.status !== 200) alert("Tạo tài khoản không thành công");
      else {
        alert("Tạo tài khoản thành công");
      }

      dispatch(success(data));
    } catch (err) {
      alert("Tạo tài khoản không thành công");
      dispatch(failure(data));
      throw err;
    }

    // userService
    //   .register(data)
    //   .then(result => {
    //     if (result.status !== 200) alert("Tạo tài khoản không thành công");
    //     else {
    //       firebase.auth().signInWithEmailAndPassword(data.email, data.password)
    //         .then;
    //     }

    //     console.log(result);
    //   })
    //   .catch(err => {
    //     alert("Tạo tài khoản không thành công");
    //   });

    //ownProps.history.push("/user");
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

export const userActions = { login, register };
