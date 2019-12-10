import { combineReducers } from 'redux'
import todos from './todos'
import login from './login';
import users from './user';

const rootReducer = combineReducers({
  todos,
  login,
  users
})

export default rootReducer
