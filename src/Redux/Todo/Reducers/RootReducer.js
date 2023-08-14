import { combineReducers } from "redux";
import  ToDoReducer  from "./ToDoReducer";

const rootReducer = combineReducers({ todolist: ToDoReducer })

export default rootReducer;