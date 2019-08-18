import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';
// import logger from 'redux-logger';
// import thunk from 'redux-thunk';
// import posts from './reducers/posts';
// import comments from './reducers/comments';
// import promise from 'redux-promise-middleware';
// in combine reducers you either change import name or give it a key {counter: counterReducer}

// const defaultState = {
//   posts,
//   com,
// };

const store = createStore(rootReducer);

export default store;
