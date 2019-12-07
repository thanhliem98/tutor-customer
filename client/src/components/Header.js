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
        <div>
          <section>
            <div className="ed-mob-menu">
              <div className="ed-mob-menu-con">
                <div className="ed-mm-left">
                  <div className="wed-logo">
                    <a href="index.html">
                      <img src="/images/logo.png" alt="" />
                    </a>
                  </div>
                </div>
                <div className="ed-mm-right">
                  <div className="ed-mm-menu">
                    <a href="#!" className="ed-micon">
                      <i className="fa fa-bars"></i>
                    </a>
                    <div className="ed-mm-inn">
                      <a href="#!" className="ed-mi-close">
                        <i className="fa fa-times"></i>
                      </a>
                      <h4>All Courses</h4>
                      <h4>User Account</h4>
                      <h4>All Pages</h4>
                      <h4>User Profile</h4>
                      <ul>
                        <li>
                          <a href="dashboard.html">User profile</a>
                        </li>
                        <li>
                          <a href="db-courses.html">Courses</a>
                        </li>
                        <li>
                          <a href="db-exams.html">Exams</a>
                        </li>
                        <li>
                          <a href="db-profile.html">Prfile</a>
                        </li>
                        <li>
                          <a href="db-time-line.html">Time line</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="ed-top">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="ed-com-t1-left">
                      <ul>
                        <li>
                          <a href="#">
                            Contact: Lake Road, Suite 180 Farmington Hills,
                            U.S.A.
                          </a>
                        </li>
                        <li>
                          <a href="#">Phone: +101-1231-1231</a>
                        </li>
                      </ul>
                    </div>
                    <div className="ed-com-t1-right">{loginTag}</div>
                    <div className="ed-com-t1-social">
                      <ul>
                        <li>
                          <a href="#">
                            <i
                              className="fa fa-facebook"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i
                              className="fa fa-google-plus"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-twitter" aria-hidden="true"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="top-logo" data-spy="affix" data-offset-top="250">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="wed-logo">
                      <a href="index.html">
                        <img src="images/logo.png" alt="" />
                      </a>
                    </div>
                    <div className="main-menu">
                      <ul>
                        <li>
                          <a href="index.html">Home</a>
                        </li>
                        <li className="about-menu">
                          <a href="about.html" className="mm-arr">
                            About us
                          </a>
                          <div className="mm-pos">
                            <div className="about-mm m-menu">
                              <div className="m-menu-inn">
                                <div className="mm1-com mm1-s1">
                                  <div className="ed-course-in">
                                    <a
                                      className="course-overlay menu-about"
                                      href="admission.html"
                                    >
                                      <img src="images/h-about.jpg" alt="" />
                                      <span>Academics</span>
                                    </a>
                                  </div>
                                </div>
                                <div className="mm1-com mm1-s2">
                                  <p>
                                    Want to change the world? At Berkeley we’re
                                    doing just that. When you join the Golden
                                    Bear community, you’re part of an
                                    institution that shifts the global
                                    conversation every single day.
                                  </p>
                                  <a href="about.html" className="mm-r-m-btn">
                                    Read more
                                  </a>
                                </div>
                                <div className="mm1-com mm1-s3">
                                  <ul>
                                    <li>
                                      <a href="all-courses.html">All Courses</a>
                                    </li>
                                    <li>
                                      <a href="course-details.html">
                                        Course details
                                      </a>
                                    </li>
                                    <li>
                                      <a href="about.html">About</a>
                                    </li>
                                    <li>
                                      <a href="admission.html">Admission</a>
                                    </li>
                                    <li>
                                      <a href="awards.html">Awards</a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="mm1-com mm1-s4">
                                  <ul>
                                    <li>
                                      <a href="dashboard.html">
                                        Student profile
                                      </a>
                                    </li>
                                    <li>
                                      <a href="db-courses.html">
                                        Dashboard courses
                                      </a>
                                    </li>
                                    <li>
                                      <a href="db-exams.html">
                                        Dashboard exams
                                      </a>
                                    </li>
                                    <li>
                                      <a href="db-profile.html">
                                        Dashboard profile
                                      </a>
                                    </li>
                                    <li>
                                      <a href="db-time-line.html">
                                        Dashboard timeline
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="admi-menu">
                          <a href="#" className="mm-arr">
                            Admission
                          </a>
                          <div className="mm-pos">
                            <div className="admi-mm m-menu">
                              <div className="m-menu-inn">
                                <div className="mm2-com mm1-com mm1-s1">
                                  <div className="ed-course-in">
                                    <a
                                      className="course-overlay"
                                      href="about.html"
                                    >
                                      <img
                                        src="images/h-about1.jpg"
                                        alt=""
                                      ></img>
                                      <span>Academics</span>
                                    </a>
                                  </div>
                                  <p>
                                    Donec lacus libero, rutrum ac sollicitudin
                                    sed, mattis non eros. Vestibulum congue nec
                                    eros quis lacinia. Mauris non tincidunt
                                    lectus. Nulla mollis, orci vitae accumsan
                                    rhoncus.
                                  </p>
                                  <a href="about.html" className="mm-r-m-btn">
                                    Read more
                                  </a>
                                </div>
                                <div className="mm2-com mm1-com mm1-s1">
                                  <div className="ed-course-in">
                                    <a
                                      className="course-overlay"
                                      href="admission.html"
                                    >
                                      <img src="images/h-adm1.jpg" alt=""></img>
                                      <span>Admission</span>
                                    </a>
                                  </div>
                                  <p>
                                    Donec lacus libero, rutrum ac sollicitudin
                                    sed, mattis non eros. Vestibulum congue nec
                                    eros quis lacinia. Mauris non tincidunt
                                    lectus. Nulla mollis, orci vitae accumsan
                                    rhoncus.
                                  </p>
                                  <a
                                    href="admission.html"
                                    className="mm-r-m-btn"
                                  >
                                    Read more
                                  </a>
                                </div>
                                <div className="mm2-com mm1-com mm1-s1">
                                  <div className="ed-course-in">
                                    <a
                                      className="course-overlay"
                                      href="awards.html"
                                    >
                                      <img src="images/h-cam1.jpg" alt=""></img>
                                      <span>History & awards</span>
                                    </a>
                                  </div>
                                  <p>
                                    Donec lacus libero, rutrum ac sollicitudin
                                    sed, mattis non eros. Vestibulum congue nec
                                    eros quis lacinia. Mauris non tincidunt
                                    lectus. Nulla mollis, orci vitae accumsan
                                    rhoncus.
                                  </p>
                                  <a href="awards.html" className="mm-r-m-btn">
                                    Read more
                                  </a>
                                </div>
                                <div className="mm2-com mm1-com mm1-s4">
                                  <div className="ed-course-in">
                                    <a
                                      className="course-overlay"
                                      href="seminar.html"
                                    >
                                      <img src="images/h-res1.jpg" alt=""></img>
                                      <span>Seminar 2018</span>
                                    </a>
                                  </div>
                                  <p>
                                    Donec lacus libero, rutrum ac sollicitudin
                                    sed, mattis non eros. Vestibulum congue nec
                                    eros quis lacinia. Mauris non tincidunt
                                    lectus. Nulla mollis, orci vitae accumsan
                                    rhoncus.
                                  </p>
                                  <a href="seminar.html" className="mm-r-m-btn">
                                    Read more
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <a href="all-courses.html">All Courses</a>
                        </li>
                        {/* <li className="cour-menu">
                      <a href="#!" className="mm-arr">All Pages</a>
                      <div className="mm-pos">
                        <div className="cour-mm m-menu">
                          <div className="m-menu-inn">
                            <div className="mm1-com mm1-cour-com mm1-s3">
                              <h4>Frontend pages:1</h4>
                              <ul>
                                <li><a href="index.html">Home</a></li>
                                <li><a href="index-1.html">Home - 1</a></li>
                                <li><a href="all-courses.html">All Courses</a></li>
                                <li><a href="course-details.html">Course Details</a></li>
                                <li><a href="about.html">About us</a></li>
                                <li><a href="admission.html">admission</a></li>
                                <li><a href="awards.html">awards</a></li>
                                <li><a href="blog.html">blog</a></li>
                                <li><a href="blog-details.html">blog details</a></li>
                                <li><a href="contact-us.html">contact us</a></li>
                                <li><a href="departments.html">Departments</a></li>
                                <li><a href="events.html">events</a></li>
                                <li><a href="event-details.html">event details</a></li>
                                <li><a href="event-register.html">event register</a></li>
                              </ul>
                            </div>
                            <div className="mm1-com mm1-cour-com mm1-s3">
                              <h4>Frontend pages:2</h4>
                              <ul>
                                <li><a href="facilities.html">facilities</a></li>
                                <li><a href="facilities-detail.html">facilities detail</a></li>
                                <li><a href="research.html">research</a></li>
                                <li><a href="seminar.html">seminar</a></li>
                                <li><a href="gallery-photo.html">gallery photo</a></li>
                              </ul>
                              <h4 className="ed-dr-men-mar-top">User Dashboard</h4>
                              <ul>
                                <li><a href="dashboard.html">Student profile</a></li>
                                <li><a href="db-courses.html">Dashboard courses</a></li>
                                <li><a href="db-exams.html">Dashboard exams</a></li>
                                <li><a href="db-profile.html">Dashboard profile</a></li>
                                <li><a href="db-time-line.html">Dashboard timeline</a></li>
                              </ul>
                            </div>
                            <div className="mm1-com mm1-cour-com mm1-s3">
                              <h4>Admin panel:1</h4>
                              <ul>
                                <li><a href="admin.html">admin</a></li>
                                <li><a href="admin-add-courses.html">Add new course</a></li>
                                <li><a href="admin-all-courses.html">All courses</a></li>
                                <li><a href="admin-student-details.html">Student details</a></li>
                                <li><a href="admin-user-add.html">Add new user</a></li>
                                <li><a href="admin-user-all.html">All users</a></li>
                                <li><a href="admin-panel-setting.html">Admin setting</a></li>
                                <li><a href="admin-event-add.html">event add</a></li>
                                <li><a href="admin-event-all.html">event all</a></li>
                                <li><a href="admin-setting.html">Admin Setting</a></li>
                                <li><a href="admin-slider.html">Slider setting</a></li>
                                <li><a href="admin-slider-edit.html">Slider edit</a></li>
                                <li><a href="admin-course-details.html">course details</a></li>
                                <li><a href="admin-login.html">admin login</a></li>
                              </ul>
                            </div>
                            <div className="mm1-com mm1-cour-com mm1-s3">
                              <h4>Admin panel:2</h4>
                              <ul>
                                <li><a href="admin-event-edit.html">event edit</a></li>
                                <li><a href="admin-exam-add.html">exam add</a></li>
                                <li><a href="admin-exam-all.html">exam all</a></li>
                                <li><a href="admin-exam-edit.html">exam edit</a></li>
                                <li><a href="admin-export-data.html">export data</a></li>
                                <li><a href="admin-import-data.html">import data</a></li>
                                <li><a href="admin-job-add.html">Add new jobs</a></li>
                                <li><a href="admin-job-all.html">All jobs</a></li>
                                <li><a href="admin-job-edit.html">Edit job</a></li>
                                <li><a href="admin-main-menu.html">main menu</a></li>
                                <li><a href="admin-page-add.html">Add new page</a></li>
                                <li><a href="admin-page-all.html">All pages</a></li>
                                <li><a href="admin-page-edit.html">Edit page</a></li>
                                <li><a href="admin-forgot.html">forgot password</a></li>
                              </ul>
                            </div>
                            <div className="mm1-com mm1-cour-com mm1-s4">
                              <h4>Admin panel:3</h4>
                              <ul>
                                <li><a href="admin-quick-link.html">quick link</a></li>
                                <li><a href="admin-seminar-add.html">Add new seminar</a></li>
                                <li><a href="admin-seminar-all.html">All seminar</a></li>
                                <li><a href="admin-seminar-edit.html">Edit seminar</a></li>
                                <li><a href="admin-seminar-enquiry.html">Semester enquiry</a></li>
                                <li><a href="admin-all-enquiry.html">All enquiry</a></li>
                                <li><a href="admin-view-enquiry.html">All enquiry view</a></li>
                                <li><a href="admin-event-enquiry.html">event enquiry</a></li>
                                <li><a href="admin-admission-enquiry.html">Admission enquiry</a></li>
                                <li><a href="admin-common-enquiry.html">common enquiry</a></li>
                                <li><a href="admin-course-enquiry.html">course enquiry</a></li>
                                <li><a href="admin-all-menu.html">menu all</a></li>
                                <li><a href="admin-about-menu.html">Menu - About</a></li>
                                <li><a href="admin-admission-menu.html">Menu - admission</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                */}
                        <li>
                          <a href="events.html">Events</a>
                        </li>
                        <li>
                          <a href="dashboard.html">Student</a>
                        </li>
                        <li>
                          <a href="contact-us.html">Contact us</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="all-drop-down-menu"></div>
                </div>
              </div>
            </div>
          </section>
        </div>
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
