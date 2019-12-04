import React from 'react'

const RegisterPageThree = () => {
    return <main>
        <div class="member-box d-flex align-items-center">
            <div class="container">
                <div class="process-wrap text-center">
                    <h3 class="mb-3">Chia sẻ về bạn</h3>
                    <div class="progress">
                        <div class="progress-bar bg-warning progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: '75%' }} aria-valuenow="66" aria-valuemin="0" aria-valuemax="100">Câu 3 / 4</div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 mb-8 mb-md-0">
                        <form id="acf-form" class="acf-form" action="" method="post">
                            <div class="acf-fields acf-form-fields -top">
                                <div class="acf-field acf-field-radio acf-field-5d217ccd3b40a can-half" data-name="teaching_exp" data-type="radio" data-key="field_5d217ccd3b40a">
                                    <div class="acf-label">
                                        <label for="acf-field_5d217ccd3b40a">Bạn muốn hợp tác tư cách cá nhân hay pháp nhân?</label>
                                    </div>
                                    <div class="acf-input">
                                        <input name="acf[field_5d217ccd3b40a]" type="hidden"></input>
                                        <ul class="acf-radio-list acf-bl" data-allow_null="0" data-other_choice="0">
                                            <li>
                                                <input type="radio" id="acf-field_5d217ccd3b40a" name="acf[field_5d217ccd3b40a]" value="Đã từng dạy trực tiếp, nhưng không phải giảng viên chính thức." ></input>
                                                <label>
                                                    Cá nhân
                                                    </label>
                                            </li>
                                            <li>
                                                <input type="radio" id="acf-field_5d217ccd3b40a-Dạy chuyên nghiệp tại các trường lớp" name="acf[field_5d217ccd3b40a]" value="Dạy chuyên nghiệp tại các trường lớp" ></input>
                                                <label class="selected">
                                                    Pháp nhân
                                                    </label>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="acf-form-submit">
                                <div class="container">
                                    <div class="nav-wrap">
                                        <a class="btn d-none btn-secondary mr-3" href="https://hoptac.edumall.vn/thanh-vien?step=personal_or_group">Quay lại</a>
                                        <input type="submit" class="btn btn-warning ml-auto text-white" value="Tiếp theo" />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="col-md-6">
                        <div class="content-text lh-16 font-11x">
                            <p style={{textAlign: 'left'}}><strong><span style={{fontSize: '0.9em'}}><em>Tùy vào phương thức hợp tác cá nhân hay pháp nhân, quy trình hợp tác giảng viên với Education Master sẽ khác nhau.</em></span></strong></p>
                            <p style={{textAlign: 'left'}}><span style={{fontSize: '0.9em'}}><em><strong>&#8211; Điều kiện cần để hợp tác cá nhân</strong>: Chứng minh nhân dân/ Hộ chiếu</em></span></p>
                            <p style={{textAlign: 'left'}}><span style={{fontSize: '0.9em'}}><em><strong>&#8211; Điều kiện cần để hợp tác pháp nhân:</strong> </em></span><span style={{fontSize: '0.9em'}}><em>Giấy phép Đăng ký kinh doanh và 1 trong các giấy tờ sau:</em></span></p>
                            <p><span style={{fontSize:'0.9em'}}><em> + Giấy chứng nhận đăng kí hoạt động nghề nghiệp</em></span><br />
                                <span style={{fontSize:'0.9em'}}><em> + Giấy phép hoạt động giáo dục kĩ năng sống và hoạt động giáo dục ngoài giờ chính khóa</em></span><br />
                                <span style={{fontSize:'0.9em'}}><em> + Giấy chứng nhận hoạt động của trung tâm đào tạo ngoại ngữ/tin học</em></span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
}

export default RegisterPageThree