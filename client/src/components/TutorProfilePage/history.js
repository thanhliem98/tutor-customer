import React, { Component } from "react";

class TutorHistoryPage extends Component {
  histories = [
    {
      id: "ls000001",
      name: "Lý Thanh Liêm",
      time: 1,
      totalAmount: 1000000,
      status: "DONE"
    },
    {
      id: "ls000002",
      name: "Lý Thanh Liêm",
      time: 1,
      totalAmount: 1000000,
      status: "INCOMPLETE"
    },
    {
      id: "ls000003",
      name: "Lý Thanh Liêm",
      time: 1,
      totalAmount: 1000000,
      status: "INCOMPLETE"
    },
    {
      id: "ls000004",
      name: "Lý Thanh Liêm",
      time: 1,
      totalAmount: 1000000,
      status: "INCOMPLETE"
    },
    {
      id: "ls000005",
      name: "Lý Thanh Liêm",
      time: 1,
      totalAmount: 1000000,
      status: "INCOMPLETE"
    },
    {
      id: "ls000006",
      name: "Lý Thanh Liêm",
      time: 1,
      totalAmount: 1000000,
      status: "INCOMPLETE"
    }
  ];

  render() {
    return (
      <div className="tutor-history">
        <div className="container">
          <div className="col-md-12 ml-auto mr-auto">
            <h4 className="title">
              <small>Lịch sử dạy</small>
            </h4>
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th className="text-center">STT</th>
                    <th className="text-center">Mã</th>
                    <th className="text-center">Người học</th>
                    <th className="text-center">Thời gian</th>
                    <th className="text-center">Trạng thái</th>
                    <th className="text-center">Tổng tiền</th>
                    <th className="text-center">Hành động</th>
                  </tr>
                </thead>
                <tbody>
                  {this.histories.map((history, index) => {
                    return (
                      <tr>
                        <td className="text-center">{index + 1}</td>
                        <td className="text-center">{history.id}</td>
                        <td className="text-center">{history.name}</td>
                        <td className="text-center">{history.time} giờ</td>
                        <td className="text-center">
                          {history.status === "DONE" ? (
                            <span className="label label-success">
                              Đã chấp nhận
                            </span>
                          ) : (
                            <span className="label label-danger">
                              Đang yêu cầu
                            </span>
                          )}
                        </td>
                        <td className="text-center">{history.totalAmount}</td>
                        <td className="td-actions">
                          <div className="text-center">
                            <button
                              type="button"
                              className="btn btn-primary btn-sm mr-2 text-center"
                              data-toggle="modal"
                              data-target={"#" + history.id}
                            >
                              Xem
                            </button>
                          </div>

                          <div
                            className="modal fade"
                            id={history.id}
                            tabIndex="-1"
                            role="dialog"
                            aria-hidden="false"
                          >
                            <div className="modal-dialog modal-register">
                              <div className="modal-content">
                                <div className="modal-header no-border-header">
                                  <button
                                    type="button"
                                    className="close"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                  >
                                    <span aria-hidden="true">&times;</span>
                                  </button>
                                  <h6 className="text-muted">
                                    Thông tin chi tiết
                                  </h6>
                                </div>
                                <div className="modal-body">
                                  <div className="form-group">
                                    <div className="row">
                                      <div className="col-md-6">
                                        <div>
                                          <div className="text-detail text-muted">
                                            Mã đơn hàng
                                          </div>
                                          <p className="text-dark">L00000001</p>
                                        </div>

                                        <div>
                                          <div className="text-detail text-muted">
                                            Thời gian học
                                          </div>
                                          <p className="text-dark">1h</p>
                                        </div>

                                        <div>
                                          <div className="text-detail text-muted">
                                            Tổng tiền
                                          </div>
                                          <p className="text-dark">100000</p>
                                        </div>
                                      </div>
                                      <div className="col-md-6">
                                        <div>
                                          <div className="text-detail text-muted">
                                            Người học
                                          </div>
                                          <p className="text-dark">
                                            Lý Thanh Liêm
                                          </p>
                                        </div>

                                        <div>
                                          <div className="text-detail text-muted">
                                            Giá
                                          </div>
                                          <p className="text-dark">
                                            100000 đ/h
                                          </p>
                                        </div>

                                        <div>
                                          <div className="text-detail text-muted">
                                            Mức độ hài lòng
                                          </div>
                                          <p className="text-dark">
                                            5
                                          </p>
                                        </div>

                                      </div>

                                      <div className="col-md-12">
                                        <div className="text-detail text-muted">
                                          Đánh giá từ người học
                                        </div>
                                        <p>
                                          Larger, yet dramatically thinner. More
                                          powerful, but remarkably power
                                          efficient.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="modal-footer no-border-footer">
                                  <span className="text-muted  text-center">
                                    <div className="col-md-12">
                                      <button className="btn btn-primary">
                                        Chấp nhận
                                      </button>
                                    </div>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="pagination-area">
              <ul className="pagination pagination-primary pagination-no-border justify-content-center">
                <li className="page-item">
                  <a href="#paper-kit" className="page-link">
                    <i
                      className="fa fa-angle-double-left"
                      aria-hidden="true"
                    ></i>
                  </a>
                </li>
                <li className="page-item active">
                  <a href="#paper-kit" className="page-link">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a href="#paper-kit" className="page-link">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a href="#paper-kit" className="page-link">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a href="#paper-kit" className="page-link">
                    4
                  </a>
                </li>
                <li className="page-item">
                  <a href="#paper-kit" className="page-link">
                    5
                  </a>
                </li>
                <li className="page-item">
                  <a href="#paper-kit" className="page-link">
                    <i
                      className="fa fa-angle-double-right"
                      aria-hidden="true"
                    ></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TutorHistoryPage;
