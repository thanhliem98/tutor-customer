import React, { Component } from "react";

class TutorDetailPage extends Component {
  render() {
    return (
      <section>
        <div className="pro-cover"></div>

        <div className="stu-db">
          <div className="container pg-inn">
            <div className="col-md-3">
              <div className="pro-user">
                <img
                  src="https://d1nzpkv5wwh1xf.cloudfront.net/320/k-57bd1aa7047c994a15e41aca/20181214-/1531371091918.png"
                  alt="user"
                />
              </div>
              <div className="pro-user-bio">
                <ul>
                  <li>
                    <h4>Nguyễn Đức Việt</h4>
                  </li>
                  <li>135b Trần Hưng Đạo, Q.1, TP.HCM</li>
                  <li>Đánh giá: 4.7</li>
                  <li>Học viên: 34</li>
                </ul>
              </div>
            </div>
            <div className="col-md-9">
              <div className="udb">
                <div className="udb-sec udb-prof">
                  <h4>
                    <img src="//images/icon/db1.png" alt="" /> Giới thiệu
                  </h4>
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

                  <div class="pg-eve-reg">
                    <a>Công nghệ thông tin</a>
                    <a>Kinh doanh - khởi nghiệp</a>
                  </div>
                </div>
                <div className="udb-sec udb-cour">
                  <h4>Lịch sử dạy kèm</h4>

                  <div className="sdb-cours">
                    <ul>
                      <li>
                        <a href="#">
                          <div className="list-mig-like-com com-mar-bot-30">
                            <div className="list-mig-lc-img">
                              {" "}
                              <img src="https://d1nzpkv5wwh1xf.cloudfront.net/320/k-57bd1aa7047c994a15e41aca/20181214-/1531371091918.png" alt="" />{" "}
                              <span className="home-list-pop-rat list-mi-pr">
                                Duration:150 Days
                              </span>{" "}
                            </div>
                            <div className="list-mig-lc-con">
                              <h5>Nguyễn Văn A</h5>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <div className="list-mig-like-com com-mar-bot-30">
                            <div className="list-mig-lc-img">
                              {" "}
                              <img src="https://d1nzpkv5wwh1xf.cloudfront.net/320/k-57bd1aa7047c994a15e41aca/20181214-/1531371091918.png" alt="" />{" "}
                              <span className="home-list-pop-rat list-mi-pr">
                                Duration:60 Days
                              </span>{" "}
                            </div>
                            <div className="list-mig-lc-con">
                              <h5>Nguyễn Văn B</h5>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <div className="list-mig-like-com com-mar-bot-30">
                            <div className="list-mig-lc-img">
                              {" "}
                              <img src="https://d1nzpkv5wwh1xf.cloudfront.net/320/k-57bd1aa7047c994a15e41aca/20181214-/1531371091918.png" alt="" />{" "}
                              <span className="home-list-pop-rat list-mi-pr">
                                Duration:30 Days
                              </span>{" "}
                            </div>
                            <div className="list-mig-lc-con">
                              <h5>Nguyễn Văn C</h5>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <div className="list-mig-like-com com-mar-bot-30">
                            <div className="list-mig-lc-img">
                              {" "}
                              <img src="https://d1nzpkv5wwh1xf.cloudfront.net/320/k-57bd1aa7047c994a15e41aca/20181214-/1531371091918.png" alt="" />{" "}
                              <span className="home-list-pop-rat list-mi-pr">
                                Duration:20 Days
                              </span>{" "}
                            </div>
                            <div className="list-mig-lc-con">
                              <h5>Nguyễn Văn D</h5>
                            </div>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <br />

                  <div className="text-center">
                    <button type="button" class="btn btn-danger">
                      Xem
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default TutorDetailPage;
