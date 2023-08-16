import { ALLSHOW, COLORSHOW, COMPLETEDSHOW, INCOMPLETEDSHOW } from "../ActionTypes/ActionTypes"
import InitialState from "../../Todo/Reducers/initialState";


const FilterReducers = (state = InitialState, action) => {
    switch (action.type) {
        case ALLSHOW:
            return state;
        case COMPLETEDSHOW: {
            const completedToDos = state.filter(data => data.completed);
            return completedToDos;
        }
        case INCOMPLETEDSHOW: {
            return state.filter(data => !data.completed)
        }
        case COLORSHOW: {
            const selectedToDo = state.filter(todo => todo.color === action.payload)
            return selectedToDo;
        }
        default: {
            return state;
        }
    }
}

export default FilterReducers;