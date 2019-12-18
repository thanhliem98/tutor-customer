import React, { Component } from "react";
import { Link } from "react-router-dom";

class TutorListPage extends Component {
  tutors = [
    {
      id: 1,
      avatar:
        "https://d1nzpkv5wwh1xf.cloudfront.net/320/k-57bd1aa7047c994a15e41aca/20181214-/1531371091918.png",
      name: "Nguyễn Đức Việt",
      tags: ["Công nghệ thông tin", "Kinh doanh - khởi nghiệp"],
      rate: 4.2,
      description: `
      - Nguyễn Đức Việt sinh năm 1986, tốt nghiệp Đại học Bách khoa, khoa công nghệ thông tin.\n
      - Ngoài ra anh còn tham gia rất nhiều dự án dạy các shortcourse cho người đi làm và các dự án freelance khác về thiết kế website dựa trên ngôn ngữ lập trình mã nguồn mở.`
    },
    {
      id: 2,
      avatar:
        "https://d1nzpkv5wwh1xf.cloudfront.net/320/k-57e4def8ce4b145a1020dbf9/20180510-/59781_351974344917184_4773534.jpg",
      name: "Giàng Thuận Ý",
      tags: ["Marketing", "Kinh doanh - khởi nghiệp"],
      rate: 4.3,
      description: `
        - Hiện đang là Giám đốc mảng Kinh doanh (Xây dựng chiến lược kinh doanh, setup hệ thống kinh doanh, đội ngũ kinh doanh, quản trị và điều hành doanh nghiệp).
        - Từng đảm nhận các vị trí:
        + Giám đốc Chi nhánh Tập đoàn Hòa Bình Minh (Quản trị hệ thống, điều hành doanh nghiệp).`
    },
    {
      id: 3,
      avatar:
        "https://d1nzpkv5wwh1xf.cloudfront.net/320/k-5768aeb1047c995f75fdbf6b/20171011-/a7d_5441.png",
      name: "Lê Hải",
      tags: ["Hôn nhân - gia đình", "Thể thao - sức khỏe"],
      rate: 4.5,
      description: `
            10 năm nghiên cứu, thực hành và giảng dạy về Massage và Trị liệu tự nhiên cho Học viên đến từ hơn 10 nước trên Thế giới.

            Tốt nghiệp Đại học Y Hà Nội và Hiện nay đang là Bác sỹ tại Bệnh viện Y học cổ truyền Trung ương
            
            3 lần nhận bằng khen của giám đốc bệnh viện Y học cổ truyền Trung ương.
          `
    },
    {
      id: 4,
      avatar:
        "https://d1nzpkv5wwh1xf.cloudfront.net/320/k-577a160c047c994bb7e5b397/20191018-/doanhnhanxahoitaminhtuandoanh.jpg",
      name: "Tạ Minh Tuấn",
      tags: ["Hôn nhân - gia đình", "Thể thao - sức khỏe"],
      rate: 0.0,
      description: `
        Tạ Minh Tuấn là một Serial Social Entrepreneur (Doanh nhân Xã hội sáng lập, đầu tư nhiều doanh nghiệp) thành công.
        Năm 2011, ông được CSIP, British Council, World Bank chứng nhận là Top 15 Doanh nhân Xã hội hàng đầu của Việt Nam. 
        Năm 2015, ông là 1 trong 30 nhân vật thành công nổi bật.
            `
    },
    {
      id: 1,
      avatar:
        "https://d1nzpkv5wwh1xf.cloudfront.net/320/k-57bd1aa7047c994a15e41aca/20181214-/1531371091918.png",
      name: "Nguyễn Đức Việt",
      tags: ["Công nghệ thông tin", "Kinh doanh - khởi nghiệp"],
      rate: 4.2,
      description: `
        - Nguyễn Đức Việt sinh năm 1986, tốt nghiệp Đại học Bách khoa, khoa công nghệ thông tin.\n
        - Ngoài ra anh còn tham gia rất nhiều dự án dạy các shortcourse cho người đi làm và các dự án freelance khác về thiết kế website dựa trên ngôn ngữ lập trình mã nguồn mở.`
    },
    {
      id: 2,
      avatar:
        "https://d1nzpkv5wwh1xf.cloudfront.net/320/k-57e4def8ce4b145a1020dbf9/20180510-/59781_351974344917184_4773534.jpg",
      name: "Giàng Thuận Ý",
      tags: ["Marketing", "Kinh doanh - khởi nghiệp"],
      rate: 4.3,
      description: `
          - Hiện đang là Giám đốc mảng Kinh doanh (Xây dựng chiến lược kinh doanh, setup hệ thống kinh doanh, đội ngũ kinh doanh, quản trị và điều hành doanh nghiệp).
          - Từng đảm nhận các vị trí:
          + Giám đốc Chi nhánh Tập đoàn Hòa Bình Minh (Quản trị hệ thống, điều hành doanh nghiệp).`
    },
    {
      id: 3,
      avatar:
        "https://d1nzpkv5wwh1xf.cloudfront.net/320/k-5768aeb1047c995f75fdbf6b/20171011-/a7d_5441.png",
      name: "Lê Hải",
      tags: ["Hôn nhân - gia đình", "Thể thao - sức khỏe"],
      rate: 4.5,
      description: `
              10 năm nghiên cứu, thực hành và giảng dạy về Massage và Trị liệu tự nhiên cho Học viên đến từ hơn 10 nước trên Thế giới.
  
              Tốt nghiệp Đại học Y Hà Nội và Hiện nay đang là Bác sỹ tại Bệnh viện Y học cổ truyền Trung ương
              
              3 lần nhận bằng khen của giám đốc bệnh viện Y học cổ truyền Trung ương.
            `
    },
    {
      id: 4,
      avatar:
        "https://d1nzpkv5wwh1xf.cloudfront.net/320/k-577a160c047c994bb7e5b397/20191018-/doanhnhanxahoitaminhtuandoanh.jpg",
      name: "Tạ Minh Tuấn",
      tags: ["Hôn nhân - gia đình", "Thể thao - sức khỏe"],
      rate: 0.0,
      description: `
          Tạ Minh Tuấn là một Serial Social Entrepreneur (Doanh nhân Xã hội sáng lập, đầu tư nhiều doanh nghiệp) thành công.
          Năm 2011, ông được CSIP, British Council, World Bank chứng nhận là Top 15 Doanh nhân Xã hội hàng đầu của Việt Nam. 
          Năm 2015, ông là 1 trong 30 nhân vật thành công nổi bật.
              `
    },
    {
      id: 1,
      avatar:
        "https://d1nzpkv5wwh1xf.cloudfront.net/320/k-57bd1aa7047c994a15e41aca/20181214-/1531371091918.png",
      name: "Nguyễn Đức Việt",
      tags: ["Công nghệ thông tin", "Kinh doanh - khởi nghiệp"],
      rate: 4.2,
      description: `
        - Nguyễn Đức Việt sinh năm 1986, tốt nghiệp Đại học Bách khoa, khoa công nghệ thông tin.\n
        - Ngoài ra anh còn tham gia rất nhiều dự án dạy các shortcourse cho người đi làm và các dự án freelance khác về thiết kế website dựa trên ngôn ngữ lập trình mã nguồn mở.`
    },
    {
      id: 2,
      avatar:
        "https://d1nzpkv5wwh1xf.cloudfront.net/320/k-57e4def8ce4b145a1020dbf9/20180510-/59781_351974344917184_4773534.jpg",
      name: "Giàng Thuận Ý",
      tags: ["Marketing", "Kinh doanh - khởi nghiệp"],
      rate: 4.3,
      description: `
          - Hiện đang là Giám đốc mảng Kinh doanh (Xây dựng chiến lược kinh doanh, setup hệ thống kinh doanh, đội ngũ kinh doanh, quản trị và điều hành doanh nghiệp).
          - Từng đảm nhận các vị trí:
          + Giám đốc Chi nhánh Tập đoàn Hòa Bình Minh (Quản trị hệ thống, điều hành doanh nghiệp).`
    },
    {
      id: 3,
      avatar:
        "https://d1nzpkv5wwh1xf.cloudfront.net/320/k-5768aeb1047c995f75fdbf6b/20171011-/a7d_5441.png",
      name: "Lê Hải",
      tags: ["Hôn nhân - gia đình", "Thể thao - sức khỏe"],
      rate: 4.5,
      description: `
              10 năm nghiên cứu, thực hành và giảng dạy về Massage và Trị liệu tự nhiên cho Học viên đến từ hơn 10 nước trên Thế giới.
  
              Tốt nghiệp Đại học Y Hà Nội và Hiện nay đang là Bác sỹ tại Bệnh viện Y học cổ truyền Trung ương
              
              3 lần nhận bằng khen của giám đốc bệnh viện Y học cổ truyền Trung ương.
            `
    },
    {
      id: 4,
      avatar:
        "https://d1nzpkv5wwh1xf.cloudfront.net/320/k-577a160c047c994bb7e5b397/20191018-/doanhnhanxahoitaminhtuandoanh.jpg",
      name: "Tạ Minh Tuấn",
      tags: ["Hôn nhân - gia đình", "Thể thao - sức khỏe"],
      rate: 0.0,
      description: `
          Tạ Minh Tuấn là một Serial Social Entrepreneur (Doanh nhân Xã hội sáng lập, đầu tư nhiều doanh nghiệp) thành công.
          Năm 2011, ông được CSIP, British Council, World Bank chứng nhận là Top 15 Doanh nhân Xã hội hàng đầu của Việt Nam. 
          Năm 2015, ông là 1 trong 30 nhân vật thành công nổi bật.
              `
    }
  ];

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="pop-cour">
        <div className="container">
          <div className="text-center">
            <br />
            <h2>All Tutors</h2>
            <br />
          </div>

