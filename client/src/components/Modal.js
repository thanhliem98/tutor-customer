import React, { Component } from 'react'
import { login } from '../actions/user';
import { connect } from 'react-redux';

class Modal extends Component {

  loginSubmit(event) {
    event.preventDefault();
    var username = event.currentTarget[0].value;
    var password = event.currentTarget[1].value;
    this.props.login(username, password);
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <div id="modal1" className="modal fade" role="dialog">
          <div className="log-in-pop">
            <div className="log-in-pop-left">
              <h1>Hello...</h1>
              <p>
                Don't have an account? Create your account. It's take less then a
                minutes
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
                Don't have an account? Create your account. It's take less then a
                minutes
            </p>
              <form id="frmLogin" onSubmit={event => this.loginSubmit(event)} className="s12">
                <div>
                  <div className="input-field s12">
                    <input
                      type="text"
                      data-ng-model="name"
                      className="validate"
                      name="username"
                    ></input>
                    <label>User name</label>
                  </div>
                </div>
                <div>
                  <div className="input-field s12">
                    <input type="password" className="validate" name="password"></input>
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
                    <input
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
        <div id="modal2" className="modal fade" role="dialog">
          <div className="log-in-pop">
            <div className="log-in-pop-left">
              <h1>Hello...</h1>
              <p>
                Don't have an account? Create your account. It's take less then a
                minutes
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
              <h4>Create an Account</h4>
              <p>
                Don't have an account? Create your account. It's take less then a
                minutes
            </p>
              <form className="s12">
                <div>
                  <div className="input-field s12">
                    <input
                      type="text"
                      data-ng-model="name1"
                      className="validate"
                    ></input>
                    <label>User name</label>
                  </div>
                </div>
                <div>
                  <div className="input-field s12">
                    <input type="email" className="validate"></input>
                    <label>Email id</label>
                  </div>
                </div>
                <div>
                  <div className="input-field s12">
                    <input type="password" className="validate"></input>
                    <label>Password</label>
                  </div>
                </div>
                <div>
                  <div className="input-field s12">
                    <input type="password" className="validate"></input>
                    <label>Confirm password</label>
                  </div>
                </div>
                <div>
                  <div className="input-field s4">
                    <input
                      type="submit"
                      value="Register"
                      className="waves-effect waves-light log-in-btn"
                    ></input>
                  </div>
                </div>
                <div>
                  <div className="input-field s12">
                    {" "}
                    <a
                      href="#"
                      data-dismiss="modal"
                      data-toggle="modal"
                      data-target="#modal1"
                    >
                      Are you a already member ? Login
                  </a>{" "}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div id="modal3" className="modal fade" role="dialog">
          <div className="log-in-pop">
            <div className="log-in-pop-left">
              <h1>Hello...</h1>
              <p>
                Don't have an account? Create your account. It's take less then a
                minutes
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
              <h4>Create an Account</h4>
              <p>
                Don't have an account? Create your account. It's take less then a
                minutes
            </p>
              <form className="s12">
                <div>
                  <div className="input-field s12">
                    <input
                      type="text"
                      data-ng-model="name1"
                      className="validate"
                    ></input>
                    <label>User name</label>
                  </div>
                </div>
                <div>
                  <div className="input-field s12">
                    <input type="email" className="validate"></input>
                    <label>Email id</label>
                  </div>
                </div>
                <div>
                  <div className="input-field s12">
                    <input type="password" className="validate"></input>
                    <label>Password</label>
                  </div>
                </div>
                <div>
                  <div className="input-field s12">
                    <input type="password" className="validate"></input>
                    <label>Confirm password</label>
                  </div>
                </div>
                <div>
                  <div className="input-field s4">
                    <input
                      type="submit"
                      value="Register"
                      className="waves-effect waves-light log-in-btn"
                    ></input>
                  </div>
                </div>
                <div>
                  <div className="input-field s12">
                    {" "}
                    <a
                      href="#"
                      data-dismiss="modal"
                      data-toggle="modal"
                      data-target="#modal1"
                    >
                      Are you a already member ? Login
                  </a>{" "}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div >
    );
  }
};

const mapStateToProps = state => {
  return {
    users: state.users
  };
};

export default connect(mapStateToProps, { login })(Modal);
