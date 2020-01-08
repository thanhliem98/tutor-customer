import React from "react";
import { Link } from "react-router-dom";

const UserHistoryPage = ({}) => {
  const histories = [
    {
      id: "ls000001",
      name: "Lý Thanh Liêm",
      time: 1,
      totalAmount: 1000000,
      status: "APPROVED"
    },
    {
      id: "ls000002",
      name: "Lý Thanh Liêm",
      time: 1,
      totalAmount: 1000000,
      status: "REQUEST"
    },
    {
      id: "ls000003",
      name: "Lý Thanh Liêm",
      time: 1,
      totalAmount: 1000000,
      status: "REQUEST"
    },
    {
      id: "ls000004",
      name: "Lý Thanh Liêm",
      time: 1,
      totalAmount: 1000000,
      status: "REQUEST"
    },
    {
      id: "ls000005",
      name: "Lý Thanh Liêm",
      time: 1,
      totalAmount: 1000000,
      status: "REQUEST"
    },
    {
      id: "ls000006",
      name: "Lý Thanh Liêm",
      time: 1,
      totalAmount: 1000000,
      status: "REQUEST"
    }
  ];

  return (
    <div className="user-history">
      <div className="container">
        <div className="col-md-12 ml-auto mr-auto">
          <h4 className="title">
            <small>Lịch sử học</small>
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
                {histories.map((history, index) => {
                  return (
                    <tr>
                      <td className="text-center">{index + 1}</td>
                      <td className="text-center">{history.id}</td>
                      <td className="text-center">{history.name}</td>
                      <td className="text-center">{history.time} giờ</td>
                      <td className="text-center">
                        {history.status === "APPROVED" ? (
                          <span className="label label-success">
                            Thành công
                          </span>
                        ) : (
                          <span className="label label-danger">
                            Chưa hoàn thành
                          </span>
                        )}
                      </td>
                      <td className="text-center">{history.totalAmount}</td>
                      <td className="td-actions">
                        <button
                          type="button"
                          className="btn btn-primary btn-sm mr-2"
                          data-toggle="modal"
                          data-target={"#" + history.id}
                        >
                          Xem
                        </button>

                        <button   data-toggle="modal" data-target={"#rp" + history.id} className="btn btn-primary btn-sm">
                          Khiếu nại
                        </button>


                        <div
                          className="modal fade"
                          id={'rp' + history.id}
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
                                  Khiếu nại
                                </h6>
                              </div>
                              <div className="modal-body">
                                <div className="form-group">
                                  <div className="row">
                                    <div className="col-md-12">
                                      <div className="form-group">
                                        <div className="text-detail text-muted">
                                          Nội dung khiếu nại
                                        </div>
                                        <textarea row="5" className="form-control"></textarea>
                                      </div>

                                      <button className="mt-4 btn btn-primary btn-block">
                                        Khiếu nại
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="modal-footer no-border-footer">
                                <span className="text-muted  text-center"></span>
                              </div>
                            </div>
                          </div>
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
                                          Người dạy
                                        </div>
                                        <p className="text-dark">
                                          Lý Thanh Liêm
                                        </p>
                                      </div>

                                      <div>
                                        <div className="text-detail text-muted">
                                          Giá
                                        </div>
                                        <p className="text-dark">100000 đ/h</p>
                                      </div>
                                    </div>

                                    <div className="col-md-12">
                                      <div>
                                        <div className="text-detail text-muted">
                                          Khoảng thời gian
                                        </div>
                                        <p className="text-dark">
                                          11:30 20/11/2019 - 12:30 20/11/2019
                                        </p>
                                      </div>
                                    </div>

                                    <div className="col-md-12">
                                      <div>
                                        <div className="text-detail text-muted">
                                          Trạng thái
                                        </div>

                                        <button className="btn btn-success btn-round btn-sm mr-2">
                                          Thành công
                                        </button>
                                        <button className="btn btn-outline-danger btn-round btn-sm">
                                          Không thành công
                                        </button>
                                      </div>
                                    </div>

                                    <div className="col-md-12">
                                      <hr className="w-100" />
                                    </div>

                                    <div className="col-md-12">
                                      <div className="form-group">
                                        <div className="text-detail text-muted">
                                          Đánh giá
                                        </div>
                                        <textarea className="form-control"></textarea>
                                      </div>

                                      <div className="form-gorup">
                                        <div className="text-detail text-muted">
                                          Mức độ hài lòng
                                        </div>
                                        <select className="form-control">
                                          <option>1</option>
                                          <option>2</option>
                                          <option>3</option>
                                          <option>4</option>
                                          <option>5</option>
                                        </select>
                                      </div>

                                      <button className="mt-4 btn btn-primary btn-block">
                                        Đánh giá
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="modal-footer no-border-footer">
                                <span className="text-muted  text-center"></span>
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
                  <i className="fa fa-angle-double-left" aria-hidden="true"></i>
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
};

export default UserHistoryPage;
