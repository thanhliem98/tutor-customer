import React from "react";
import HeaderHome from "./header";
import Slide from "./slide";
import DiscoverMore from "./discoverMore";
import QuickLink from "./quicklink";
import PopularCourse from "./populerCourse";
import Header from "../Header";
import TeacherList from "./TeacherList";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const teacherList = [
      {
        id: 1,
        avatar: "https://www.cambly.com/static/images/landing/tutors/kay_s.jpg",
        name: "Lý Thanh Liêm",
        price: 100000,
        tags: ["Công Nghệ Thông Tin", "Marketing", "Âm Nhạc"]
      },
      {
        id: 2,
        avatar: "https://www.cambly.com/static/images/landing/tutors/kay_s.jpg",
        name: "Lý Thanh Liêm",
        price: 100000,
        tags: ["Công Nghệ Thông Tin", "Marketing", "Âm Nhạc"]
      },
      {
        id: 3,
        avatar: "https://www.cambly.com/static/images/landing/tutors/kay_s.jpg",
        name: "Lý Thanh Liêm",
        price: 100000,
        tags: ["Công Nghệ Thông Tin", "Marketing", "Âm Nhạc"]
      },
      {
        id: 4,
        avatar: "https://www.cambly.com/static/images/landing/tutors/kay_s.jpg",
        name: "Lý Thanh Liêm",
        price: 100000,
        tags: ["Công Nghệ Thông Tin", "Marketing", "Âm Nhạc"]
      }
    ];

    return (
      <>
        <Slider />

        <div className="container">
          <Filter />
          <TeacherList teacherList={teacherList} />
        </div>
      </>
    );
  }
}

const Slider = ({}) => {
  return (
    <div className="row">
      <div className="ml-auto mr-auto">
        <div className="card card-raised page-carousel">
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                className="active"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="1"
                className=""
              ></li>
            </ol>
            <div className="carousel-inner" role="listbox">
              <div className="carousel-item">
                <img
                  className="d-block img-fluid"
                  src="https://i.imgur.com/kiirGOj.jpg"
                  alt="First slide"
                />
                <div className="carousel-caption d-none d-md-block">
                  <p>Somewhere</p>
                </div>
              </div>

              <div className="carousel-item">
                <img
                  className="d-block img-fluid"
                  src="https://i.imgur.com/kiirGOj.jpg"
                  alt="First slide"
                />
                <div className="carousel-caption d-none d-md-block">
                  <p>Somewhere</p>
                </div>
              </div>
            </div>

            <a
              className="left carousel-control carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span className="fa fa-angle-left"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="right carousel-control carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span className="fa fa-angle-right"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Filter = ({}) => {
  return (
    <div className="filter">
      <div>
        <div className="row">
          <div className="col-md-6 text-right">
            <button
              type="button"
              className="btn btn-outline-danger"
              data-toggle="modal"
              data-target="#filterModal"
            >
              Bộ lọc
            </button>
          </div>

          <div className="col-md-6 text-left">
            <button type="button" className="btn btn-danger">
              Tìm kiếm
            </button>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="filterModal"
        tabIndex="-1"
        role="dialog"
        aria-hidden="false"
      >
        <div className="modal-dialog modal-register">
          <div className="modal-content">
            <div className="modal-header no-border-header text-center">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
              <h3 className="modal-title text-center">Lọc theo điều kiện</h3>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label>Địa chỉ</label>
                <select className="form-control">
                  <option>Hồ Chí Minh</option>
                  <option>Hồ Chí Minh</option>
                  <option>Hồ Chí Minh</option>
                  <option>Hồ Chí Minh</option>
                  <option>Hồ Chí Minh</option>
                  <option>Hồ Chí Minh</option>
                </select>
              </div>

              <div className="form-group">
                <label>Khoảng Giá</label>
                <select className="form-control">
                  <option> &#60; 10000 đ/h</option>
                  <option> 10000 - 50000 đ/h</option>
                  <option> 50000 - 100000 đ/h</option>
                  <option> 100000 - 200000 đ/h</option>
                  <option> 200000 - 500000 đ/h</option>
                  <option> &#62; 500000 đ/h</option>
                </select>
              </div>

              <div className="form-group">
                <label>Sắp xếp theo</label>
                <select className="form-control">
                  <option> Tin mới trước</option>
                  <option> Giá thấp trước</option>
                </select>
              </div>

              <div className="form-group">
                <label>Tags</label>
                <input className="form-control" />
              </div>
            </div>
            <div className="modal-footer no-border-footer">
              <span className="text-muted  text-center"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
