import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from "redux";
import thunk from "redux-thunk";
import settings from "./reducers/settings";
import auth from "./reducers/auth";
import patients from "./reducers/patients";
import documents from "./reducers/documents";

const initialState = {};

const middleware = [thunk];

const reducers = combineReducers({
  settings,
  auth,
  patients,
  archive: documents,
});

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(...middleware));
const store = createStore(reducers, initialState, enhancer);

export default store;
