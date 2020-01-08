import React from 'react'
import { Layout, Row, Col, Divider, Icon, Avatar } from 'antd'
import { Link } from 'react-router-dom'
import './MainFooter.style.scss'

const { Footer } = Layout

const MainFooter = () => {
  return (
    <Footer className="main-footer">
      <div className="main-footer__top">
        <Row>
          <Col span={9}>
            <div className="main-footer__top__logo">
              <Link to="/">
                <img
                  alt=""
                  src="http://lh3.googleusercontent.com/A_eGbOBco1zP185wUE3NKQgS7g31Ov_bj9BC86KctCB6LiKCwyJkbATCjWXU_YSdyJ4=w300"
                />
              </Link>
            </div>
            <div className="main-footer__top__icon-info">
              <Avatar icon={<Icon type="environment" />} />
              30 Phạm Văn Đồng Cầu Giấy, Hà Nội
            </div>
            <div className="main-footer__top__icon-info">
              <Avatar icon={<Icon type="phone" />} />
              0359329688
            </div>
            <div className="main-footer__top__icon-info">
              <Avatar icon={<Icon type="mail" />} />
              cooltheme205@gmail.com
            </div>
          </Col>
          <Col span={5}>
            <div className="main-footer__top__info-title">Cẩm nang sử dụng</div>
            <div className="main-footer__top__info-item">
              <Link to="/">Trang chủ</Link>
            </div>
            <div className="main-footer__top__info-item">
              <Link to="/">Giới thiệu</Link>
            </div>
            <div className="main-footer__top__info-item">
              <Link to="/">Giáo viên</Link>
            </div>
            <div className="main-footer__top__info-item">
              <Link to="/">Chuyên ngành</Link>
            </div>
            <div className="main-footer__top__info-item">
              <Link to="/">Liên hệ</Link>
            </div>
          </Col>
          <Col span={5}>
            <div className="main-footer__top__info-title">Chính sách</div>
            <div className="main-footer__top__info-item">
              <Link to="/">Trang chủ</Link>
            </div>
            <div className="main-footer__top__info-item">
              <Link to="/">Giới thiệu</Link>
            </div>
            <div className="main-footer__top__info-item">
              <Link to="/">Giáo viên</Link>
            </div>
            <div className="main-footer__top__info-item">
              <Link to="/">Chuyên ngành</Link>
            </div>
            <div className="main-footer__top__info-item">
              <Link to="/">Liên hệ</Link>
            </div>
          </Col>
          <Col span={5}>
            <div className="main-footer__top__info-title">Dịch vụ</div>
            <div className="main-footer__top__info-item">
              <Link to="/">Trang chủ</Link>
            </div>
            <div className="main-footer__top__info-item">
              <Link to="/">Giới thiệu</Link>
            </div>
            <div className="main-footer__top__info-item">
              <Link to="/">Giáo viên</Link>
            </div>
            <div className="main-footer__top__info-item">
              <Link to="/">Chuyên ngành</Link>
            </div>
            <div className="main-footer__top__info-item">
              <Link to="/">Liên hệ</Link>
            </div>
          </Col>
        </Row>
      </div>
      <Divider />
    </Footer>
  )
}

export default MainFooter
