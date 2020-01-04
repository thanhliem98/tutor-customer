import React, { Component } from "react";
import { Line } from "react-chartjs-2";

class StatisticPage extends Component {
  render() {
    const data = {
      labels: ["31/12", "01/01", "02/01", "03/01", "04/01", "05/01", "Hôm nay"],
      datasets: [
        {
          label: "Doanh thu",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "rgba(75,192,192,0.4)",
          borderColor: "rgba(75,192,192,1)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgba(75,192,192,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(75,192,192,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [65, 59, 80, 81, 56, 55, 40]
        }
      ]
    };

    return (
      <div className="tutor-statistic">
        <div className="container">

        <div>
            <h4 className="title">
              <small>Thống kê</small>
            </h4>

            <div className="row">
              <div className="col-md-3">
                <div className="info">
                  <div className="icon">
                    <i className="nc-icon nc-time-alarm"></i>
                  </div>
                  <div className="description">
                    <h4 className="info-title"> Tổng doanh thu </h4>
                    <h4 className="info-title text-danger">10.000.000 đ</h4>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="info">
                  <div className="icon">
                    <i className="nc-icon nc-delivery-fast"></i>
                  </div>
                  <div className="description">
                    <h4 className="info-title"> Số học viên </h4>
                    <h4 className="info-title text-danger">36 người</h4>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="info">
                  <div className="icon">
                    <i className="nc-icon nc-delivery-fast"></i>
                  </div>
                  <div className="description">
                    <h4 className="info-title"> Tỉ lệ hoàn thành </h4>
                    <h4 className="info-title text-danger">9.8</h4>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="info">
                  <div className="icon">
                    <i className="nc-icon nc-palette"></i>
                  </div>
                  <div className="description">
                    <h4 className="info-title"> Đánh giá </h4>
                    <h4 className="info-title text-danger">5.0</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <h4 className="title">
              <small>Thống kê doanh thu</small>
            </h4>
            <Line data={data} />
          </div>


        </div>
      </div>
    );
  }
}

export default StatisticPage;
