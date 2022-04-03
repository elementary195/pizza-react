import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom";
import {applyMiddleware, combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import ReduxThunk from "redux-thunk";
import pizzaReducer from "./store/reducers/pizza";
import {composeWithDevTools} from "redux-devtools-extension";
import filtersReducer from "./store/reducers/filters";
import cartReducer from "./store/reducers/cart";

const rootReducer = combineReducers({
    pizza: pizzaReducer,
    filters: filtersReducer,
    cart: cartReducer
});
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(ReduxThunk)));

ReactDOM.render(
  <React.StrictMode>
      <Router>
          <Provider store={store}>
              <App />
          </Provider>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

