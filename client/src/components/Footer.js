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
      <footer className="footer footer-big footer-gray">

	<div className="container">
		<div className="row">
			<div className="col-md-2 col-sm-3 col-6 ml-auto mr-auto">
		</div>
			<div className="col-md-9 ml-auto mr-auto col-sm-9 col-12">
				<div className="row">
					<div className="col-md-3 col-sm-3 col-6">
						<div className="links">
							<ul className="uppercase-links stacked-links">
								<li>
									<a href="#paper-kit">
										Home
									</a>
								</li>
								<li>
									<a href="#paper-kit">
										Discover
									</a>
								</li>
								<li>
									<a href="#paper-kit">
										Blog
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="col-md-3 col-sm-3 col-6">
						<div className="links">
							<ul className="uppercase-links stacked-links">
								<li>
									<a href="#paper-kit">
									   Contact Us
									</a>
								</li>
								<li>
									<a href="#paper-kit">
									   We're Hiring
									</a>
								</li>
								<li>
									<a href="#paper-kit">
									   About Us
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="col-md-3 col-sm-3 col-6">
						<div className="links">
							<ul className="uppercase-links stacked-links">
								<li>
									<a href="#paper-kit">
										Portfolio
									</a>
								</li>
								<li>
									<a href="#paper-kit">
									   How it works
									</a>
								</li>
								<li>
									<a href="#paper-kit">
									   Testimonials
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="col-md-3 col-6">
						<div className="social-area">
							<a className="btn btn-just-icon btn-round btn-facebook">
								<i className="fa fa-facebook" aria-hidden="true"></i>
							</a>
							<a className="btn btn-just-icon btn-round btn-twitter">
								<i className="fa fa-twitter" aria-hidden="true"></i>
							</a>
							<a className="btn btn-just-icon btn-round btn-google">
								<i className="fa fa-google-plus" aria-hidden="true"></i>
							</a>
							<a className="btn btn-just-icon btn-round btn-pinterest">
								<i className="fa fa-pinterest-p" aria-hidden="true"></i>
							</a>
						</div>
					</div>
				</div>
				<hr/>
				<div className="copyright">
					<div className="pull-left">
					2020 Creative Tim, made with love
					</div>
					<div className="links pull-right">
						<ul>
							<li>
								<a href="#paper-kit">
									Company Policy
								</a>
							</li>
							<li>
								<a href="#paper-kit">
									Terms
								</a>
							</li>
							<li>
								<a href="#paper-kit">
									Privacy
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>

	</div>
</footer>
    );
  }
}

export default Footer;
