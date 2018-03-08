import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import auth from 'reducers/auth';
import signupInfo from 'reducers/signup';
import space from 'reducers/space';

const reducer = combineReducers({
  auth,
  signupInfo,
  space,
});

export default createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk)),
);
