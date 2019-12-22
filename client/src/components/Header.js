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
        <nav
          className="navbar navbar-expand-lg fixed-top nav-down"
        >
          <div className="container-fluid">
            <div className="navbar-translate">
              <div className="navbar-header">
                <a className="navbar-brand" href="presentation.html">
                  Uber For Tutor
                </a>
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
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="javascript:void(0)"
                    data-toggle="dropdown"
                  >
                    Sections
                  </a>
                  <ul className="dropdown-menu dropdown-menu-right dropdown-danger">
                    <a className="dropdown-item" href="sections.html#headers">
                      <i className="nc-icon nc-tile-56"></i>&nbsp; Headers
                    </a>
                    <a className="dropdown-item" href="sections.html#features">
                      <i className="nc-icon nc-settings"></i>&nbsp; Features
                    </a>
                    <a className="dropdown-item" href="sections.html#blogs">
                      <i className="nc-icon nc-bullet-list-67"></i>&nbsp; Blogs
                    </a>
                    <a className="dropdown-item" href="sections.html#teams">
                      <i className="nc-icon nc-single-02"></i>&nbsp; Teams
                    </a>
                    <a className="dropdown-item" href="sections.html#projects">
                      <i className="nc-icon nc-calendar-60"></i>&nbsp; Projects
                    </a>
                    <a className="dropdown-item" href="sections.html#pricing">
                      <i className="nc-icon nc-money-coins"></i>&nbsp; Pricing
                    </a>
                    <a
                      className="dropdown-item"
                      href="sections.html#testimonials"
                    >
                      <i className="nc-icon nc-badge"></i>&nbsp; Testimonials
                    </a>
                    <a
                      className="dropdown-item"
                      href="sections.html#contact-us"
                    >
                      <i className="nc-icon nc-mobile"></i>&nbsp; Contacts
                    </a>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                    href="javascript:void(0)"
                  >
                    Examples
                  </a>
                  <ul className="dropdown-menu dropdown-menu-right dropdown-danger">
                    <a className="dropdown-item" href="examples/about-us.html">
                      <i className="nc-icon nc-bank"></i>&nbsp; About Us
                    </a>
                    <a
                      className="dropdown-item"
                      href="examples/add-product.html"
                    >
                      <i className="nc-icon nc-basket"></i>&nbsp; Add Product
                    </a>
                    <a className="dropdown-item" href="examples/blog-post.html">
                      <i className="nc-icon nc-badge"></i>&nbsp; Blog Post
                    </a>
                    <a
                      className="dropdown-item"
                      href="examples/blog-posts.html"
                    >
                      <i className="nc-icon nc-bullet-list-67"></i>&nbsp; Blog
                      Posts
                    </a>
                    <a
                      className="dropdown-item"
                      href="examples/contact-us.html"
                    >
                      <i className="nc-icon nc-mobile"></i>&nbsp; Contact Us
                    </a>
                    <a className="dropdown-item" href="examples/discover.html">
                      <i className="nc-icon nc-world-2"></i>&nbsp; Discover
                    </a>
                    <a className="dropdown-item" href="examples/ecommerce.html">
                      <i className="nc-icon nc-send"></i>&nbsp; Ecommerce
                    </a>
                    <a className="dropdown-item" href="examples/landing.html">
                      <i className="nc-icon nc-spaceship"></i>&nbsp; Landing
                    </a>
                    <a className="dropdown-item" href="examples/login.html">
                      <i className="nc-icon nc-lock-circle-open"></i>&nbsp;
                      Login
                    </a>
                    <a
                      className="dropdown-item"
                      href="examples/product-page.html"
                    >
                      <i className="nc-icon nc-album-2"></i>&nbsp; Product Page
                    </a>
                    <a className="dropdown-item" href="examples/profile.html">
                      <i className="nc-icon nc-single-02"></i>&nbsp; Profile
                    </a>
                    <a className="dropdown-item" href="examples/register.html">
                      <i className="nc-icon nc-bookmark-2"></i>&nbsp; Register
                    </a>
                    <a
                      className="dropdown-item"
                      href="examples/search-with-sidebar.html"
                    >
                      <i className="nc-icon nc-zoom-split"></i>&nbsp; Search
                    </a>
                    <a className="dropdown-item" href="examples/settings.html">
                      <i className="nc-icon nc-settings-gear-65"></i>&nbsp;
                      Settings
                    </a>
                    <a
                      className="dropdown-item"
                      href="examples/twitter-redesign.html"
                    >
                      <i className="nc-icon nc-tie-bow"></i>&nbsp; Twitter
                    </a>
                  </ul>
                </li>
                <li className="nav-item">
                  <a
                    className="btn btn-round btn-danger"
                    href="https://www.creative-tim.com/product/paper-kit-2-pro"
                  >
                    <i className="nc-icon nc-cart-simple"></i> Buy now
                  </a>
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
