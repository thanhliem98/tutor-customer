import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import reducer from './reducers'
import Home from './components/Home'
import Register from './components/RegisterTeacher'
import Header from './components/Header'

const store = createStore(reducer)

render(
  <Router>
    <Switch>
      <Router path="/teacher/register">
        <Provider store={store}>
          <Header />
          <Register />
        </Provider>
      </Router>
      <Router path="/">
        <Provider store={store}>
          <Header />
          <Home />
        </Provider>
      </Router>
    </Switch>
  </Router>,
  document.getElementById('root')
)
