import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import {composeWithDevTools} from "redux-devtools-extension"
import  rootReducer  from "../Todo/Reducers/rootReducer";
import ToDoReducer from "../Todo/Reducers/ToDoReducer";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)));

export default store;