import { ADDED, ALLCLEAR, ALLCOMPLETED, DELETED, SELECTCOLOR, SELECTTEXT } from "../ActionTypes/ActionTypes"
import { InitialState } from "./initialState"

export const ToDoReducer = (state = InitialState, action) => {
    switch (action.type) {
        case ADDED:
            return [...state, action.payload]
        case DELETED: {
            const restOfToDo = state.filter(data => data.id !== action.id);
            return restOfToDo;
        }
        case ALLCLEAR: {
            return []
        }
        case ALLCOMPLETED: {
            return [...state, action.payload]
        }
        case SELECTCOLOR: {
            const selectedToDo = state.filter(data => data.id == action.id);
            return selectedToDo;
        }
        case SELECTTEXT: {
            const selectedToDoText = state.filter(data => data.id == action.id);
            return selectedToDoText;
        }
        default:
            return state;
    }
}