          <div className="row">
            <div className="col-md-3">
              <select>
                <option selected disabled="true">
                  Sắp xếp
                </option>
                <option>Theo đánh giá - giảm dần</option>
                <option>Theo đánh giá - tăng dần</option>
              </select>
            </div>

            <div className="col-md-3">
              <select>
                <option selected disabled="true">
                  Giá trên giờ
                </option>
                <option>10000đ - 50000đ</option>
                <option>50000đ - 100000đ</option>
                <option>100000đ - 200000đ</option>
                <option>200000đ - 500000đ</option>
                <option>> 500000đ</option>
              </select>
            </div>

            <div className="col-md-3">
              <select>
                <option selected disabled="true">
                  Kỹ năng
                </option>
                <option>Công nghệ thông tin</option>
                <option>Marketing</option>
                <option>Kinh doanh - khởi nghiệp</option>
                <option>Hôn nhân - gia đình</option>
              </select>
            </div>

            <div className="col-md-3">
              <button class="btn-new">Tìm kiếm</button>
            </div>
          </div>

          <br />

          <div className="row">
            {this.tutors.map(tutor => {
              return <TutorItem tutor={tutor} />;
            })}

            <div className="col-md-12"></div>
          </div>
        </div>
      </section>
    );
  }
}

const TutorItem = ({ tutor }) => {
  return (
    <div className="col-md-6">
      <div>
        <div className="home-top-cour">
          <div className="col-md-3">
            {" "}
            <img src={tutor.avatar} alt="" />{" "}
          </div>
          <div className="col-md-9 home-top-cour-desc">
            <Link to={"/tutors/" + tutor.id}>
              <h3>{tutor.name}</h3>
            </Link>
            <h4>{tutor.tags.join(" / ")}</h4>
            <p>{tutor.description}</p>{" "}
            <span className="home-top-cour-rat">{tutor.rate}</span>
            <div className="hom-list-share">
              <ul>
                <li>
                  <Link to={"/tutors/" + tutor.id}>
                    <i className="fa fa-eye" aria-hidden="true"></i> Xem chi
                    tiết
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorListPage;
