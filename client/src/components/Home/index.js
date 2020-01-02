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
        <div className="container">
          <Filter />
          <TeacherList teacherList={teacherList} />
        </div>
      </>
    );
  }
}

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
        tabindex="-1"
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
