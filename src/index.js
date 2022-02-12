import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

/* Bootstrap */
import * as bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

/* Redux */
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";

/* Reducers */
import { usersReducer } from "./store/users/usersReducer";

const rootReducer = combineReducers({
  users: usersReducer,
  // Place other reducers here...
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
