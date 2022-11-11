import { createStore } from "redux";

import rootReducer from "./reducers02";

const stores = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default stores;
