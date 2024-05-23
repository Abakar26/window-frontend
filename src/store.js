import { configureStore } from '@reduxjs/toolkit'
import auth from './reducers/auth';
import message from "./reducers/message";
import counterReducer from './reducers/preferences';

const store = configureStore({
  reducer: {
    auth: auth,
    message: message,
    counter: counterReducer,
  }
});
export default store;