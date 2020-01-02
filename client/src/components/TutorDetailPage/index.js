import React, { Component } from "react";

class TutorDetailPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const histories = [{}];

    return (
      <section>
        <div className="tutor-detail container">
          <div className="row">
            <div className="col-md-4">
              <div className="tutor-avatar">
                <img
                  className="img-thumbnail img-responsive"
                  src="https://d1nzpkv5wwh1xf.cloudfront.net/320/k-57bd1aa7047c994a15e41aca/20181214-/1531371091918.png"
                  alt="user"
                />
              </div>
              <div className="tutor-info">
                <h6 className="text-center tutor-name">Nguyễn Đức Việt</h6>
                <h6 className="text-center">
                  <i className="fa fa-address-book"></i> 135b Trần Hưng Đạo,
                  Q.1, TP.HCM
                </h6>
              </div>

              <div className="tutor-rent">
                <p className="tutor-price">100,000 đ/h</p>
                <div className="btn btn-danger btn-block">Thuê</div>
              </div>
            </div>
            <div className="col-md-8">
              <div>
                <div>

                  <h4>Giới thiệu</h4>
                  <br />
                  <p>
                    - Nguyễn Đức Việt sinh năm 1986, tốt nghiệp Đại học Bách
                    khoa, khoa công nghệ thông tin.
                  </p>
                  <p>
                    {" "}
                    - Ngoài ra anh còn tham gia rất nhiều dự án dạy các
                    shortcourse cho người đi làm và các dự án freelance khác về
                    thiết kế website dựa trên ngôn ngữ lập trình mã nguồn mở.
                  </p>

                  <hr/>

                  <div className="row">
                    <div className="col-md-4">
                      <h6>Số học viên</h6>
                      <b className="text-danger">36 người</b>
                    </div>
                    <div className="col-md-4">
                      <h6>Tỉ lệ hoàn thành</h6>
                      <b className="text-danger">9.8</b>
                    </div>
                    <div className="col-md-4">
                      <h6>Đánh giá từ học viên</h6>
                      <b className="text-danger">4.9</b>
                    </div>
                  </div>

                  <hr/>

                  <div>
                    <h4>Kỹ năng</h4>
                    <br />
                    <span className="label label-warning">
                      Công nghệ thông tin
                    </span>
                    <span className="label label-warning">Marketing</span>
                  </div>
                </div>
                <div className="udb-sec udb-cour">
                  <h4>Lịch sử dạy kèm</h4>
                  <HistoryPage />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const HistoryPage = ({}) => {
  return (
    <div class="ml-auto mr-auto">
      <div class="media-area">
        <div class="media">
          <a class="pull-left" href="#paper-kit">
            <div class="avatar">
              <img
                class="media-object"
                src="/img/faces/clem-onojeghuo-2.jpg"
                alt="..."
              />
            </div>
          </a>
          <div class="media-body">
            <h5 class="media-heading">John Wayne</h5>
            <div class="pull-right">
              <h6 class="text-muted">Sep 11, 11:53 AM</h6>
            </div>
            <p>
              Hello guys, nice to have you on the platform! There will be a lot
              of great stuff coming soon. We will keep you posted for the latest
              news.
            </p>
            <p> Don't forget, You're Awesome!</p>

            <div class="media-footer">
              <a class="btn btn-link btn-danger">
                <i class="fa fa-star" aria-hidden="true"></i> 5
              </a>
            </div>
          </div>
        </div>

        <div class="media">
          <a class="pull-left" href="#paper-kit">
            <div class="avatar">
              <img
                class="media-object"
                alt="Tim Picture"
                src="/img/faces/ayo-ogunseinde-2.jpg"
              />
            </div>
          </a>
          <div class="media-body">
            <h5 class="media-heading">Flume</h5>
            <div class="pull-right">
              <h6 class="text-muted">Sep 11, 11:54 AM</h6>
            </div>

            <p>
              Hello guys, nice to have you on the platform! There will be a lot
              of great stuff coming soon. We will keep you posted for the latest
              news.
            </p>

            <div class="media-footer">
              <a class="btn btn-link btn-danger">
                <i class="fa fa-star" aria-hidden="true"></i> 5
              </a>
            </div>
          </div>
        </div>
        <div class="media">
          <a class="pull-left" href="#paper-kit">
            <div class="avatar">
              <img
                class="media-object"
                alt="64x64"
                src="/img/faces/joe-gardner-2.jpg"
              />
            </div>
          </a>
          <div class="media-body">
            <h5 class="media-heading">Banks</h5>
            <div class="pull-right">
              <h6 class="text-muted">Sep 11, 11:57 AM</h6>
            </div>
            <p>
              Hello guys, nice to have you on the platform! There will be a lot
              of great stuff coming soon. We will keep you posted for the latest
              news.
            </p>
            <p> Don't forget, You're Awesome!</p>

            <div class="media-footer">
              <a class="btn btn-link btn-danger">
                <i class="fa fa-star" aria-hidden="true"></i> 5
              </a>
            </div>
          </div>
        </div>
        <br />
        <div class="pagination-area">
          <ul class="pagination pagination-primary pagination-no-border justify-content-center">
            <li class="page-item">
              <a href="#paper-kit" class="page-link">
                <i class="fa fa-angle-double-left" aria-hidden="true"></i>
              </a>
            </li>
            <li class="page-item active">
              <a href="#paper-kit" class="page-link">
                1
              </a>
            </li>
            <li class="page-item">
              <a href="#paper-kit" class="page-link">
                2
              </a>
            </li>
            <li class="page-item">
              <a href="#paper-kit" class="page-link">
                3
              </a>
            </li>
            <li class="page-item">
              <a href="#paper-kit" class="page-link">
                4
              </a>
            </li>
            <li class="page-item">
              <a href="#paper-kit" class="page-link">
                5
              </a>
            </li>
            <li class="page-item">
              <a href="#paper-kit" class="page-link">
                <i class="fa fa-angle-double-right" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TutorDetailPage;
