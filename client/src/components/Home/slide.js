import React from 'react'


const Slide = () => {
    return <>
        {/* SLIDE START */}
        <section>
            <div id="myCarousel" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="item slider1 active">
                        <img src="images/slider/1.jpg" alt=""></img>
                        <div className="carousel-caption slider-con">
                            <h2>Welcome to <span>University</span></h2>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
                            <a href="#" className="bann-btn-1">All Courses</a><a href="#" className="bann-btn-2">Read More</a>
                        </div>
                    </div>
                    <div className="item">
                        <img src="images/slider/2.jpg" alt=""></img>
                        <div className="carousel-caption slider-con">
                            <h2>Admission open <span>2018</span></h2>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
                            <a href="#" className="bann-btn-1">Admission</a><a href="#" className="bann-btn-2">Read More</a>
                        </div>
                    </div>
                    <div className="item">
                        <img src="images/slider/3.jpg" alt=""></img>
                        <div className="carousel-caption slider-con">
                            <h2>Education <span>Master</span></h2>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
                            <a href="#" className="bann-btn-1">All Courses</a><a href="#" className="bann-btn-2">Read More</a>
                        </div>
                    </div>
                </div>

                <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                    <i className="fa fa-chevron-left slider-arr"></i>
                </a>
                <a className="right carousel-control" href="#myCarousel" data-slide="next">
                    <i className="fa fa-chevron-right slider-arr"></i>
                </a>
            </div>
        </section>
        {/* SLIDE END */}
    </>
}

export default Slide
