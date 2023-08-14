import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import {composeWithDevTools} from "redux-devtools-extension"
import  rootReducer  from "../Todo/Reducers/rootReducer";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)));

export default store;