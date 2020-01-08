import React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import reducer from "./reducers";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LoginUser from "./components/LoginUser";
import Modal from "./components/Modal";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import UserPage from "./components/UserPage";
import TutorListPage from "./components/TutorListPage";
import TutorDetailPage from "./components/TutorDetailPage";
import TutorProfilePage from "./components/TutorProfilePage";
import UserProfilePage from "./components/UserProfilePage";
import UserHistoryPage from "./components/UserProfilePage/userHistory";
import UserHistoryDetailPage from "./components/UserProfilePage/userHistoryDetail";
import TutorHistoryPage from "./components/TutorProfilePage/history";
import TutorStatisticPage from "./components/TutorProfilePage/statistic";
const config = {
  apiKey: "AIzaSyAyEuasn9IWsgmvvXIw5hSUexht7-R277U",
  authDomain: "uber-tutor.firebaseapp.com",
  databaseURL: "https://uber-tutor.firebaseio.com",
  projectId: "uber-tutor",
  storageBucket: "uber-tutor.appspot.com",
  messagingSenderId: "418667584764",
  appId: "1:418667584764:web:07c652f187c8b521bd8b79"
};

const store = createStore(
  reducer,
  applyMiddleware(thunkMiddleware, createLogger())
);

const routing = (
    <Provider store={store}>
      <Router>
        <div>
          <Header />
          <div className="main">
            <Route exact path="/" component={Home} />
            <Route path="/user/login" component={LoginUser} />
            <Route exact path="/user" component={UserPage} />
            <Route exact path="/userProfile" component={UserProfilePage} />
            <Route exact path="/userHistory" component={UserHistoryPage} />
            <Route path="/userHistory/:id" component={UserHistoryDetailPage} />
            <Route exact path="/tutorProfile" component={TutorProfilePage} />
            <Route exact path="/tutorHistory" component={TutorHistoryPage} />
            <Route
              exact
              path="/tutorStatistic"
              component={TutorStatisticPage}
            />
            <Route exact path="/user" component={UserPage} />
            <Route exact path="/tutors" component={TutorListPage} />
            <Route path="/tutors/:id" component={TutorDetailPage} />
          </div>
          <Modal />
          <Footer />
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
