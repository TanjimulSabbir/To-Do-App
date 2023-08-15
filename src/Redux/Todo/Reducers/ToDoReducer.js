import { ADDED, ALLCOMPLETED, CLEARCOMPLETED, DELETED, SELECTCOLOR, TOGGLED } from "../ActionTypes/ActionTypes"
import InitialState from "./initialState";

const ToDoReducer = (state = InitialState, action) => {
    switch (action.type) {
        case ADDED:
            return [...state, action.payload]
        case DELETED: {
            const restOfToDo = state.filter(data => data.id !== action.payload);
            return restOfToDo;
        }
        case CLEARCOMPLETED: {
            return state.filter(data => !data.complete)
        }
        case ALLCOMPLETED: {
            return state.filter(data => data.complete)
        }
        case SELECTCOLOR: {
            const selectedToDo = state.filter(data => data.id == action.id);
            return selectedToDo;
        }
        case TOGGLED: {
            const selectedToDoText = state.filter(data => data.id == action.id);
            return selectedToDoText;
        }
        default: {
            return state;
        }
    }
}

export default ToDoReducer;