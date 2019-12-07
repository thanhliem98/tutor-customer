import React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import reducer from "./reducers";
import Home from "./components/Home";
import Register from "./components/RegisterTeacher";
import Header from "./components/Header";
import LoginTeacher from "./components/LoginTeacher";
import LoginUser from "./components/LoginUser";
import Modal from "./components/Modal";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import UserPage from "./components/UserPage";
import TeacherPage from "./components/TeacherPage";

const store = createStore(
  reducer,
  applyMiddleware(thunkMiddleware, createLogger())
);

const routing = (
  <Provider store={store}>
    <Router>
      <div>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/teacher/register" component={Register} />
        <Route path="/teacher/login" component={LoginTeacher} />
        <Route path="/user/login" component={LoginUser} />
        <Route exact path="/user" component={UserPage}/>
        <Route exact path="/teacher" component={TeacherPage}/>
        <Modal />
      </div>
    </Router>
  </Provider>
);

render(routing, document.getElementById("root"));

// render(
//   <Router>
//     <Switch>
//       <Router path="/teacher/register">
//         <Provider store={store}>
//           <Header />
//           <Register />
//         </Provider>
//       </Router>
//       <Router exact path="/">
//         <Provider store={store}>
//           <Header />
//           <Home />
//         </Provider>
//       </Router>
//     </Switch>
//   </Router>,
//   document.getElementById('root')
// )
