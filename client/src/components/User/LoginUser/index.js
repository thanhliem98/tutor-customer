import React, { Component } from "react";
import { login } from '../../../actions/user'
import { connect } from 'react-redux';

class LoginUser extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-offset-1 col-md-10">
          <div className="log-in-pop">
            <div className="log-in-pop-left">
              <h1>Hello...</h1>
              <p>
                Don't have an account? Create your account. It's take less then
                a minutes
              </p>
              <h4>Login with social media</h4>
              <ul>
                <li>
                  <a href="#">
                    <i className="fa fa-facebook"></i> Facebook
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-google"></i> Google+
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-twitter"></i> Twitter
                  </a>
                </li>
              </ul>
            </div>
            <div className="log-in-pop-right">
              <a href="#" className="pop-close" data-dismiss="modal">
                <img src="images/cancel.png" alt="" />
              </a>
              <h4>Login</h4>
              <p>
                Don't have an account? Create your account. It's take less then
                a minutes
              </p>
              <form className="s12">
                <div>
                  <div className="input-field s12">
                    <input
                      type="text"
                      data-ng-model="name"
                      className="validate"
                    ></input>
                    <label>User name</label>
                  </div>
                </div>
                <div>
                  <div className="input-field s12">
                    <input type="password" className="validate"></input>
                    <label>Password</label>
                  </div>
                </div>
                <div>
                  <div className="s12 log-ch-bx">
                    <p>
                      <input type="checkbox" id="test5"></input>
                      <label for="test5">Remember me</label>
                    </p>
                  </div>
                </div>
                <div>
                  <div className="input-field s4">
                    <input onClick={() => {
                      this.props.login('', '');
                    }}
                      type="submit"
                      value="Login"
                      className="waves-effect waves-light log-in-btn"
                    ></input>
                  </div>
                  <div>
                    <div className="input-field s12">
                      <a
                        href="#"
                        data-dismiss="modal"
                        data-toggle="modal"
                        data-target="#modal3"
                      >
                        Forgot password
                      </a>
                      |
                      <a
                        href="#"
                        data-dismiss="modal"
                        data-toggle="modal"
                        data-target="#modal2"
                      >
                        Create a new account
                      </a>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    login: (username, password) => {
      dispatch(login(username, password));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginUser);
