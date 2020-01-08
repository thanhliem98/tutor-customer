import React from "react";
import { userActions } from "../actions/user";
import { connect } from "react-redux";

class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.registerTutor = this.registerTutor.bind(this);
    this.registerUser = this.registerUser.bind(this);
  }

  registerUser() {
    console.log(this.props);

    let data = {
      email: this.refs.emailUser.value,
      password: this.refs.passwordUser.value,
      role_id: 1
    };

    this.props.register(data);
   
  }

  registerTutor() {
    let data = {
      email: this.refs.emailTutor.value,
      password: this.refs.passwordTutor.value,
      name: this.refs.nameTutor.value,
      role_id: 2
    };

    this.props.register(data);
    
  }

  render() {
    return (
      <div>
        <div
          className="modal fade"
          id="loginModal"
          tabIndex="-1"
          role="dialog"
          aria-hidden="false"
        >
          <div className="modal-dialog modal-register">
            <div className="modal-content">
              <div className="modal-header no-border-header text-center">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
                <h3 className="modal-title text-center">Đăng nhập</h3>
              </div>
              <div className="modal-body">
                <div>
                  <div className="nav-tabs-navigation">
                    <div className="nav-tabs-wrapper">
                      <ul id="tabs" className="nav nav-tabs" role="tablist">
                        <li className="nav-item">
                          <a
                            className="nav-link active"
                            data-toggle="tab"
                            href="#home"
                            role="tab"
                            aria-expanded="true"
                          >
                            Đăng nhập
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            data-toggle="tab"
                            href="#profile"
                            role="tab"
                            aria-expanded="false"
                          >
                            Quên mật khẩu
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div id="my-tab-content" className="tab-content">
                    <div
                      className="tab-pane active"
                      id="home"
                      role="tabpanel"
                      aria-expanded="true"
                    >
                      <div className="form-group">
                        <label>Email</label>
                        <input
                          type="text"
                          placeholder="Email"
                          className="form-control"
                        />
                      </div>
                      <div className="form-group">
                        <label>Password</label>
                        <input
                          type="password"
                          placeholder="Password"
                          className="form-control"
                        />
                      </div>
                      <button className="btn btn-block btn-round">
                        {" "}
                        Đăng nhập
                      </button>
                      <br />
                    </div>
                    <div
                      className="tab-pane"
                      id="profile"
                      role="tabpanel"
                      aria-expanded="false"
                    >
                      <div className="form-group">
                        <label>Email</label>
                        <input
                          type="text"
                          placeholder="Email"
                          className="form-control"
                        />
                      </div>
                      <button className="btn btn-block btn-round">
                        {" "}
                        Quên mật khẩu
                      </button>
                      <br />
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer no-border-footer"></div>
            </div>
          </div>
        </div>

        <div
          className="modal fade"
          id="registerModal"
          tabIndex="-1"
          role="dialog"
          aria-hidden="false"
        >
          <div className="modal-dialog modal-register">
            <div className="modal-content">
              <div className="modal-header no-border-header text-center">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
                <h3 className="modal-title text-center">Đăng ký</h3>
                <p>Tạo tài khoản</p>
              </div>
              <div className="modal-body">
                <div>
                  <div className="nav-tabs-navigation">
                    <div className="nav-tabs-wrapper">
                      <ul id="tabs" className="nav nav-tabs" role="tablist">
                        <li className="nav-item">
                          <a
                            className="nav-link active"
                            data-toggle="tab"
                            href="#regis1"
                            role="tab"
                            aria-expanded="true"
                          >
                            Tạo TK người học
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            data-toggle="tab"
                            href="#regis2"
                            role="tab"
                            aria-expanded="false"
                          >
                            Tạo TK người dạy
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div id="my-tab-content" className="tab-content">
                    <div
                      className="tab-pane active"
                      id="regis1"
                      role="tabpanel"
                      aria-expanded="true"
                    >
                      <div className="form-group">
                        <label>Email</label>
                        <input
                          ref="emailUser"
                          type="text"
                          placeholder="Email"
                          className="form-control"
                        />
                      </div>
                      <div className="form-group">
                        <label>Password</label>
                        <input
                          ref="passwordUser"
                          type="password"
                          placeholder="Password"
                          className="form-control"
                        />
                      </div>

                      <div className="form-group">
                        <label>Nhập lại mật khẩu</label>
                        <input
                          ref="repasswordUser"
                          type="password"
                          placeholder="Password"
                          className="form-control"
                        />
                      </div>

                      <button
                        onClick={() => {
                          this.registerUser();
                        }}
                        className="btn btn-block btn-round"
                      >
                        Đăng ký
                      </button>
                      <br />
                    </div>
                    <div
                      className="tab-pane"
                      id="regis2"
                      role="tabpanel"
                      aria-expanded="false"
                    >
                      <div className="form-group">
                        <label>Email</label>
                        <input
                          ref="emailTutor"
                          type="text"
                          placeholder="Email"
                          className="form-control"
                        />
                      </div>
                      <div className="form-group">
                        <label>Họ và tên</label>
                        <input
                          ref="nameTutor"
                          type="text"
                          placeholder=""
                          className="form-control"
                        />
                      </div>
                      <div className="form-group">
                        <label>Password</label>
                        <input
                          ref="passwordTutor"
                          type="password"
                          placeholder="Password"
                          className="form-control"
                        />
                      </div>

                      <div className="form-group">
                        <label>Nhập lại mật khẩu</label>
                        <input
                          ref="repasswordTutor"
                          type="password"
                          placeholder="Password"
                          className="form-control"
                        />
                      </div>

                      <button
                        onClick={() => {
                          this.registerTutor();
                        }}
                        className="btn btn-block btn-round"
                      >
                        Đăng ký
                      </button>
                      <br />
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer no-border-footer"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  register: data => {
    dispatch(userActions.register(ownProps, data));
  }
});

// const mapDispatchToProps = (dispatch, ownProps) => ({
//   return {
//     register: data => {
//       dispatch(userActions.register(ownProps, data));
//     }
//   };
// };)

export default connect(null, mapDispatchToProps)(Modal);
