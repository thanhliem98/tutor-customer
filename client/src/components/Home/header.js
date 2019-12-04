import React from 'react'

const HeaderHome = () => {
    return <>
        {/* HEADER START */}
        <section>

            <div className="search-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="search-form">
                                <form>
                                    <div className="sf-type">
                                        <div className="sf-input">
                                            <input type="text" id="sf-box" placeholder="Search course and discount courses"></input>
                                        </div>
                                        <div className="sf-list">
                                            <ul>
                                                <li><a href="course-details.html">Accounting/Finance</a></li>
                                                <li><a href="course-details.html">civil engineering</a></li>
                                                <li><a href="course-details.html">Art/Design</a></li>
                                                <li><a href="course-details.html">Marine Engineering</a></li>
                                                <li><a href="course-details.html">Business Management</a></li>
                                                <li><a href="course-details.html">Journalism/Writing</a></li>
                                                <li><a href="course-details.html">Physical Education</a></li>
                                                <li><a href="course-details.html">Political Science</a></li>
                                                <li><a href="course-details.html">Sciences</a></li>
                                                <li><a href="course-details.html">Statistics</a></li>
                                                <li><a href="course-details.html">Web Design/Development</a></li>
                                                <li><a href="course-details.html">SEO</a></li>
                                                <li><a href="course-details.html">Google Business</a></li>
                                                <li><a href="course-details.html">Graphics Design</a></li>
                                                <li><a href="course-details.html">Networking Courses</a></li>
                                                <li><a href="course-details.html">Information technology</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="sf-submit">
                                        <input type="submit" value="Search Course"></input>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* HEADER END */}
    </>
}

export default HeaderHome