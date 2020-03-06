import { createStore, applyMiddleware } from "redux";


import logger from "redux-logger";

import rootReducer from "./reducer";

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, applyMiddleware(logger));
  return store;
}