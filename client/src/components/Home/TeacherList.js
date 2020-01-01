import React from "react";

const TeacherList = ({teacherList}) => {

  return (
    <>
      <div className="teacher-list container">
        <div className="row">
          {teacherList.map(teacher => {
            return <Teacher teacher={teacher} />;
          })}
        </div>
      </div>
    </>
  );
};

const Teacher = ({ teacher }) => {
  return (
    <div className="col-md-3 col-sm-4">
      <div className="card card-product card-plain">
        <div className="card-image">
          <a className="avatar" href="#paper-kit">
            <img
              src="/img/new_logo.png"
              alt="Rounded Image"
              className="img-rounded img-responsive"
            />
            <div className="price">30,000 đ/h</div>
          </a>
          <div className="card-body">
            <div className="card-description">
              <p className="card-description">
                <h5 className="card-title">{teacher.name}</h5>
                {teacher.tags.join(', ')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherList;
