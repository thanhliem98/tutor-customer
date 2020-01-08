import { userService } from "../services/user";
import { firebaseService } from "../services/firebase";

export const userConstants = {
  LOGIN_REQUEST: "LOGIN_REQUEST",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_FAILURE: "LOGIN_FAILURE",
  REGISTER_REQUEST: "REGISTER_REQUEST",
  REGISTER_SUCCESS: "REGISTER_SUCCESS",
  REGISTER_FAILURE: "REGISTER_FAILURE",
  FORGOT_PASSWORD: "FORGOT_PASSWORD"
};

function login(ownProps, email, password) {
  function request(user) {
    return { type: userConstants.LOGIN_REQUEST, user };
  }
  function success(user, token) {
    return { type: userConstants.LOGIN_SUCCESS, user, token };
  }
  function failure(error) {
    return { type: userConstants.LOGIN_FAILURE, error };
  }

  return async dispatch => {
    try {
      const userFirebase = await firebaseService
        .auth()
        .signInWithEmailAndPassword(email, password);
      console.log(await userFirebase.user.getIdToken());

      const user = await userService.login(
        await userFirebase.user.getIdToken()
      );
      const json = JSON.parse(await user.text());
      if (user.status !== 200) alert("Đăng nhập không thành công");
      else {
        alert("Đăng nhập thành công");
        dispatch(success(json.user, json.token));
        if (json.user.role_id === 1) {
          // Redirect to /tutorProfile
          //ownProps.history.push("/tutorProfile");
        } else if (json.user.role_id === 2) {
          //ownProps.history.push("/userProfile");
          // Redirect to /userProfile
        }
      }
    } catch (err) {
      alert("Đăng nhập không thành công");
      dispatch(failure());
      throw err;
    }
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
      const user = await firebaseService
        .auth()
        .createUserWithEmailAndPassword(data.email, data.password);
      data.username = user.user.uid;
      const result = await userService.register(data);
      await user.user.sendEmailVerification();

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

function forgotPassword(ownProps, email) {
  function request() {
    return { type: userConstants.FORGOT_PASSWORD };
  }

  return async dispatch => {
    try {
      await firebaseService.auth().sendPasswordResetEmail(email);
      dispatch(request());
      alert("Vui lòng kiểm tra email");
    } catch (err) {
      dispatch(request());
      alert("Vui lòng kiểm tra passworđ");
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

export const userActions = { login, register, forgotPassword };
