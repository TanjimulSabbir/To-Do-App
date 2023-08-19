import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension"
import rootReducer from "../Todo/Reducers/RootReducer";

const Store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)));

export default Store;