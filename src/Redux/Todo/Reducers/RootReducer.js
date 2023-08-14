import { combineReducers } from "redux";
import { ToDoReducer } from "./ToDoReducer";

export const RootReducer = combineReducers({ todolist: ToDoReducer })