import React, { Component } from "react";
import { teacherActions } from "../../../actions/teacher";
import { connect } from 'react-redux';

class LoginTeacher extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-offset-3 col-md-6">
          <div className="box-inn-sp admin-form">
            <div className="inn-title">
              <h4>Teacher Sign In</h4>

            </div>
            <div className="tab-inn">
              <form>
                <div className="row">
                  <div className="input-field col s6">
                    <input type="text" value="" className="validate" />
                    <label className="">Email</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s6">
                    <input type="password" value="" className="validate" />
                    <label className="">Password</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <i className="waves-effect waves-light btn waves-input-wrapper">
                      <input onClick={() => { this.props.login('', '') }} type="submit" value="login" className="waves-button-input" />
                    </i>
                  </div>
                </div>
              </form>
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

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    login: (username, password) => {
      dispatch(teacherActions.login(ownProps, username, password));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginTeacher);

