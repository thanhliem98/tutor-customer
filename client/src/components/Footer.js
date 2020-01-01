import React from "react";
// import { withRouter, Router, Redirect } from "react-router-dom";
// import { Link } from "react-router-dom";
// import { connect } from "react-redux";

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer className="footer footer-black">
        <div className="container">
          <div className="row">
            <nav className="footer-nav">
              <ul>
                <li>
                  <a href="https://www.creative-tim.com">Creative Tim</a>
                </li>
                <li>
                  <a href="http://blog.creative-tim.com">Blog</a>
                </li>
                <li>
                  <a href="https://www.creative-tim.com/license">Licenses</a>
                </li>
              </ul>
            </nav>
            <div className="credits ml-auto">
              <span className="copyright">
                © <script>document.write(new Date().getFullYear())</script>2020,
                made with <i className="fa fa-heart heart"></i> by Creative Tim
              </span>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
