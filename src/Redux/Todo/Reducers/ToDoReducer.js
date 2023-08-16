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
            return state.filter(data => !data.completed)
        }
        case ALLCOMPLETED: {
            // const allcompleted=state.filter(data => data.complete)
            return state.map(data => {
                return { ...data, completed: true }
            })
        }
        case SELECTCOLOR: {
            const selectedToDo = state.map(data => {
                if (data.id !== action.payload.todoid) {
                    return data;
                } else {
                    return {
                        ...data, color: action.payload.color
                    }
                }
            });
            return selectedToDo;
        }
        case TOGGLED: {
            const findSelected = state.map(data => {
                if (data.id === action.payload) {
                    return { ...data, completed: !data.completed }
                } else {
                    return data;
                }
            })
            return findSelected;
        }
        default: {
            return state;
        }
    }
}

export default ToDoReducer;