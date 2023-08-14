import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import { RootReducer } from "../Todo/Reducers/RootReducer";


export const store = createStore(RootReducer, applyMiddleware(logger))