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
        avatar: "/img/new_logo.png",
        name: "Lý Thanh Liêm",
        price: 10,
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
