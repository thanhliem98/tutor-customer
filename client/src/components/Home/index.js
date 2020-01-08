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
      },
      {
        id: 5,
        avatar: "https://www.cambly.com/static/images/landing/tutors/kay_s.jpg",
        name: "Lý Thanh Liêm",
        price: 100000,
        tags: ["Công Nghệ Thông Tin", "Marketing", "Âm Nhạc"]
      },
      {
        id: 6,
        avatar: "https://www.cambly.com/static/images/landing/tutors/kay_s.jpg",
        name: "Lý Thanh Liêm",
        price: 100000,
        tags: ["Công Nghệ Thông Tin", "Marketing", "Âm Nhạc"]
      },
      {
        id: 7,
        avatar: "https://www.cambly.com/static/images/landing/tutors/kay_s.jpg",
        name: "Lý Thanh Liêm",
        price: 100000,
        tags: ["Công Nghệ Thông Tin", "Marketing", "Âm Nhạc"]
      },
      {
        id: 8,
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
          <h3 className="title-uppercase">TÌM GIA SƯ THEO CÔNG NGHỆ 4.0</h3>
          <Info />
          <h3 className="title-uppercase">Người dùng đánh giá</h3>
          <Comment/>
          <h3 className="title-uppercase">Người dạy tiêu biểu</h3>
          <TeacherList teacherList={teacherList} />
        </div>
      </>
    );
  }
}

const Comment = ({}) => {
  return (
    <div className="row">
      <div className="col-md-4">
        <div className="card card-profile card-plain">
          <div className="card-body">
            <div className="card-avatar">
              <a href="#avatar">
                <img src="/img/faces/ayo-ogunseinde-2.jpg" alt="..." />
                <h4 className="card-title">Eric Thomson</h4>
              </a>
            </div>
            <p className="card-description text-center">
              A group becomes a team when each member is sure enough of himself
              and his contribution to praise the skill of the others. No one can
              whistle a symphony. It takes orchestra to play it.
            </p>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card card-profile card-plain">
          <div className="card-body">
            <div className="card-avatar">
              <a href="#avatar">
                <img src="/img/faces/joe-gardner-2.jpg" alt="..." />
                <h4 className="card-title">Sophia West</h4>
              </a>
            </div>
            <p className="card-description text-center">
              The strength of the team is each individual member. The strength
              of each member is the team. If you can laugh together, you can
              work together, silence isn’t golden, it’s deadly.
            </p>
          </div>
        
        </div>
      </div>

      <div className="col-md-4">
        <div className="card card-profile card-plain">
          <div className="card-body">
            <div className="card-avatar">
              <a href="#avatar">
                <img src="/img/faces/clem-onojeghuo-2.jpg" alt="..." />
                <h4 className="card-title">Lucas Andrew</h4>
              </a>
            </div>
            <p className="card-description text-center">
              Great teams do not hold back with one another. They are unafraid
              to air their dirty laundry. They admit their mistakes, their
              weaknesses and their concerns without fear of reprisal.
            </p>
          </div>
        
        </div>
      </div>
    </div>
  );
};

const Info = ({}) => {
  return (
    <div className="row">
      <div className="col-md-4">
        <div className="info">
          <div className="icon">
            <i className="nc-icon nc-time-alarm"></i>
          </div>
          <div className="description">
            <h4 className="info-title"> Save Time </h4>
            <p>
              Spend your time generating new ideas. You don't have to think of
              implementing anymore.
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="info">
          <div className="icon">
            <i className="nc-icon nc-delivery-fast"></i>
          </div>
          <div className="description">
            <h4 className="info-title"> Fast Prototyping </h4>
            <p>
              Larger, yet dramatically thinner. More powerful, but remarkably
              power efficient.
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="info">
          <div className="icon">
            <i className="nc-icon nc-palette"></i>
          </div>
          <div className="description">
            <h4 className="info-title"> Beautiful Colors </h4>
            <p>
              Choose from a veriety of colors resembling sugar paper pastels.
            </p>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="info">
          <div className="icon">
            <i className="nc-icon nc-time-alarm"></i>
          </div>
          <div className="description">
            <h4 className="info-title"> Save Time </h4>
            <p>
              Spend your time generating new ideas. You don't have to think of
              implementing anymore.
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="info">
          <div className="icon">
            <i className="nc-icon nc-delivery-fast"></i>
          </div>
          <div className="description">
            <h4 className="info-title"> Fast Prototyping </h4>
            <p>
              Larger, yet dramatically thinner. More powerful, but remarkably
              power efficient.
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="info">
          <div className="icon">
            <i className="nc-icon nc-palette"></i>
          </div>
          <div className="description">
            <h4 className="info-title"> Beautiful Colors </h4>
            <p>
              Choose from a veriety of colors resembling sugar paper pastels.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Slider = ({}) => {
  return (
    <div className="row">
      <div className="">
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
                className=""
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="1"
                className="active"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="2"
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
                  <h3>Tìm gia sư, tìm giáo viên</h3>
                  <p>
                    Thật đơn giản, bạn chỉ cần gửi yêu cầu học, các giáo viên sẽ
                    gửi đề nghị dạy tới bạn cùng với mức học phí mong muốn. Bạn
                    sẽ chủ động chọn lựa giáo viên phù hợp với bạn nhất.
                  </p>
                </div>
              </div>
              <div className="carousel-item active">
                <img
                  className="d-block img-fluid"
                  src="https://i.imgur.com/kiirGOj.jpg"
                  alt="Second slide"
                />
                <div className="carousel-caption d-none d-md-block">
                  <h3>TÌM GIA SƯ THEO CÔNG NGHỆ 4.0</h3>
                  <p>Đảm bảo chất lượng, tiết kiệm chi phí tốt nhất</p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  className="d-block img-fluid"
                  src="https://i.imgur.com/kiirGOj.jpg"
                  alt="Third slide"
                />
                <div className="carousel-caption d-none d-md-block">
                  <h3>Trở thành gia sư</h3>
                  <p>
                    Nếu bạn có một khả năng nào đó, hãy đăng ký trở thành gia sư
                    trên hệ thống Blacasa, bạn sẽ được tiếp cận với hàng ngàn
                    học viên và có cơ hội được truyền đạt kiến thức của mình.
                  </p>
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
