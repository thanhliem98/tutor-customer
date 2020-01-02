import React from "react";

const UserProfilePage = ({}) => {
  return (
    <div className="user-profile">
      <div className="container">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <div className="card card-profile card-plain">
              <div className="card-body">
                <div
                  className="fileinput text-center fileinput-new"
                  data-provides="fileinput"
                >
                  <div
                    className="fileinput-new thumbnail img-circle img-no-padding"
                    style={{ maxWidth: 150 + "px", maxHeight: 150 + "px" }}
                  >
                    <img src="/img/placeholder.jpg" alt="..." />
                  </div>
                  <div
                    className="fileinput-preview fileinput-exists thumbnail img-circle img-no-padding"
                    style={{ maxWidth: 150 + "px", maxHeight: 150 + "px" }}
                  ></div>
                  <div>
                    <span className="btn btn-outline-default btn-file btn-round">
                      <span className="fileinput-new">Add Photo</span>
                      <span className="fileinput-exists">Change</span>
                      <input type="hidden" value="" name="..." />
                      <input type="file" name="" />
                    </span>
                    <br />
                    <a
                      href="#paper-kit"
                      className="btn btn-link btn-danger fileinput-exists btn-round"
                      data-dismiss="fileinput"
                    >
                      <i className="fa fa-times"></i> Remove
                    </a>
                  </div>
                </div>

                <div className="form-group text-left">
                  <label>Tên đầy đủ</label>
                  <input value="Anonymous Tim" className="form-control" />
                </div>

                <div className="form-group text-left">
                  <label>Địa chỉ</label>
                  <input value="Hồ Chí Minh" className="form-control" />
                </div>
              </div>
              <div className="card-footer text-center">
                <a
                  href="#paper-kit"
                  className="btn btn-icon btn-rotate btn-round"
                >
                  <i className="fa fa-save"></i> Lưu lại
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;
