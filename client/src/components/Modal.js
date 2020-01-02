import React from "react";

const Modal = () => {
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

      <div
        class="modal fade"
        id="loginModal"
        tabindex="-1"
        role="dialog"
        aria-hidden="false"
      >
        <div class="modal-dialog modal-register">
          <div class="modal-content">
            <div class="modal-header no-border-header text-center">
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
              <h3 class="modal-title text-center">Đăng nhập</h3>
            </div>
            <div class="modal-body">
              <div class="form-group">
                <label>Email</label>
                <input
                  type="text"
                  value=""
                  placeholder="Email"
                  class="form-control"
                />
              </div>
              <div class="form-group">
                <label>Password</label>
                <input
                  type="password"
                  value=""
                  placeholder="Password"
                  class="form-control"
                />
              </div>
              <button class="btn btn-block btn-round"> Đăng nhập</button>
              <br />

              <button class="btn btn-facebook btn-block btn-round">
                <i class="fa fa-facebook" aria-hidden="true"></i>
                Đăng nhập bằng Facebook
              </button>
            </div>
            <div class="modal-footer no-border-footer">
              <span class="text-muted  text-center"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
