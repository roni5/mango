import { combineReducers } from 'redux';
import posts from './posts';
import com from './com';

const rootReducer = combineReducers({
  posts,
  com,
});

export default rootReducer;
