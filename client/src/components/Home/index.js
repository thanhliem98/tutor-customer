import React from "react";
import HeaderHome from "./header";
import Slide from "./slide";
import DiscoverMore from "./discoverMore";
import QuickLink from "./quicklink";
import PopularCourse from "./populerCourse";
import Header from "../Header";
import TeacherList from "./TeacherList";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const teacherList = [
      {
        id: 1,
        avatar: "https://www.cambly.com/static/images/landing/tutors/kay_s.jpg",
        name: "Lý Thanh Liêm",
        price: 100000,
        tags: ["Công Nghệ Thông Tin", "Marketing", "Âm Nhạc"]
      },
      {
        id: 2,
        avatar: "https://www.cambly.com/static/images/landing/tutors/kay_s.jpg",
        name: "Lý Thanh Liêm",
        price: 100000,
        tags: ["Công Nghệ Thông Tin", "Marketing", "Âm Nhạc"]
      },
      {
        id: 3,
        avatar: "https://www.cambly.com/static/images/landing/tutors/kay_s.jpg",
        name: "Lý Thanh Liêm",
        price: 100000,
        tags: ["Công Nghệ Thông Tin", "Marketing", "Âm Nhạc"]
      },
      {
        id: 4,
        avatar: "https://www.cambly.com/static/images/landing/tutors/kay_s.jpg",
        name: "Lý Thanh Liêm",
        price: 100000,
        tags: ["Công Nghệ Thông Tin", "Marketing", "Âm Nhạc"]
      }
    ];

    return (
      <>
        <div className="container">
          <TeacherList teacherList={teacherList} />
        </div>
      </>
    );
  }
}

export default Home;
