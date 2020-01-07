import React from "react";
import { Link } from "react-router-dom";

const UserHistoryDetail = ({}) => {
  return (
    <div className="user-history-detail">
      <div className="container">
        <div className="col-md-12 ml-auto mr-auto">
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8">
              <div className="detail">
                <div className="row">
                  <h4 className="col-md-6">Chi tiết đơn hàng #LS000001</h4>
                  <h4 className="col-md-6">
                    <b>Giao hàng thành công</b>
                  </h4>
                </div>

                <div className="row">
                  <div className="col-md-4">Mã hợp đồng </div>
                  <div className="col-md-4">Mã hợp đồng </div>
                  <div className="col-md-4">Mã hợp đồng </div>
                </div>

                <br />
                <Link to="/userHistory">&#60;&#60; Quay lại đơn hàng của tôi</Link>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHistoryDetail;
