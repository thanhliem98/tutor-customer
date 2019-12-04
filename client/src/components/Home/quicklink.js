import React from 'react'

const QuickLink = () => {
    return <>
        {/* QUICK LINK START*/}
        <section>
            <div className="container">
                <div className="row">
                    <div className="wed-hom-ser">
                        <ul>
                            <li>
                                <a href="awards.html" className="waves-effect waves-light btn-large wed-pop-ser-btn">
                                    <img src="images/icon/h-ic1.png" alt=""></img>
                                    Academy
                                </a>
                            </li>
                            <li>
                                <a href="admission.html" className="waves-effect waves-light btn-large wed-pop-ser-btn">
                                    <img src="images/icon/h-ic2.png" alt=""></img>
                                    Admission
                                        </a>
                            </li>
                            <li>
                                <a href="all-courses.html" className="waves-effect waves-light btn-large wed-pop-ser-btn">
                                    <img src="images/icon/h-ic4.png" alt=""></img>
                                    Courses</a>
                            </li>
                            <li>
                                <a href="seminar.html" className="waves-effect waves-light btn-large wed-pop-ser-btn">
                                    <img src="images/icon/h-ic3.png" alt=""></img>
                                    Seminar</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        {/* QUICK LINK END */}
    </>
}

export default QuickLink