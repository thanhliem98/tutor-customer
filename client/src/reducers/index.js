import { combineReducers } from 'redux'
import todos from './todos'
import login from './login';
import user from './user';

const rootReducer = combineReducers({
  todos,
  login,
  user
})

export default rootReducer
