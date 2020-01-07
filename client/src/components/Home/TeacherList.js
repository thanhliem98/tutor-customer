import React from "react";
import { Link } from "react-router-dom";

const TeacherList = ({ teacherList }) => {
  return (
    <>
      <div className="teacher-list">
        <div className="row">
          {teacherList.map(teacher => {
            return <Teacher key={teacher.id} teacher={teacher} />;
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
          <Link className="avatar" to={"/tutors/" + teacher.id}>
            <img
              src={teacher.avatar}
              alt="Rounded Image"
              className="img-responsive"
            />
            <div className="price">
              {teacher.price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")} đ/h
            </div>
          </Link>
          <div className="card-body">
            <div className="card-description">
                <h5 className="card-title">{teacher.name}</h5>
                {teacher.tags.join(", ")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherList;
