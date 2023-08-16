import { combineReducers } from "redux";
import ToDoReducer from "./ToDoReducer";
import FilterReducers from "../../Filter/Reducers/FilterReducers";

const rootReducer = combineReducers({ todolist: ToDoReducer, filterData: FilterReducers })

export default rootReducer;