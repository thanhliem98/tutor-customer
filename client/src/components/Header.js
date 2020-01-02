import React from "react";
import { withRouter, Router, Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Header extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   registerRedirect: false
    // }
  }

  // teacherRegister() {
  //   this.setState({
  //     registerRedirect: true
  //   })
  // }

  render() {
    // if (this.state.registerRedirect) {
    //   return <Redirect history={this.props.history} to="/teacher/register">
    //     {/* <PopularCourse /> */}
    //   </Redirect>
    // }

    const loginTag = !this.props.isLoggedIn ? (
      <ul>
        <li>
          <Link to="/user/login">Sign In</Link>
        </li>
        <li>
          <a href="#!" data-toggle="modal" data-target="#modal2">
            Sign Up
          </a>
        </li>
        <li>
          <Link to="/teacher/login">Teacher Sign In</Link>
        </li>
        <li>
          <Link to="/teacher/register">Become a teacher</Link>
        </li>
      </ul>
    ) : (
      <ul>
        <li>
          <Link to="/logout">Logout</Link>
        </li>
      </ul>
    );

    return (
      <>
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <div className="navbar-translate">
              <div className="navbar-header">
                <Link className="navbar-brand" to="/">
                  Uber For Tutor
                </Link>
              </div>
              <button
                className="navbar-toggler navbar-burger"
                type="button"
                data-toggle="collapse"
                data-target="#navbarToggler"
                aria-controls="navbarTogglerDemo02"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-bar"></span>
                <span className="navbar-toggler-bar"></span>
                <span className="navbar-toggler-bar"></span>
              </button>
            </div>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link" href="index.html" data-scroll="true">
                    Components
                  </a>
                </li>

                <li className="nav-item">
                  <button
                    type="button"
                    class="btn btn-primary btn-round"
                    data-toggle="modal"
                    data-target="#loginModal"
                  >
                    Login
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.login.isLoggedIn || false
  };
};

export default connect(mapStateToProps)(Header);
