import React from 'react'

const RegisterPageTwo = () => {
    return <main>
            <div class="member-box d-flex align-items-center">
                <div class="container">
                    <div class="process-wrap text-center">
                        <h3 class="mb-3">Chia sẻ về bạn</h3>
                        <div class="progress">
                            <div class="progress-bar bg-warning progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: '50%' }} aria-valuenow="66" aria-valuemin="0" aria-valuemax="100">Câu 2 / 4</div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6 mb-8 mb-md-0">
                            <form id="acf-form" class="acf-form" action="" method="post">
                                <div class="acf-fields acf-form-fields -top">
                                    <div class="acf-field acf-field-radio acf-field-5d217ccd3b40a can-half" data-name="teaching_exp" data-type="radio" data-key="field_5d217ccd3b40a">
                                        <div class="acf-label">
                                            <label for="acf-field_5d217ccd3b40a">Bạn đã có kinh nghiệm tạo dựng video khóa học chưa?</label>
                                        </div>
                                        <div class="acf-input">
                                            <input name="acf[field_5d217ccd3b40a]" type="hidden"></input>
                                            <ul class="acf-radio-list acf-bl" data-allow_null="0" data-other_choice="0">
                                                <li>
                                                    <input type="radio" id="acf-field_5d217ccd3b40a" name="acf[field_5d217ccd3b40a]" value="Đã từng dạy trực tiếp, nhưng không phải giảng viên chính thức." ></input>
                                                    <label>
                                                    Mới bắt đầu
                                                    </label>
                                                </li>
                                                <li>
                                                    <input type="radio" id="acf-field_5d217ccd3b40a-Dạy chuyên nghiệp tại các trường lớp" name="acf[field_5d217ccd3b40a]" value="Dạy chuyên nghiệp tại các trường lớp" ></input>
                                                    <label class="selected">
                                                    Biết một chút
                                                    </label>
                                                </li>
                                                <li>
                                                    <input type="radio" id="acf-field_5d217ccd3b40a-Đã có kinh nghiệm giảng dạy online" name="acf[field_5d217ccd3b40a]" value="Đã có kinh nghiệm giảng dạy online" ></input>
                                                    <label>
                                                    Đã có kinh nghiệm
                                                    </label>
                                                </li>
                                                <li>
                                                    <input type="radio" id="acf-field_5d217ccd3b40a-Chưa từng có hoạt động giảng dạy, chỉ hướng dẫn nhân viên, hoặc chỉ có kinh nghiệm trong nghề..." name="acf[field_5d217ccd3b40a]" value="Chưa từng có hoạt động giảng dạy, chỉ hướng dẫn nhân viên, hoặc chỉ có kinh nghiệm trong nghề..." ></input>
                                                    <label>
                                                    Tôi đã có video và sẵn sàng để upload lên
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
                                <p style={{textAlign: 'justify'}}><span style={{fontSize: '0.9em'}}><em>Trong những năm qua, Education Master đã hướng dẫn hàng ngàn giảng viên cách quay dựng bài giảng tại nhà. Bất kể bạn đã có kinh nghiệm quay dựng hay chưa, bạn cũng có thể trở thành một chuyên gia video. Education Master sẽ trang bị cho giảng viên các tài nguyên, mẹo hỗ trợ để giúp giảng viên sản xuất được khóa học hiệu quả nhất.  &nbsp;&nbsp;</em></span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        }
        
export default RegisterPageTwo