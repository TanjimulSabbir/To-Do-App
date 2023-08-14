import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import { RootReducer } from "../Todo/Reducers/RootReducer";
import {composeWithDevTools} from "redux-devtools-extension"


export const store = createStore(RootReducer, composeWithDevTools(applyMiddleware(logger)))